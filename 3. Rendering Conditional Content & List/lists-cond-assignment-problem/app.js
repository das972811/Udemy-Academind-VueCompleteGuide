const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            display: true,
            enteredTask: '',
        };
    },
    computed: {
        buttonCaption() {
            return this.display ? "Hide List" : "Show List";
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        toggleDisplay() {
            this.display = !this.display;
        }
    }
});

app.mount('#assignment');