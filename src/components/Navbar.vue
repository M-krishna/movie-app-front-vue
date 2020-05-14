<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <router-link :to="{ name: 'Home' }">Movie App</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item>
            <button @click="logout" v-if="isLoggedIn">Logout</button>
            <router-link :to="{ name: 'Login' }" v-if="!isLoggedIn">Login</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Eventbus from '../Eventbus'

export default {
  name: 'Navbar',
  data () {
    return {
      isLoggedIn: false
    }
  },
  mounted () {
    Eventbus.$on('logged-in', () => {
      this.isLoggedIn = true
    })
    this.checkLoggedIn()
  },
  methods: {
    checkLoggedIn() {
      if(localStorage.getItem('userData')){
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      } 
    },
    logout() {
      localStorage.removeItem('userData')
      this.isLoggedIn = false
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>