const MonitoredEmailIndex = () => import('../../../pages/monitoredEmails/Index.vue');

export default {
    name: 'administration.monitoredEmails.index',
    path: '',
    component: MonitoredEmailIndex,
    meta: {
        breadcrumb: 'index',
        title: 'Monitored Emails',
    },
};
