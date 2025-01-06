<template>
    <div class="container py-5">
        <header class="mb-4">
            <h3 class="text-center text-primary fw-bold">Vue JS Learning</h3>
        </header>

        <main>
            <form action="#" method="post">
                <div class="row">
                    <div class="col-md-4 my-1">
                        <input
                            type="text"
                            name="first_name"
                            class="form-control form-control-lg"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="text"
                            name="last_name"
                            class="form-control form-control-lg"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="date"
                            name="dob"
                            class="form-control form-control-lg"
                            placeholder="Enter DOB"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="number"
                            name="phone"
                            class="form-control form-control-lg"
                            placeholder="Enter Phone"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="email"
                            name="email"
                            class="form-control form-control-lg"
                            placeholder="Enter Email"
                        />
                    </div>
                </div>

                <div class="text-center">
                    <button type="button" class="btn btn-success mt-4">Submit</button>
                </div>
            </form>
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
