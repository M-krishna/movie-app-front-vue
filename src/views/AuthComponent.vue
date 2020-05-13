<template>
    <div>
        <p>
            Hello there
        </p>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    name: "AuthComponent",
    methods: {
        logout() {
            localStorage.removeItem("userData")
            this.$router.push({ name: "Login" })
        }
    }
}
</script>