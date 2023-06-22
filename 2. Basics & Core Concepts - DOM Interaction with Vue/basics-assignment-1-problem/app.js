const app = Vue.createApp({
    data() {
        return {
            name: 'Diego',
            age: 22,
            pikachu: 'https://cdn.vox-cdn.com/thumbor/u7jCCxWCVBktYRsDMeeKrI91rl8=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72009235/captain_pikachu.6.jpg',
            love: 'Lauren Gothard'
        };
    },

    methods: {
        generateRandomNumber() {
            const randomNumber = Math.random();

            return Math.floor((randomNumber + 1) * 50);
        }
    }
});

app.mount("#assignment");