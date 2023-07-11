<template>
    <ul>
        <resource-item v-for="resource in storedResources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
        ></resource-item>
    </ul>
</template>
<script>
    import ResourceItem from './components/ResourceItem.vue'

    export default {
        components: {
            ResourceItem,
        },
        data() {
            return {
                storedResources: [
                    {
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The official Vue.js documentation',
                        link: 'https://vue.js.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.org'
                    }
                ],
            };
        },
    };
</script>