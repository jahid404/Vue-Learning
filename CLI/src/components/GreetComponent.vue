<template>
    <h2>Hello {{ appName }}</h2>
</template>

<script>
    export default {
        name: 'GreetComponent',
        data() {
            return {
                app_name: 'Vue World!'
            }
        }, 
        props: ['appName']
    };
</script>
