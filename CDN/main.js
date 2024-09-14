const app = Vue.createApp({
    data() {
        return {
            eventType: '',
            x: 0,
            y: 0,
            position: 'x: ' + this.x + 'px, y:' + this.y + 'px'
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