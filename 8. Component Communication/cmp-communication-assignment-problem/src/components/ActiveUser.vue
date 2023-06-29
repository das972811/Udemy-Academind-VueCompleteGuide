<template>
    <section>
        <h2>{{ primaryName }}</h2>
        <h3>{{ age }}</h3>
    </section>
</template>
<script>
    export default {
        props: {
            primaryName: {
                type: String,
                required: true,
            },
            age: {
                type: String,
                required: true,
            },
        },
        data() {
            return {};
        },
    };
</script>