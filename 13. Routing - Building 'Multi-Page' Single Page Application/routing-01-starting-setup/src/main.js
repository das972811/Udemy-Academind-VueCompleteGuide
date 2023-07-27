import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMember, props: true },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter
            },
            beforeEnter(to, from, next) {
                console.log('before enter user');
                console.log(to, from);
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, safePosition) {
        if (safePosition) {
            return safePosition;
        }
        return { left: 0, top: 0 };
    },
});
const app = createApp(App);

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach');
    console.log(to);
    console.log(from);
    next()
});

router.afterEach(function () {
    console.log('Global afterEach');
});

app.use(router);

app.mount('#app');
