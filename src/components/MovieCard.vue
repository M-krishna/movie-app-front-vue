<template>
    <div class="movie-card">
      <img 
        :src="movie.movieImage"
        class="movie-image"
      />
    </div>
</template>

<style scoped>

.movie-card {
    height: 200px;
    width: 200px;
}

.movie-card:hover{
    cursor: pointer;
}

.movie-image {
    height: 100%;
    width: 100%;
}

</style>

<script>
export default {
    name: "MovieCard",
    props: {
        movie: {
            type: Object
        }
    }
}
</script>