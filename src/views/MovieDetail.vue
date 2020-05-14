<template>
    <div>
        <SingleMovie :movie="movie"/>
    </div>
</template>

<script>
import SingleMovie from './SingleMovie'

export default {
    name: 'MovieDetail',
    components: {
        SingleMovie
    },
    props: {
        movie: Object
    }
}
</script>