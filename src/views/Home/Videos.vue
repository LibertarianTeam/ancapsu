<script>
import Title from '~/components/Title'
import Carousel from '~/components/Carousel'

export default {
  name: 'HomeVideos',
  components: {
    'c-title': Title,
    'c-carousel': Carousel
  },
  computed: {
    videos() {
      return this.$store.state.video.list.map((video) => {
        video.to = {
          name: 'read-id',
          params: { read: video.category.name, id: video.id }
        }

        video.tags = [video.category]
        video.tags[0].to = {
          name: 'category-filter',
          params: { category: video.category.name, filter: 'news' }
        }

        return video
      })
    },
    skeleton() {
      return this.videos.length === 0
    }
  },
  mounted() {
    this.$store.dispatch('getVideoList')
  }
}
</script>

<template lang="html">
  <section class="v-home-videos">
    <c-title>Últimos Vídeos do Canal</c-title>
    <c-carousel :items="videos" :skeleton="skeleton"></c-carousel>
  </section>
</template>

<style lang="css" scoped>
.v-home-videos {
  width: 100%;
}
</style>
