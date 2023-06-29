<template>
    <h2>Diego was here</h2>
    <active-user
    v-for="person in people"
    :key="person.id"
    :primaryName="person.name"
    :age="person.age"
    ></active-user>
    <user-data
    @get-input="processInput"
    ></user-data>
</template>
<script>
    export default {
        data() {
            return {
                people: []
            };
        },
        methods: {
            processInput(name, age) {
                this.people.push(
                    {
                        id: new Date().toISOString(),
                        name: name,
                        age: age
                    }
                );
            }
        },
    };
</script>