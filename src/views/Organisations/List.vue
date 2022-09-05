<template>
  <div>
    <b-card>
        <data-table :labels="labels" :data="organisations"
                    @pagination='getPagingRecords'
                    @search="getPagingRecords"
                    :is_data_waiting="is_data_waiting"
                    :pagination="filter">                  
        </data-table>  
    </b-card>          
  </div>
</template>
<script>
import {EventBus} from '@/event';
export default {
  name: 'UserList',
  data() {
    return {
      organisations: [],
      filter:{
        search:'',
        page:1,
        last:null,
        next:2,
        prev:null,
        offset:0,
        limit:10,
      },
      labels:{
        columns: ['S.No.', 'Name', 'No. of users', 'Status', 'Action'],
        rows:['name', 'users', 'status'],
        path:`/organisations`,
        actions:{
          edit:false,
          view:false,
          status:true,
          s_no:true
        }
      },      
      is_data_waiting:true
    }
  },
  async created(){
    const {pagination} = this.$store.state;
    switch (pagination.route === this.$route.path) {
      case true:
        delete pagination.route;
        this.filter = pagination;
        break;
    
      case false:
        this.filter;
        break;
    }
    this.getOrganisations(this.filter);

    EventBus.$on('status', (data) =>{  
        const status_name = data.status_name.split('-')[1]== 'active' ? 'de-activate' : 'activate';
        const status_icon = data.status_name.split('-')[1]== 'success' ? 'danger' : 'success';
        this.$alert.Swal.fire({
            html: `Do you <b class='text-${status_icon}'>${status_name}</b> of ${data.name}`,
            title:'Organisation Management',
            confirmButtonColor: '#0f9ca6',
            showDenyButton: true,
            confirmButtonText: `Yes, ${status_name}`,
            denyButtonText: 'No',
            reverseButtons: true,
            allowOutsideClick:false,
            allowEscapeKey:false,
        }).then((result) => {
            if (result.isConfirmed) {
                this.$alert.processing('Status Changing ...');
                this.$http.put(`users/status`, {id:data.id, type:'organisation'})
                .then((response) => {
                    let status = response.data.data.status_name.split('-')[1];
                    this.audioNotify(`Organisation ${status} successfully`);
                    this.$alert.toast(`Organisation ${status} successfully`, 'info');    
                    this.is_data_waiting=true
                    this.getOrganisations(this.filter);
                })
            }
        })
    });
  },
  methods:{
    getOrganisations: function (data){
      this.$http.post(`organisations`, data)
      .then((response) => {
          this.is_data_waiting=false;
          this.organisations = response.data.data.organisations;
          let {page,prev,last,next,limit,offset} = response.data.data.pagination;
          this.filter = {...this.filter, page,prev,last,next,limit,offset}
      }) 
    },
    getPagingRecords: function({limit, page, search}){
      this.is_data_waiting=true;
      this.getOrganisations({...this.filter,offset:0,limit,page,search});
    },
    makeFilter: function(){
     this.is_data_waiting=true; 
      EventBus.$emit('clearSearch');         
        this.getOrganisations({...this.filter,
            page:1,prev:null,next:2,offset:0});
    },
    makeClear: function(){      
      Object.getOwnPropertyNames(this.filter).forEach(property => {
        this.filter[property]="";
      });  
      EventBus.$emit('clearSearch'); 
      EventBus.$emit('clearRange'); 
      this.filter = {...this.filter, page:1,next:2,prev:null,limit:10,offset:0,
          type : this.$route.params.member_type,did_save:1}; 
      this.$store.commit('setPagination',[{}, '']);    
      this.is_data_waiting=true; 
      this.getOrganisations(this.filter);   
    }
  }
}
</script>