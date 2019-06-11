<template>
  <ion-grid>
    <ion-row>
      <ion-col v-for="(house, index) of houses" v-bind:key="index" size="6" size-sm="4" size-lg="2">
        <ion-card button="true" router-direction="forward" v-on:click="displayHouseDetails(house)">
          <ion-card-header>
            <img v-bind:src="getSigilPathByRegion(house.region)"/>
            <ion-card-title class="min-3-and-half-lines">{{house.name}}</ion-card-title>
            <ion-card-subtitle>
              from:
              <br>
              {{house.region}}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-label>
            Tap for further content
              </ion-label>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-button expand="block" @click="loadMoreHouses">
          <ion-icon name="refresh-circle"></ion-icon>
          Load more
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>

import router from '../router';

export default {
  name: 'HousesOfGoT',
  methods: {
    getSigilPathByRegion(region) {
      // eslint-disable-next-line
      return region ? require(`@/assets/${region}.png`) : require('@/assets/Unknown.png');
    },
    displayHouseDetails(house) {
      // Fetch the data for sworn members
      house.swornMembers.forEach(memberUrl => this.$store.dispatch('fetchCharacter',
        { url: memberUrl }));
      router.push({ name: 'houseDetails', params: { houseDetails: house } });
    },
    loadMoreHouses() {
      this.$store.dispatch('fetchHouses');
    },
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
  .min-3-and-half-lines {
    min-height: 3.5em;
  }
</style>
