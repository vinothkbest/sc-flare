<template>
  <CFooter :fixed="false">
    <div>
      Ⓒ {{ new Date().getFullYear() }} Sci-Flare Technologies
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a>Vinoth Kumar K</a>
    </div>
  </CFooter>
</template>

<script>

import { CFooter } from '@coreui/vue'

export default {
  name: 'TheFooter',
  components: {
    CFooter
  }
}
</script>
