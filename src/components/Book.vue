<template>
	<div class="wo__book flex-grow-1 px-4">
		<div class="d-flex justify-space-between align-center">
			<div class="text-h6 mb-2">{{ title }}</div>

			<v-select
				:items="elemsPerTableList"
				v-model="elemsPerTable"
				label="Отображать по:"
				variant="underlined"
				class="ml-6"
				clearable
			></v-select>
		</div>

		<v-table class="wo__book__table" fixed-header>
			<thead>
				<tr>
					<th class="text-left">Price</th>
					<th
						class="text-left d-none d-sm-table-cell"
					>Quantity</th>
					<th class="text-left">Total</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="([price, quantity], index) in ordersList"
					:key="`${price}${index}`"
				>
					<td>{{ getPrice(price) }}&nbsp;</td>
					<td
						class="d-xs-none d-none d-sm-table-cell"
					>{{ getQuantity(quantity) }}&nbsp;</td>
					<td>{{ getTotal(price, quantity) }}</td>
				</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script>
import { mapState } from 'vuex';

const symbolsAfterComma = {
	btcusdt: {
		price: 2,
		quantity: 5,
	},
	bnbbtc: {
		price: 6,
		quantity: 3,
	},
	ethbtc: {
		price: 5,
		quantity: 4,
	},
};

export default {
	name: 'WoBook',
	data() {
		return {
			elemsPerTableList: [ 100, 500, 1000 ],
			elemsPerTable: null,
		};
	},
	props: {
		orders: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapState({
			pairName: state => state.currentPairName,
		}),
		ordersList() {
			return this.elemsPerTable
				? this.orders.slice(0, this.elemsPerTable)
				: this.orders;
		},
	},
	methods: {
		getTotal(price, quantity) {
			return Number(price * quantity)
				.toFixed(symbolsAfterComma[this.pairName].price);
		},
		getPrice(price) {
			return Number(price)
				.toFixed(symbolsAfterComma[this.pairName].price);
		},
		getQuantity(quantity) {
			return Number(quantity)
				.toFixed(symbolsAfterComma[this.pairName].quantity);
		},
	},
};
</script>
