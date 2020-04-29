<template>
  <div id="homeContent">
    <slider/>
    <div class="col-md-12 m-0 p-0">
      <recentVideos/>
    </div>
    <div class="col-md-12 m-0 p-0">
      <ArtistBio/>
    </div>
  </div>
</template>

<script>
import slider from '../components/slider.vue'
import ArtistBio from '../components/ArtistBio.vue'
import recentVideos from '../components/recentVideos.vue'

export default {
  name: 'homecontent',
  components: {
    ArtistBio,
    recentVideos,
    slider
  }
}
</script>

<style>

</style>
