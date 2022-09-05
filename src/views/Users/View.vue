<template>
    <b-card header-tag="header"
                header-bg-variant="primary"
                header-text-variant="white"
                border-variant="primary">
        <template #header>
            <div class="row">
                <div class="col-md-6">
                    <h4 class="mb-0">User detail</h4>
                </div>
                <div class="col-md-6 text-right">
                    <router-link :to="{path:`/users`}"><button class="btn btn-alt">Back</button></router-link>
                </div>
            </div>
        </template>
        <div v-if="!loading">
            <CCallout :color="`${data.color} w-75`">
                <div class="row">
                    <div class="col-md-4">
                        <b>Name</b>
                    </div>
                    <div class="col-md-8">
                       {{ data.name }}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <b>Designation</b>
                    </div>
                    <div class="col-md-8">
                        {{ data.designation }}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <b>Organisation</b>
                    </div>
                    <div class="col-md-8">
                        {{ data.organisation }}
                    </div>
                </div>
            </CCallout>
            <br/>
            <CCallout :color="`${data.color} w-75`">
                <div class="row">
                    <div class="col-md-4">
                        <b>Username</b>
                    </div>
                    <div class="col-md-8">
                        {{ data.username }}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <b>Role</b>
                    </div>
                    <div class="col-md-8">
                        {{ data.role}}
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <b>Modules </b>
                    </div>
                    <div class="col-md-8">
                        <p v-for="(module,index) in data.modules" :key="index">
                            {{ module.name }}
                        </p>
                    </div>
                </div>
            </CCallout>
        </div>

        <div class="loading" v-if="loading">
            <CCallout color="info">
                <data-skeleton></data-skeleton>
            </CCallout>
            <CCallout color="info">
                <data-skeleton></data-skeleton>            
            </CCallout>
            <CCallout color="info">
                <data-skeleton></data-skeleton>            
            </CCallout>
        </div>
    </b-card>
</template>

<script>
export default {
    name:'UserView',
    data(){
        return {
            data:{},
            loading:true,
        }
    },
    created(){
        this.$http.get(`users/${this.$route.params.user}`).then(response =>{
            const {data} = response.data;
            this.data={
                ...data, color: data.status_name?.split('-')[0]
            };
            return this.loading=false;
        });        
    }
}
</script>