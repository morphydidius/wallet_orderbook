const state = {
	asks: null,
	bids: null,
	isLoading: false,
	error: null,
};

const mutations = {
	getOrderBookStart: (state) => {
		state.isLoading = true;
		console.log('start');
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
};

// const actions = {};

export default {
	state,
	mutations,
	namespaced: true,
};
