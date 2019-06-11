<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{this.$route.meta.title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <HousesOfGoT />
    </ion-content>
  </ion-page>
</template>

<script>

import HousesOfGoT from '../components/HousesOfGoT.vue';

export default {
  name: 'Home',
  components: { HousesOfGoT },
  data() {
    return {};
  },
};
</script>

<style>
  ion-content {
    --offset-bottom: -56px !important;
  }
</style>
