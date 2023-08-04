import { createStore } from 'vuex';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000)
        },
        increase(context, payload) {
            setTimeout(function () {
                context.commit('increase', payload);
            }, 2000)
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100;
            }

            return finalCounter;
        }
    },
};

export const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logOut(context) {
            context.commit('setAuth', { isAuth: false });
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});
