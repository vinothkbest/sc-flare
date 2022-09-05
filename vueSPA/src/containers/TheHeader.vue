<template>
<div>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="w-75 mx-auto text-center" to="/">
      
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
         
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
  </CHeader>  
  <Breadcrumb/>
</div>
  
</template>

<script>
const TheHeaderDropdownAccnt = () => import('./TheHeaderDropdownAccnt')
import { CHeader,CHeaderNav,CHeaderNavItem,CHeaderNavLink,CHeaderBrand,CToggler} from '@coreui/vue'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,CHeader,CHeaderNav,CHeaderNavItem,CHeaderNavLink,CHeaderBrand,CToggler
  }
}
</script>