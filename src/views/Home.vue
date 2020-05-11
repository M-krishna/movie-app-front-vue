<template>
  <div class="home">
    <MovieCard v-for="movie in result" :key="movie._id" :movie="movie" />
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  row-gap: 1em;
}
</style>

<script>
import axios from "axios";

import config from "../services/config"
import MovieCard from "../components/MovieCard"

export default {
  name: "Home",
  components: {
    MovieCard
  },
  data() {
    return {
      result: []
    };
  },
  async beforeCreate() {
    await axios.get(`${config.BASE_URL}/movies`)
      .then(response => {
        this.result = response.data.data
      })
      .catch(err => {
        console.log(err)
      })
  }
};
</script>
