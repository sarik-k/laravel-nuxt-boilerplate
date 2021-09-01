<template>
  <div>
    <h1>Videos</h1>
    <ul>
      <li v-for="(video, key) in videos" :key="key">
        <nuxt-link :to="{ name: 'videos-id', params: { id: video.id } }">{{
          video.name
        }}</nuxt-link>
      </li>
    </ul>
    <nuxt-link :to="`/`">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          name: "Video 1",
        },
        {
          id: 2,
          name: "Video 2",
        },
        {
          id: 3,
          name: "Video 3",
        },
      ],
    };
  },
};
</script>

<style>
</style>
