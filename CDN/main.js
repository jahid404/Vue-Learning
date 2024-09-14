const app = Vue.createApp({
    data() {
        return {
            eventType: this.handleEvents.type
        }
    },
    methods: {
        handleEvents: function (event) {
            
        }
    },
})

app.mount('#app');