<template>
  <div>
    <gmap-map class="map"
      :center="center"
      :zoom="8"
    >
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
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
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
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
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
