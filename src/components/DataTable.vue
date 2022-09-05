<template>
    <div style="overflow:auto">
        <!-- Header Part -->
        <div class="d-flex justify-content-between">
            <b-form-select class="mb-3 w-25" v-model="perPage" @change="limitationSelect">
                <b-form-select-option v-for="range in ranges" :key="range.index"
                            :value="range" :selected="range==perPage">{{range}}</b-form-select-option>
            </b-form-select>
            <slot></slot>
            <b-form-input class="w-25" 
                          placeholder="Search ..."
                          @input="termSearch"
                          v-model="searchterm"></b-form-input>
        </div>
        <!-- Table Part -->
        <table class="table table-striped" v-if="is_data_waiting">
            <thead style="background-image:linear-gradient(#083770,#5e0d53);color:white;font-weight:bold">
                <tr>
                    <th scope="col"
                            v-for="column in labels.columns" :key="column.id">
                            {{column}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td :colspan="labels.columns.length">                    
                        <data-skeleton></data-skeleton>
                    </td>                
                </tr>
            </tbody>
        </table>
        <table class="table table-striped" style="overflow:auto" v-else>
            <thead style="background-image:linear-gradient(#083770,#5e0d53);color:white;font-weight:bold">
                <tr>
                    <th scope="col" style="white-space: nowrap;"
                            v-for="column in labels.columns" :key="column.id">
                            {{column}}
                    </th>
                </tr>
            </thead>
            <tbody v-if="data.length" style="font-size:13.8px;">
                <tr v-for="(datum, index) in data" :key="index">

                    <td scope="row"  v-if="labels.actions.s_no">{{parseInt(index)+parseInt(offset)+1}}</td>
                    <td scope="row"  v-if="labels.actions.multiselect">
                        <b-form-checkbox @input="getMultiselect(datum.id,index)"></b-form-checkbox>
                    </td>
                    <td scope="row" v-for="(row, r_index) in labels.rows" :key="r_index">
                        <p v-if="row=='status'">
                            <b-badge pill :variant="datum.status_name.split('-')[0]">{{ datum.status_name.split('-')[1] }}</b-badge>
                        </p>
                        <p v-else style="white-space: nowrap;">
                            {{ row.split('.').length==2? datum[row.split('.')[0]][row.split('.')[1]] :datum[row]}}
                        </p>
                    </td>
                    <td scope="row" class="d-flex">                
                        <button class="btn btn-sm btn-secondary mr-2" title="change status" @click="decide(datum,'status')"  v-if="labels.actions.status">
                            <i class="fa fa-envelope text-success"></i>
                        </button>             
                        <router-link title="edit" :to="{path: `${labels.path}/edit/${datum.id}`}"
                                    v-if="labels.actions.edit">
                            <button  class="btn btn-sm btn-secondary mr-2" title="edit" @click="$store.commit('setPagination', [pagination, $route.path])">
                                <i class="fa fa-paint-brush text-info"></i>
                            </button>
                        </router-link>                 
                        <router-link title="view" :to="{path: `${labels.path}/view/${datum.id}`}"  v-if="labels.actions.view">
                            <button  class="btn btn-sm btn-secondary mr-2"
                                    title="view" @click="$store.commit('setPagination', [pagination, $route.path])">
                                <i class="fa fa-eye text-primary"></i>
                            </button>
                        </router-link>                 
                        <button class="btn btn-sm btn-secondary mr-2" @click="decide(datum, 'delete')"  v-if="labels.actions.delete">
                            <i class="fa fa-trash text-danger"></i>
                        </button>               
                        <button class="btn btn-sm btn-secondary mr-2" title="Edit" @click="decide(datum, 'edit')"  v-if="labels.actions.close">
                            <i class="fa fa-paint-brush text-info"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr class="text-center">
                    <td :colspan="labels.columns.length">No Records Available</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <!-- Pagination -->
        <div class="d-flex justify-content-end" v-if="data.length">
            <nav aria-label="...">
                <ul class="pagination">
                    <li :class="pagination.page==1?'page-item disabled':'page-item'" @click="pagination.page==1? '' : prevPageSelection">
                        <p class="page-link">Prev</p>
                    </li>

                    <li v-for="pageNumber in pagination.last" :key="pageNumber.index"
                        @click="pageSelection(pageNumber)"
                        :class="(pagination.page==pageNumber)?'page-item active':'page-item'" :disabled="(pageNumber > pagination.next||pageNumber <=pagination.prev) && pageNumber != (pagination.last)">
                        <p class="page-link" v-if="pageNumber==pagination.page||pageNumber==pagination.prev||pageNumber==pagination.next||pageNumber==1||pageNumber==pagination.last">{{pageNumber}}</p>
                        <p class="page-link" v-else-if="pageNumber==pagination.page+2||pageNumber==pagination.page-2">...</p>
                    </li>

                    <li :class="pagination.page==pagination.last?'page-item disabled':'page-item'"  @click="pagination.page==pagination.last? '' : nextPageSelection">
                        <p class="page-link">Next</p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import { EventBus } from '@/event';
export default {
    name:'DataTable',
    props:{
        labels:{},
        data:[],
        is_data_waiting:Boolean,
        pagination:{},
        invitee_types:[]
    },
    data() {
        return {
            perPage: this.pagination.limit,
            currentPage: this.pagination.page,
            offset: this.pagination.offset,
            ranges: [10, 25, 50],
            searchterm: '',
            selectedData:[],
        }
    },
    methods:{
        limitationSelect : function (){
            this.offset=0;
            this.currentPage=1;
            this.$emit('pagination', {limit:this.perPage, page:this.currentPage,search:this.searchterm})
        },
        pageSelection: function(page){
            this.currentPage=parseInt(page)
            this.offset= page>1?parseInt(this.perPage)*parseInt(page-1):0 
            this.$emit('pagination', {limit:this.perPage, page,search:this.searchterm})
        },
        prevPageSelection: function(){
            this.currentPage=this.pagination.prev;
            this.pageSelection(this.currentPage)
        },
        nextPageSelection: function(){
            this.currentPage=this.pagination.next;
            this.pageSelection(this.currentPage)
        },
        termSearch: function(){
            this.offset=0;
            this.currentPage=1;
            this.$emit('search', {limit:this.perPage, page:this.currentPage,search:this.searchterm})
        },
        getMultiselect: function(row, index){
            switch (row == this.selectedData[index]) {
                case true:
                    this.selectedData[index] = "";
                    break;
            
                default:
                    this.selectedData[index] = row;
                    break;
            }
            EventBus.$emit('multiselect', this.selectedData);
        },
        decide: function(data,type){
            EventBus.$emit(type, data);
        },
        manipulate: function(data){
            return `${data.split(" ").slice(0,12).join(" ")} ...`;
        }
    },
    created(){
        EventBus.$on('clearSearch', () =>{
            this.searchterm='';
        })
        EventBus.$on('clearRange', () =>{
            this.perPage=10;
        })
        EventBus.$on('clear_multiselect', () =>{
            this.selectedData=[];
        })
    },
    updated(){
        this.offset= this.pagination.offset
    },
};
</script>
<style scoped>
.page-link{
    cursor: pointer;
}
</style>