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
import { getAllMovies } from "../services/MovieService"
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
    try {
        const response = await getAllMovies()
        this.result = response.data
    } catch(err) {
        console.log(err)
    }
  }
};
</script>
