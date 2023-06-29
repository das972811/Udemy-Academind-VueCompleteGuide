<template>
    <form @submit.prevent="$emit('get-input', name, age)">
        <div>
            <label>Name</label>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="age"/>
        </div>
        <button>New Person</button>
    </form>
</template>
<script>
    export default {
        emits: ['get-input'],
        data() {
            return {
                name: '',
                age: '',
            };
        },
    };
</script>