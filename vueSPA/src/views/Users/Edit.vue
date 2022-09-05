<template>
    <b-card header-tag="header"
                header-bg-variant="primary"
                header-text-variant="white"
                border-variant="primary">
        <template #header>
            <div class="row">
                <div class="col-md-6">
                    <h4 class="mb-0">User Update</h4>
                </div>
                <div class="col-md-6 text-right">
                    <router-link :to="{path:`/users`}"><button class="btn btn-alt">Back</button></router-link>
                </div>
            </div>
        </template>
        
        <b-card-text>
            <b-form @submit.prevent="saveMember">
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="name" class="font-weight-bold">Name<b class="text-danger">*</b></label>
                        <b-form-input
                            id="name"
                            v-model="data.name"
                            placeholder="Enter first name"
                            style="height:45px" autocomplete="off"></b-form-input>                  
                        <alert :is_visible="errors.state.name" :message="errors.message.name"></alert>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="username" class="font-weight-bold">Username</label>
                        <b-form-input
                            id="username"
                            v-model="data.username"
                            placeholder="Enter last name"
                            style="height:45px" autocomplete="off"></b-form-input>                  
                        <alert :is_visible="errors.state.username" :message="errors.message.username"></alert>
                    </div>  
                </div>
                <!-- Contact -->
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="designation" class="font-weight-bold">Designation<b class="text-danger">*</b></label>
                        <b-form-input
                            id="designation"
                            v-model="data.designation"
                            placeholder="Enter designation"
                            style="height:45px" autocomplete="off"></b-form-input>                  
                        <alert :is_visible="errors.state.designation" :message="errors.message.designation"></alert>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="organisation" class="font-weight-bold">Organisation<b class="text-danger">*</b></label>
                        <b-form-select v-model="data.organisation" class="mb-3"
                            id="organisation"
                            style="height:45px">
                                <b-form-select-option value="" selected disabled>
                                    Select organisations
                                </b-form-select-option>
                                <b-form-select-option  :value="organisation.name" v-for="organisation in dropdown.organisations" :key="organisation.id">
                                    {{ organisation.name }}
                                </b-form-select-option>
                        </b-form-select>                  
                        <alert :is_visible="errors.state.title" :message="errors.message.title"></alert>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="role" class="font-weight-bold">Role<b class="text-danger">*</b></label>
                        <b-form-select v-model="data.role" class="mb-3"
                            id="role"
                            style="height:45px">
                                <b-form-select-option value="" selected disabled>
                                    Select role
                                </b-form-select-option>
                                <b-form-select-option v-for="role in dropdown.roles" :key="role.id" :value="role.name" >
                                    {{ role.name }}
                                </b-form-select-option>
                        </b-form-select>                  
                        <alert :is_visible="errors.state.title" :message="errors.message.title"></alert>
                    </div>  
                </div>
                <div class="form-group w-100 text-center">
                    <button type="submit" class="btn btn-info w-25" style="height:45px">Update</button>
                </div>
            </b-form>
        </b-card-text>
    </b-card>
</template>
<script>
const {required,email,minLength} = require('vuelidate/lib/validators')
const {numbers,alpha_space} = require('../../validations/appRules')
export default {
    name:"UserEdit",
    data(){
        return {
            dropdown:{
                organisations:[],
                roles:[],
            },
            data:{
                name:'',
                designation:'',
                organisation:'',
                username:'',
                role:''
            },
            errors:{}
        }
    },
    validations(){
       let validate = {
            data:{
                name:{required,alpha_space,minLength:minLength(2)},
                designation:{required,alpha_space,minLength:minLength(4)},
                organisation:{required,alpha_space,minLength:minLength(4)}, 
                username:{required,email},
                role:{required,alpha_space,minLength:minLength(4)}
            }
        }
        return validate;
    },
    async created(){
        this.$http.get('dropdown')
        .then((response) => {
            return this.dropdown = response.data.data;
        })    
        this.errors = {
            state: Object.keys(this.data).reduce((property,key) =>{
                return {...property, [key]:false}
            }),
            message:{...this.data}
        };
        this.$http.get(`users/${this.$route.params.user}`).then(({data}) =>{
            this.data={
                ...data.data
            }
            let is_true = data.data.organisation=="Amazon" 
            console.log(is_true)
        });
    },
    methods: {
        checkName: function (){
            this.errors.state.name=true
            if(!this.$v.data.name.required){
                this.errors.message.name="Name is required"
                return 
            }
            if(!this.$v.data.name.alpha_space){
                this.errors.message.name="Please enter valid name"
                return 
            }
            if(!this.$v.data.name.minLength){
                this.errors.message.name="Name at least two characters"
                return 
            }
            this.errors.state.name=false;
            this.errors.message.name='';
        },
        checkUserName: function (){
            this.errors.state.username=true
            if(!this.$v.data.username.required){
                this.errors.message.username="Please enter username"
                return 
            }
            if(!this.$v.data.username.email){
                this.errors.message.username="Username should be email address format"
                return 
            }
            this.errors.state.username=false;
            this.errors.message.username='';
        },
        checkDesignation: function (){
            this.errors.state.designation=true
            if(!this.$v.data.designation.required){
                this.errors.message.designation="Designation is required"
                return 
            }
            if(!this.$v.data.designation.alpha_space){
                this.errors.message.designation="Please enter valid designation"
                return 
            }
            if(!this.$v.data.designation.minLength){
                this.errors.message.designation="Designation at least 4 characters"
                return 
            }
            this.errors.state.designation=false;
            this.errors.message.designation='';
        },
        checkOrganisation: function (){
            this.errors.state.organisation=true
            if(!this.$v.data.organisation.required){
                this.errors.message.organisation="Organisation is required"
                return 
            }
            if(!this.$v.data.organisation.numbers){
                this.errors.message.organisation="Please select valid organisation"
                return 
            }
            this.errors.state.organisation=false;
            this.errors.message.organisation='';
        },
        checkRole: function (){
            this.errors.state.role=true
            if(!this.$v.data.role.required){
                this.errors.message.role="Role is required"
                return 
            }
            if(!this.$v.data.role.numbers){
                this.errors.message.role="Please select valid role"
                return 
            }
            this.errors.state.role=false;
            this.errors.message.role='';
        },
        saveMember: function (){
            this.$v.$touch();
            this.checkName();
            this.checkUserName();
            this.checkDesignation();
            this.checkOrganisation();
            this.checkRole();
            if(!this.$v.$invalid && !this.$v.$error){
                this.$alert.processing('Processing. Please wait ...');
                this.$http({
                    method : 'PUT',
                    url:`users/${this.$route.params.user}`,
                    data:this.data
                }).then(response =>{
                    let icon='info';
                    let title = `User ${response.data.message} Successfully`  
                    this.audioNotify(title);
                    this.$alert.toast(title,icon);
                }).catch(errors =>{
                    const Message = errors.response.data?.data[0];
                    this.audioNotify(Message);
                    this.$alert.toastError(Message,'error');
                })
            }
        }
    },
    watch:{
        'data.name': function(){
            this.$v.data.name.$touch()
            this.checkName()
        },
        'data.username': function(){
            this.$v.data.username.$touch()
            this.checkUserName()
        },
        'data.designation': function(){
            this.$v.data.designation.$touch()
            this.checkDesignation()
        },
        'data.organisation': function(){
            this.$v.data.organisation.$touch()
            this.checkOrganisation()
        },
        'data.role': function(){
            this.$v.data.role.$touch()
            this.checkRole()
        }
    }
}
</script>