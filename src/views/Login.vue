<template>
  <div class="c-app flex-row align-items-center">    
    <form class="form" @submit.prevent="login">
        <p class="form__title">Sci Flare</p>   
        <div class="form__container">
            <div class="form-group">
                <input type="text" id="username" class="form-control"
                v-model="username"
                autocomplete="off" placeholder="Username"/>
                <span class="text-danger">{{messages.usernameError}}</span>
            </div>
            <div class="form-group">
                <input type="password" id="password" class="form-control"
                v-model="password"
                autocomplete="off" placeholder="Password"/>
                <span class="text-danger">{{messages.passwordError}}</span>
            </div>
            <div class="form-group">
                <input type="checkbox" id="notify_type" class="mr-4" v-model="audio_notify" autocomplete="off"/>
                <label for="notify_type">Need audio notify?</label>
            </div>
            <input type="submit" class="form-control btn btn-green" value="Login"/>
            <transition name="fade">
                <message v-if="messages.is_alert" design="background:rgb(232, 5, 43, 1.7);" :message="invalid"></message>
            </transition>
        </div>
    </form>
  </div>
</template>

<script>
const {required,minLength} = require('vuelidate/lib/validators')
const {no_space} = require('../validations/appRules')

export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: '',
      invalid:'',
      audio_notify:JSON.parse(this.$store.state.has_audio),
      messages:{
        usernameError:'',
        passwordError:'',
        is_alert:false
      }
    }
  },
  validations:{
        username:{required, minLength:minLength(6),no_space},
        password:{required, minLength:minLength(10)}
  },
  methods: {
    checkAdminUsername: function(){
        if(!this.$v.username.required){
            this.messages.usernameError="Username is required"
            return 
        }
        if(!this.$v.username.no_space || !this.$v.username.minLength){
            this.messages.usernameError="Invalid username given"
            return 
        }
        return this.messages.usernameError=""
    },
    checkAdminPassword: function(){
        if(!this.$v.password.required){
            this.messages.passwordError="Password is required"
            return 
        }
        if(!this.$v.password.minLength){
            this.messages.passwordError="Password contains at least 10 characters"
            return 
        }
        return this.messages.passwordError=""
    },
    login : function(){
      this.$v.$touch()
      this.checkAdminUsername()
      this.checkAdminPassword()
      if(!this.$v.$invalid){
        let user = {
          password:this.password,
          username:this.username,
          has_audio:this.audio_notify
        }
        this.$alert.processing('Logging. Please wait ...');
        this.$store.dispatch('AUTH_LOGIN', user).then( admin =>{
            if(admin.data.status){
              this.messages.is_alert = false
              this.$router.push('/users');  
              let icon='info';
              let title = `${admin.data.message}`  
              this.audioNotify(title);
              this.$alert.toast(title,icon);             
            }
            else{
              this.invalid = admin.data.message
              this.messages.is_alert = true  
              this.$alert.close();  
              this.audioNotify(this.invalid);
            }
        }).catch( (errors) => {
            this.invalid = "Invalid data given"
            this.messages.is_alert = true  
            this.$alert.close();  
            this.audioNotify(this.invalid);
        });
        setTimeout(()=>{
            this.messages.is_alert = false
        }, 3000)
      }
    }
  },
  watch: {
    username: function(value){
        this.$v.username.$touch()
        this.checkAdminUsername()
        return this.username = value.toLowerCase()
    },
    password: function(){
        this.$v.password.$touch()
        this.checkAdminPassword()
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0.5;
  transform: translateY(-70px);
}
.box-shadow{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transform:translateY(0);
  transition: transform 0.2s ease-in-out;
}
.box-shadow:hover{
  transform:translateY(-10px);

}

.form{
    background-image:linear-gradient(#328f8d,#1c61a6);
    margin: auto;
    color:  azure;
    font-weight: bold;
    width: 90%;
    max-width: 400px;
    padding: 4.5em 3em;
    border-radius: 10px;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.2px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition:1s;
}

.form__title{
    font-size: 20px;
    margin-bottom: .5em;
    color: azure;
}
.form__container{
    margin-top: 3em;
    display: grid;
    gap: 2.5em;
}
@media (max-width:425px){
    .form__title{
        font-size: 1.8rem;
    }
}
</style>
