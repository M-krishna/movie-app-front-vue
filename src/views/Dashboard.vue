<template>
    <div class="dashboard">
        <div class="side-bar">
            <ul>
                <li>
                    <router-link :to="{ name: 'Movies'}">
                        Movies
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="source">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 0.2fr 2fr;
    height: 100vh;
}

.side-bar {
    border: 1px solid black;
    margin: 2px;
}
</style>