<template>
    <div class="single-movie">
        <MovieCard :movie="movieData"/>
        <div class="movie-details">
            <h1>{{ movieData.name }}</h1>
            <h2>{{ movieData.year }}</h2>
            <h2>{{ getGenre }}</h2>
            <h2>{{ movieData.rating }}</h2>
        </div>
    </div>
</template>

<script>
import { getMovie } from "../services/MovieService"
import MovieCard from '../components/MovieCard'

export default {
    name: "SingleMovie",
    components: {
        MovieCard
    },
    props: {
        movie: Object
    },
    data() {
        return {
            movieData: {}
        }
    },
    async beforeMount() {
        if(this.movie){
            this.movieData = this.movie
        } else {
            const result = await this.getMovieDetails(this.$route.params.movieId)
            this.movieData = result
        }
    },
    methods: {
        async getMovieDetails(id) {
            try {
                const result = await getMovie(id)
                return result.data
            } catch(err) {
                console.log(err)
            }
        }
    },
    computed: {
        getGenre() {
            if(Object.keys(this.movieData).length){
                return this.movieData.genre.join(" / ")
            }
            return ''  
        }
    }
}
</script>

<style scoped>
.single-movie {
    margin: 0px 100px;
    display: grid;
    grid-gap: 1rem;
}

@media (min-width: 600px) {
    .single-movie {
        grid-template-columns: 300px auto;
        grid-auto-rows: 200px;
    }
}
</style>