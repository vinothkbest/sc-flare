<template>
    <div class="alert text-center" :style="design">
        <p>{{message}}</p>
    </div>
</template>
<style scoped>
.alert{
    color: white;
    font-weight: bold;
}
</style>
<script>
export default {
    name:"Message",
    props: {
        message:String,
        design:String
    }
}
</script>