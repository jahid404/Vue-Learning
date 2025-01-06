<template>
    <div id="app" class="container py-5">
        <header class="mb-4">
            <h1 class="text-center text-primary">Vue JS Learning</h1>
        </header>

        <main>
            <div class="row">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Column 1</h5>
                            <p class="card-text">
                                This is a basic card using Bootstrap 5.
                            </p>
                            <button class="btn btn-primary">Click Me</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Column 2</h5>
                            <p class="card-text">
                                You can build responsive layouts with Bootstrap's grid system.
                            </p>
                            <button class="btn btn-secondary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                counter: 0,
            };
        }
    };
</script>