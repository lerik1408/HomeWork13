<template>
  <div>
    <gmap-autocomplete
      @place_changed="setPlace"
      >
    </gmap-autocomplete>
    <button @click="addMarker">Add</button>
    <gmap-map class="map"
      :center="center"
      :zoom="16"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 50.448233, lng: 30.425387 },
      markers: [ {position: { lat: 50.448233, lng: 30.425387 }} ],
      places: [],
      currentPlace: null,
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      // console.log(navigator.geolocation.getCurrentPosition(position));
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(position);
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.map
    width: 751px
    margin-top: 17px
    height: 438px
</style>
