<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </component>
    
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  name: "App",
  components:{MainLayout, AuthLayout},
  computed:{
    layout(){
      return this.$route.meta?.layout || 'main-layout'
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata|Oswald");

</style>
