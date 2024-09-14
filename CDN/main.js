const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        handleEvents: function (event) {
            console.log(event);
        }
    },
})

app.mount('#app');