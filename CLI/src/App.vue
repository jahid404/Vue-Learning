<template>
    <div class="container py-5">
        <header class="mb-4">
            <h3 class="text-center text-primary fw-bold">Vue JS Learning</h3>
        </header>

        <main>
            <div class="row">
                <div class="col-6">
                    <input type="text" name="name" class="form-control form-control-lg" placeholder="" />
                </div>
                <div class="col-6"></div>
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
        },
    };
</script>
