<template>
  <ion-page>
    <ion-header color="dark">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Details of {{houseDetails.name}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>
          <ion-label>
            <h1>
              General Information
            </h1>
          </ion-label>
        </ion-list-header>
        <ion-itemGroup>
          <ion-item>
          <ion-label>Region</ion-label>
          <ion-note slot="end">{{houseDetails.region || 'unknown'}}</ion-note>
        </ion-item>
          <ion-item>
            <ion-label>Founded</ion-label>
            <ion-note slot="end">{{houseDetails.founded || 'unknown' }}</ion-note>
          </ion-item>
        </ion-itemGroup>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>
              <h2>
              Titles
              </h2>
            </ion-label>
          </ion-item-divider>
          <ion-item v-for="(title, index) of houseDetails.titles" v-bind:key="index">
            <ion-label>
              {{title}}
            </ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>
              <h2>
                Seats
              </h2>
            </ion-label>
          </ion-item-divider>
          <ion-item v-for="(seat, index) of houseDetails.seats" v-bind:key="index">
            <ion-label>
              {{seat}}
            </ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item>
            <ion-label>Coat of arms</ion-label>
            <ion-note slot="end" class="max-half-width">
              {{houseDetails.coatOfArms || 'unknown'}}
            </ion-note>
          </ion-item>
          <ion-item>
            <ion-label>Words</ion-label>
            <ion-note slot="end">{{houseDetails.words || 'unknown'}}</ion-note>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>
              <h2>
                Sworn member
              </h2>
            </ion-label>
          </ion-item-divider>
          <ion-item v-for="(member, index) of swornMembers" v-bind:key="index">
            <ion-label>
              {{member ? member.name : ''}}
            </ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  name: 'HouseDetails',
  components: { },
  props: ['houseDetails'],
  computed: {
    swornMembers() {
      return this.$store.getters.getCharactersByUrls(this.houseDetails.swornMembers);
    },
  },
  data() {
    return {};
  },
};
</script>


<style>
  .max-half-width {
    max-width: 50%;
  }
</style>
