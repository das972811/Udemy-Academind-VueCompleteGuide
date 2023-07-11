<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button v-on:click="setSelectedTab('add-resources')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>
<script>
    // import StoredResources from './StoredResources.vue';
    import StoredResources from './StoredResources.vue';
    import AddResource from './AddResource.vue';

    export default {
        components: {
            StoredResources,
            AddResource,
        },
        data() {
            return {
                selectedTab: 'stored-resources',
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
                ]
            };
        },
        provide() {
            return {
                resources: this.storedResources,
            };
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            }
        },
    };
</script>