<template>
  <div>
    <b-card>
        <data-table :labels="labels" :data="users"
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
      users: [],
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
        columns: ['Name', 'Designation',  'Organisation', 'Role', 'Status', 'Action'],
        rows:['name', 'designation',  'organisation', 'role', 'status'],
        path:`/users`,
        actions:{
          edit:true,
          view:true,
          status:true,
          delete:true
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
    this.getUsers(this.filter);
    
    EventBus.$on('status', (data) =>{  
        const status_name = data.status_name.split('-')[1]== 'active' ? 'de-activate' : 'activate';
        const status_icon = data.status_name.split('-')[1]== 'success' ? 'danger' : 'success';
        this.$alert.Swal.fire({
            html: `Do you <b class='text-${status_icon}'>${status_name}</b> of ${data.name}`,
            title:'User Management',
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
                this.$http.put(`users/status`, {id:data.id, type:'user'})
                .then((response) => {
                    let status = response.data.data.status_name.split('-')[1];
                    this.audioNotify(`User ${status} successfully`);
                    this.$alert.toast(`User ${status} successfully`, 'info');    
                    this.is_data_waiting=true
                    this.getUsers(this.filter);
                })
            }
        })
    });
    EventBus.$on('delete', (data) =>{  
      console.log(data)
        this.$alert.Swal.fire({
            html: `Do you delete ${data.name}?`,
            title:'User Management',
            confirmButtonColor: '#0f9ca6',
            showDenyButton: true,
            confirmButtonText: `Yes, delete`,
            denyButtonText: 'No',
            reverseButtons: true,
            allowOutsideClick:false,
            allowEscapeKey:false,
        }).then((result) => {
            if (result.isConfirmed) {
                this.$alert.processing('Deleting ...');
                this.$http.delete(`users/delete/${data.id}`)
                .then((response) => {
                    this.audioNotify(`User ${data.name} deleted`);
                    this.$alert.toast(`User ${data.name} deleted`, 'info'); 
                    this.is_data_waiting=true
                    this.getUsers(this.filter);
                })
            }
        })
    });
  },
  methods:{
    getUsers: function (data){
      this.$http.post(`users`, data)
      .then((response) => {
          this.is_data_waiting=false;
          this.users = response.data.data.users;
          let {page,prev,last,next,limit,offset} = response.data.data.pagination;
          this.filter = {...this.filter, page,prev,last,next,limit,offset}
      }) 
    },
    getPagingRecords: function({limit, page, search}){
      this.is_data_waiting=true;
      this.getUsers({...this.filter,offset:0,limit,page,search});
    },
    makeFilter: function(){
     this.is_data_waiting=true; 
      EventBus.$emit('clearSearch');         
        this.getUsers({...this.filter,
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
      this.getUsers(this.filter);   
    }
  }
}
</script>