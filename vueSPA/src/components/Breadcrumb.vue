<template>
    <div>
        <ul class='breadcrumb'>
            <li class="" v-for="(list,index) in getList" :key="index" v-html="list"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Breadcrumb',
    computed:{
        getList: function(){
            let lists = this.$route.name.split(' / ');
            return lists.map((list,index) => {
                let menu = this.$route.params.member_type?this.ucfirst(this.slugToText(this.$route.params.member_type)):list;
                if(!menu){
                    menu = this.$route.params.invitee_type?this.ucfirst(this.slugToText(this.$route.params.invitee_type)):list;
                }
                if(!menu){
                    menu = this.$route.params.rsvp?this.ucfirst(this.slugToText(this.$route.params.rsvp)):list;
                }
                if(!menu){
                    menu = this.$route.params.mail_type?this.ucfirst(this.slugToText(this.$route.params.mail_type)):list;
                }
                if(!menu){
                    menu = this.$route.params.attendance?this.ucfirst(this.slugToText(this.$route.params.attendance)):list;
                }
                return (index != (lists.length-1)) ? `<p class='font-weight-bold text-primary h8'><cite style='background-image: radial-gradient(#112c85, #43137d) !important;color: white !important;border-radius: 5px !important;padding:5px'>${list}</cite><span> »</span></p>` :`<p class='font-weight-bold  h8'><cite style='background-image: radial-gradient(#66ba8c, #4dc94f) !important;color: white !important;border-radius: 5px !important;padding:5px'>${menu}</cite></p>`;
            })
        }
    }
}
</script>
<style scoped>
.breadcrumb{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    gap:20px;
}
</style>