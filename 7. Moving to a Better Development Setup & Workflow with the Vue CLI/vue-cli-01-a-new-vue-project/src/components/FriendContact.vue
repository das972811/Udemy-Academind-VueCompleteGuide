<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Detail</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>

    </li>
</template>
<script>
    export default {
        data() {
            return {
                detailsAreVisible: false,
                friend: {
                        id: 'diego',
                        name: 'Diego Salas',
                        email: 'diego@localhost.com',
                        phone: '1234 567 890'
                    },
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    };
</script>