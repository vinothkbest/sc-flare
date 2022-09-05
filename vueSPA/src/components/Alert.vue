<template>
    <transition name="fade">
        <div class="text-danger font-weight-bold" v-if="is_visible">{{message}}</div>
    </transition>  
</template>

<script>
export default {
    name:"Alert",
    props:{
        is_visible:false,
        message:''
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0.5;
}
</style>