import { createStore } from 'vuex';
import orderBookApi from '@/api/orderBookApi';

export default createStore({
    state: {
        currentPairName: '',
        isLoading: false,
        asks: [],
        bids: [],
        error: null,
        logs: [],
    },
    getters: {
        currentAsks: state => state.asks,
        currentBids: state => state.bids,
    },
    mutations: {
        setCurrentPairName: (state, name) => {
            state.currentPairName = name;
        },
        getOrderBookStart: state => {
            state.isLoading = true;
        },
        getOrderBookSuccess: (state, { asks, bids }) => {
            state.isLoading = false;
            state.asks = asks;
            state.bids = bids;
        },
        getOrderBookFailure: (state, error) => {
            state.isLoading = false;
            state.error = error;
        },
        resetState: state => {
            Object.assign(state, {
                currentPairName: '',
                asks: [],
                bids: [],
                error: null,
            });
        },
        registerPairChange: (state, payload) => {
            state.logs.unshift(payload);
        },
    },
    actions: {
        getOrderBookByName({ commit, state }, name) {
            const pairName = name.toLowerCase();
            const oldPairName = state.currentPairName.toUpperCase();

            if (name === oldPairName) return;

            const log = {
                old: oldPairName,
                current: name,
            };

            commit('resetState');
            commit('setCurrentPairName', pairName);
            commit('getOrderBookStart');

            return new Promise(resolve => {
                orderBookApi.getOrderBook(name)
                    .then(data => {
                        commit('getOrderBookSuccess', data);
                        commit('registerPairChange', {
                            ...log,
                            date: new Date(),
                        });
                        resolve(data);
                    })
                    .catch(error => {
                        commit('getOrderBookFailure', error);
                    })
            });
        },
    },
    modules: {},
});
