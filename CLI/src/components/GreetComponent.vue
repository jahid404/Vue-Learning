<template>
    <h2>Hello {{ app_name }}</h2>
</template>

<script>
    export default {
        name: 'GreetComponent',
        data() {
            return {
                app_name: 'Vue World!'
            }
        },
    };
</script>
