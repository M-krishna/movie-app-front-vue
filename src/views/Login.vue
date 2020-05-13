<template>
    <b-container>
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter Password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </b-container>
</template>

<script>
import { login } from '../services/AuthService';

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async onSubmit(e) {
            try {
                e.preventDefault()
                const payload = {
                    username: this.form.email,
                    password: this.form.password
                }
                const result = await login(payload)
                if(!result.success){
                    console.log("Invalid username/ppassword")
                } else {
                    localStorage.setItem("userData", JSON.stringify(result.data))
                    this.$router.push({ name: "Dashboard" })
                }
            } catch (err){
                console.log(err)
            }
        }
    }
}
</script>