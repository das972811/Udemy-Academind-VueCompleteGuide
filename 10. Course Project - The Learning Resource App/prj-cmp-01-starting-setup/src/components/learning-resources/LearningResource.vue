<template>
    <li>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <p><a :href="link" target="_blank">{{ link }}</a></p>
    </li>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            }
        },
    }
</script>