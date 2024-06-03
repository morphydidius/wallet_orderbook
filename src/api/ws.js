export default class Socket {
	constructor(pairName, callback) {
		this.pair = pairName.toLowerCase();
		this.socket = null;
		this.callback = callback;
	}
	init() {
		this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.pair}@depth`);

		this.socket.onmessage = event => {
			if (this.callback) {
				this.callback(event.data);
			}
		};
	}
	close() {
		this.socket.close();
	}
}
