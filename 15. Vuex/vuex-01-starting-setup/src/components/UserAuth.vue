<template>
    <button v-if="!isAuth" @click="logIn">Login</button>
    <button v-if="isAuth" @click="logOut">Logout</button>
</template>
<script>
    export default {
        methods: {
            logIn() {
                this.$store.dispatch('logIn');
            },
            logOut() {
                this.$store.dispatch('logOut');
            }
        },
        computed: {
            isAuth() {
                return this.$store.getters.userIsAuthenticated;
            }
        }
    }
</script>