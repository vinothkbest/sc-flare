<template>
  <router-view></router-view>
</template>

<script>
import  './assets/js/fontawsome';
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/scss/style';
  
  .c-main{
    padding: 0 !important;
  }
  .btn:hover{
    color: white;
  }
  .bg-purple, .btn-purple, .badge-purple{
    background: #c623db;
    font-weight: bold;
    color: white;
  }
  .bg-brown, .btn-brown, .badge-brown{
    background: #6e1a1d;
    font-weight: bold;
    color: white;
  }
  .bg-alt, .btn-alt, .badge-alt{
    background: #098085;
    font-weight: bold;
    color: white;
  }
  .bg-green, .btn-green, .badge-green{
    background: #0baa60;
    font-weight: bold;
    color: white;
  }
  .bg-lavendar, .btn-lavendar, .badge-lavendar{
    background: #6638e6;
    font-weight: bold;
    color: white;
  }
  .bg-orange, .btn-orange, .badge-orange{
    background: #e77431;
    font-weight: bold;
    color: white;
  }
  .bg-durky, .btn-durky, .badge-durky{
    background: #0a295c;
    color: white;
  }
  
  .c-callout-purple{
    border-left:4px solid #c623db !important;
  }
  .c-callout-brown{
    border-left:4px solid #6e1a1d !important;
  }
  .c-callout-alt{
    border-left:4px solid #ce497cf3 !important;
  }
  .c-callout-green{
    border-left:4px solid #4ef5a1 !important;
  }
  .c-callout-lavendar{
    border-left:4px solid #6638e6 !important;
  }
  .text-purple{
    color: #c623db;
    font-weight: bold;
  }
  .text-brown{
    color: #6e1a1d;
    font-weight: bold;
  }
  .text-alt{
    color: #ce497cf3;
    font-weight: bold;
  }
  .text-durky{
    color: #0a295c;
  }
  .text-green{
    color: #4ef5a1;
    font-weight: bold;
  }
  .text-orange{
    color: #e77431;
    font-weight: bold;
  }
  .text-lavendar{
    color: #6638e6;
    font-weight: bold;
  }
  .cke_contents{
    height:500px !important;
  }
  .swal2-styled,.btn{
    border:none !important;
    box-shadow: none !important;
  }
  .nav-pills{
    border: 2px solid #c3c3c7;
    border-radius:10px;
    background: repeating-linear-gradient(35deg, lightgrey, transparent 100px);
  }
</style>
