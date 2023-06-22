const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
      return this.counter;
    },
    subtrack(num) {
      this.counter -= num;
      return this.counter;
    },
    setName(event, defaultName) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Form submitted");
    }
  }
});

app.mount('#events');
