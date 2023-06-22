const app = Vue.createApp({
    data() {
        return {
            inputText: 'OUTPUT',
            streamInput: '',
            finalMessage: '',
        }
    },
    methods: {
        showMessage() {
            alert("I'm clicked");
        },
        displayInput() {
            this.inputText = event.target.value;
        },
        gatherInput() {
            this.streamInput = event.target.value;
        },
        displayFinalMessage() {
            this.finalMessage = this.streamInput;
        }
    }
});

app.mount("#assignment")