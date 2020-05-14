<template>
    <div class="movie-detail">
        <div class="movie-detail-header">
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
        <div class="movie-detail-body">
            <MovieCard :movie="movieData"/>
            <div class="movie-data">
                <b-form>
                    <b-form-input
                        id="input-1"
                        v-model="movieData.name"
                        type="text"
                        required
                    >
                    </b-form-input>
                        <b-form-input
                        id="input-2"
                        v-model="movieData.year"
                        type="text"
                        required
                    >
                    </b-form-input>
                    <b-form-input
                        id="input-3"
                        v-model="movieData.rating"
                        type="text"
                        required
                    >
                    </b-form-input>
                    <b-form-tags input-id="tags" v-model="movieData.genre" class="mb-2"></b-form-tags>
                     <b-form-input
                        id="input-4"
                        v-model="movieData.director"
                        type="text"
                        required
                    >
                    </b-form-input>
                </b-form>
            </div>
        </div>
        <div class="movie-detail-footer"></div>
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard'
import { getMovie } from '../services/MovieService'

export default {
    name: 'MovieDetail',
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
.movie-detail {
    display: grid;
    grid-template-rows: 0.4fr 2fr 1fr;
    border: 1px solid black;
    margin: 2px;
}

.movie-detail-body {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
</style>