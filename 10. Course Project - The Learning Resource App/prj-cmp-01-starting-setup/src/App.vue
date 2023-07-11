<template>
    <ul>
        <learning-resource v-for="resource in storedResources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
        ></learning-resource>
    </ul>
</template>
<script>
    import LearningResource from './components/LearningResource.vue'

    export default {
        components: {
            LearningResource,
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