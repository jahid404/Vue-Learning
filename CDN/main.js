const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        handleEvents: function (event) {
            console.log(event);
            eventType: event.type
        }
    },
})

app.mount('#app');