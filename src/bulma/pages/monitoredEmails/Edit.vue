<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop is-two-thirds-tablet">
            <enso-form class="box form-box">
                <template #actions-left>
                     <action tag="a"
                        :button="{
                            class: 'is-dark',
                            icon: faCheckDouble,
                            label: 'Test',
                        }"
                        @click="testMail"/>
                </template>
            </enso-form>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { EnsoForm, Action } from '@enso-ui/forms/bulma';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const http = inject('http');
const errorHandler = inject('errorHandler');
const route = inject('route');
const toastr = inject('toastr');

const currentRoute = useRoute();
const testRoute = route('administration.monitoredEmails.testEmail', { monitoredEmail: currentRoute.params.monitoredEmail });

const testMail = () => http.get(testRoute)
    .then(({ data }) => {
        if (data.status) {
            toastr.success(data.message);
        } else {
            toastr.error(data.message);
        }
    })
    .catch(errorHandler);
</script>
