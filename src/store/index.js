import { createStore } from 'vuex';
import orderBookApi from '@/api/orderBookApi';

const limit = 1000;
const normalizeData = (oldData, newData, limit) => {
    return oldData
        .concat(newData)
        .filter(([ , quantity ]) => Number(quantity))
        .sort((elem1, elem2) => elem2[0] - elem1[0])
        .slice(0, limit);
};

export default createStore({
    state: {
        currentPairName: '',
        isLoading: false,
        asks: [],
        bids: [],
        lastUpdateId: null,
        error: null,
        logs: [],
        socket: null,
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
        getOrderBookSuccess: (state, { asks, bids, lastUpdateId }) => {
            state.isLoading = false;
            state.asks = asks;
            state.bids = bids;
            state.lastUpdateId = lastUpdateId;
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
                socket: null,
            });
        },
        registerPairChange: (state, payload) => {
            state.logs.unshift(payload);
        },
        formNewOrder: (state, { data, key }) => {
            state[key] = normalizeData(state[key], data, limit);
        },
        createSocket: (state, callBack) => {
            state.socket = orderBookApi.createSocket(state.currentPairName, data => {
                const newData = JSON.parse(data);
                callBack(newData);
            });
        },
        closeSocket: state => {
            if (state.socket) {
                state.socket.close();
            }
        },
    },
    actions: {
        updateOrderBookSuccess: ({ state, commit }, data) => {
            state.lastUpdateId = data.u; //?

            commit('formNewOrder', ({
                data: data.a,
                key: 'asks',
            }));

            commit('formNewOrder', ({
                data: data.b,
                key: 'bids',
            }));
        },
        getOrderBookByName({ state, commit }, name) {
            const pairName = name.toLowerCase();
            const oldPairName = state.currentPairName.toUpperCase();

            if (name === oldPairName) return;

            const log = {
                old: oldPairName,
                current: name,
            };

            commit('closeSocket');
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

        updateOrderBook({ commit, dispatch }) {
            commit('createSocket', newData => dispatch('updateOrderBookSuccess', newData));
        },
    },
    modules: {},
});
