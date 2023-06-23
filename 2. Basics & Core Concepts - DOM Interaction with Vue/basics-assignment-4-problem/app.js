const app = Vue.createApp({
    data() {
        return {
            getClass: [],
            pStyle: '',
            display: true,
            color: ''
            
        };
    },
    watch: {
        color(value) {
            this.color = value;
        }
    },
    computed: {
        setClass() {
            this.getClass = [];

            if (this.display) {
                this.getClass.push({ visible: this.display });
            } else if (!this.display) {
                this.getClass.push({ hidden: !this.display });
            }

            if (this.pStyle === 'user1') {
                this.getClass.push('user1');
            } else if (this.pStyle === 'user2') {
                this.getClass.push('user2');
            }

            return this.getClass;
        }
    },
    methods: {
        obtainClassHandler() {
            this.pStyle = event.target.value;
        },
        toggleParagraph() {
            this.display = !this.display;
        },
        changeBackgroundColor() {
            console.log("TEST");
            this.color = event.target.value;
        }
    }
});

app.mount('#assignment');