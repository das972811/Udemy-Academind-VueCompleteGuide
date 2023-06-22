const app = Vue.createApp({
    data() {
        return {
            num: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            console.log(that);
            setTimeout(function () {
                console.log(this);
                that.num = 0;
            }, 2000)
        }
    },
    computed: {
        result() {
            if (this.num < 37) {
                return 'Not there yet';
            } else if (this.num === 37) {
                return this.num;
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        addNumber(a) {
            this.num += a;
        }
    }
});

app.mount("#assignment");