<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    beforeRouteEnter(to, from, next) {
      console.log('User List components beforeRouteEnter');
      console.log(to, from);
      next();
    },
    beforeRouteLeave (to, from) {
      console.log('DIEGO IS AWESOME');
      console.log(to, from);
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (!answer) return false
    },
    // beforeRouteLeave(to, from, next) {
    //   console.log('User List component beforeRouteLeave');
    //   console.log(to, from);

    //   if(this.changesSaved) {
    //     next();
    //   } else {
    //     const userWantToLeav = confirm('Are you sure? You got unsaved changes!');
    //     next(userWantToLeav);
    //   }
    // },
    saveChanges() {
      this.changesSaved = true;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>