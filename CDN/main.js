const app = Vue.createApp({
    data() {
        return {
            eventType: '',
            x: 0,
            y: 0
        }
    },
    methods: {
        handleEvents: function (event) {
            this.eventType = event.type;
            
            if (event.type === 'mousemove') {
                this.x = event.offsetX;
                this.y = event.offsetY;               
            }
        }
    },
})

app.mount('#app');