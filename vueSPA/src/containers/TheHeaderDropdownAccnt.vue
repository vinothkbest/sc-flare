<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            :src="profile"
            class="c-avatar-img"
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center animate__animated animate__fadeInDown" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <!-- <CDropdownItem class="animate__animated animate__fadeInDown">
     <CIcon name="cil-bell" class="text-danger spin-bell"/> Query notifications
    </CDropdownItem> -->
    <!-- <CDropdownItem class="animate__animated animate__fadeInDown" :to="{path:`/admin/profile`}">
     <CIcon name="cil-user"/> Profile
    </CDropdownItem>
    <CDropdownItem class="animate__animated animate__fadeInDown" :to="{path:`/admin/edit`}">
      <CIcon name="cil-pencil"/> Edit
    </CDropdownItem> -->
    <CDropdownItem class="animate__animated animate__fadeInDown" @click="logout">
      <CIcon name="cil-lock-locked"/>Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
      profile:'',
    }
  },
  async created(){
    await this.$store.dispatch('AUTO_LOGIN');
    this.profile = `${this.$store.state.public}public${this.$store.state.payload.profile}`;
    return this.$router.currentRoute.path;
  },
  methods: {
    logout : function(){
      this.$store.dispatch('AUTH_LOGOUT').then(() => {
                     
        this.audioNotify('You are logged out successfully');
        this.$router.push('/login');
      })
    }
  }
}
</script>

<style scoped>
.c-icon {
    margin-right: 0.3rem;
  }
  .dropdown-item{
    color:darkorchid !important
  }
  .dropdown-menu > a{
    text-decoration: none !important;
    color:darkorchid !important
  }
  .spin-bell{
    animation: notify 0.5s infinite;
  }
  @keyframes notify {
    0% {transform: rotate(45deg);}
    50% {transform: rotate(-45deg)}
    75% {transform: rotate(0deg)}
    100% {transform: rotate(45deg)}
  }
</style>