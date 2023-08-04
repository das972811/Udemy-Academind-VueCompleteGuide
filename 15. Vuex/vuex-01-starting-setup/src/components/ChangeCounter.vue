<template>
    <!-- <button @click="increase()">Add 2</button> -->
    <button @click="increment">Add 22</button>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            // addTwo() {
            //     this.$store.commit('increment');
            // },
            ...mapActions('numbers', ['increment', 'increase'])
        }
    }
</script>