import axios from '@/api/axios';

const getOrderBook = (pair) => {
	return axios
		.get(`/depth?symbol=${pair}&limit=1000`)
		.then(response => response.data);
};

export default {
	getOrderBook,
};
