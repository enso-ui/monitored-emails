<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box form-box has-background-light raises-on-hover">
                <template #actions-left>
                    <div class="level-item">
                        <a class="button is-primary"
                            @click="testMail">
                            <span class="is-hidden-mobile">
                                {{ i18n('Test') }}
                            </span>
                            <span class="icon">
                                <fa icon="check-double"/>
                            </span>
                            <span class="is-hidden-mobile"/>
                        </a>
                    </div>
                </template>
            </enso-form>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';
import { EnsoForm } from '@enso-ui/forms/bulma';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckDouble);

const http = inject('http');
const i18n = inject('i18n');
const errorHandler = inject('errorHandler');
const route = inject('route');
const toastr = inject('toastr');

const currentRoute = useRoute();

console.log(currentRoute.params.monitoredEmail);
const testRoute = route('administration.monitoredEmails.testEmail', { monitoredEmail: currentRoute.params.monitoredEmail });

const testMail = () => http.get(testRoute)
    .then(({ data }) => {
        if(data.status)
            toastr.success(data.message);
        else toastr.error(data.message);
    })
    .catch(errorHandler);

</script>

<style lang="scss">
</style>
