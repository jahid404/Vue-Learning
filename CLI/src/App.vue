<template>
    <div class="container py-5">
        <header class="mb-4">
            <h3 class="text-center text-primary fw-bold">Vue JS Learning</h3>
        </header>

        <main>
            <div class="mb-5">
                <pre class="bg-light rounded-4 p-4">
                {{ JSON.stringify(formValues, null, 4) }}
                </pre>
            </div>
            <form action="#" method="post">
                <div class="row">
                    <div class="col-md-4 my-1">
                        <input
                            type="text"
                            name="first_name"
                            class="form-control form-control-lg"
                            placeholder="Enter your name"
                            v-model="formValues.first_name"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="text"
                            name="last_name"
                            class="form-control form-control-lg"
                            placeholder="Enter your name"
                            v-model="formValues.last_name"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="date"
                            name="dob"
                            class="form-control form-control-lg"
                            placeholder="Enter DOB"
                            v-model="formValues.dob"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="number"
                            name="phone"
                            class="form-control form-control-lg"
                            placeholder="Enter Phone"
                            v-model="formValues.phone"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="email"
                            name="email"
                            class="form-control form-control-lg"
                            placeholder="Enter Email"
                            v-model="formValues.email"
                        />
                    </div>
                    <div class="col-md-4 my-1">
                        <select
                            name="country"
                            id=""
                            class="form-control form-control-lg"
                            v-model="formValues.country"
                        >
                            <option value="">Select Country</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="china">China</option>
                            <option value="pakistan">Pakistan</option>
                        </select>
                    </div>
                    <div class="col-md-4 my-1">
                        <select
                            name="location"
                            id=""
                            class="form-control form-control-lg"
                            v-model="formValues.location"
                            multiple
                        >
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattagram">Chattagram</option>
                            <option value="Noakhali">Noakhali</option>
                        </select>
                    </div>

                    <div class="col-12 my-1">
                        <textarea
                            name="profile"
                            class="form-control form-control-lg"
                            placeholder="Write profile summary"
                            v-model="formValues.profile"
                        ></textarea>
                    </div>

                    <div class="col-md-4 my-1">
                        <input
                            type="checkbox"
                            name="is_remote"
                            id="is_remote"
                            true-value="yes" false-value="no"
                            v-model="formValues.is_remote"
                        />
                        <label for="is_remote">Is Remote?</label>
                    </div>
                    <div class="col-md-4 my-1">
                        <input
                            type="radio"
                            name="is_remote"
                            id="is_remote"
                            v-model="formValues.is_remote"
                        />
                        <label for="is_remote">Is Remote?</label>
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
                formValues: {
                    first_name: '',
                    last_name: '',
                    dob: '',
                    phone: '',
                    email: '',
                    profile: '',
                    country: '',
                    location: [],
                    is_remote: 'no',
                },
            };
        },
    };
</script>
