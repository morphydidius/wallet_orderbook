import axios from '@/api/axios';
import WebSocket from '@/api/ws';

const getOrderBook = (pairName) => {
	return axios
		.get(`/depth?symbol=${pairName}&limit=1000`)
		.then(response => response.data);
};

const createSocket = (pairName, callback) => {
	const ws = new WebSocket(pairName, callback);
	ws.init();

	return ws;
};

export default {
	getOrderBook,
	createSocket,
};
