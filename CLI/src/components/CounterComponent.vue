<template>
    <div>
        <h3>{{ currentValue }}</h3>
        <div class="mt-2">
            <button class="btn btn-primary" @click="currentValue++">Increment</button>
            <button class="btn btn-danger ms-2" @click="decrement">Decrement</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: 0,
            };
        },
        methods: {
            decrement() {
                if (this.currentValue > 0) {
                    this.currentValue--;
                }
            },
        },
    };
</script>
