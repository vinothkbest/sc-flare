<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    style="background-image:linear-gradient(#12373d,#2d8896)">
    <CSidebarBrand class="d-md-down-none">
      {{$store.state.payload.name}}
    </CSidebarBrand>
    <CRenderFunction flat :content-to-render="getMenus"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
export default {
  name: 'TheSidebar',
  computed: {
    show () {      
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
    getMenus : function (){
      const modules = this.$store.state.payload.role?.modules.map(module => {
        if(module.uri){
          return { _name: "CSidebarNavItem",
              name: module.name,
              to: module.uri,
              icon: module.icon
          }
        }
        else{

          return {
              _name: 'CSidebarNavTitle',
              _children: [module.name]
            }
        }
      });
      return [
          {
            _name: 'CSidebarNav',
            _children: modules
          }
      ]
    }
  }
}
</script>
