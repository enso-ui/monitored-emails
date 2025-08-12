const MonitoredEmailEdit = () => import('../../../pages/monitoredEmails/Edit.vue');

export default {
    name: 'administration.monitoredEmails.edit',
    path: ':monitoredEmail/edit',
    component: MonitoredEmailEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Monitored Email',
    },
};
