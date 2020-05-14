<template>
    <div class="dashboard-movies">
      <div class="movies">
        <router-link 
            v-for="movie in result" 
            :key="movie._id" 
            :to="{ name: 'MovieDetail', params: {movieId: movie._id, movie: movie}}"
        >
            <MovieCard  
                :movie="movie"
            />
        </router-link>
      </div>
      <router-view :key="$route.path" />
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard'
import { getAllMovies } from '../services/MovieService'

export default {
  name: 'DashboardMovies',
  components: {
    MovieCard
  },
  data () {
    return {
      result: []
    }
  },
  async beforeCreate() {
    try {
      const response = await getAllMovies()
      this.result = response.data
    } catch(err) {
      console.log(err)
    }
  },
  methods: {
    showMovie(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
.dashboard-movies {
  display: grid;
  grid-template-columns: 3fr 3fr;
}
.movies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid black;
  margin: 2px;
  height: 100vh;
}
</style>