<template>
    <div class="container py-5">
        <header class="mb-4">
            <h3 class="text-center text-primary fw-bold">Vue JS Learning</h3>
        </header>

        <main>
            <GreetComponent />
            <CounterComponent initialValue="0"/>  
        </main>
    </div>
</template>

<script>
    import CounterComponent from './components/CounterComponent.vue';
    import GreetComponent from './components/GreetComponent.vue';

    export default {
        name: 'App',
        components: {
            GreetComponent,
            CounterComponent,
        },
    };
</script>
