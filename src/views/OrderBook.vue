<template>
	<v-container class="px-4">
		<div
			v-if="currentPairName"
			class="wo__orderbook d-flex justify-space-around"
		>
			<wo-book
				v-if="currentAsks.length"
				:orders="currentAsks"
				title="Asks"
			></wo-book>

			<wo-book
				v-if="currentBids.length"
				:orders="currentBids"
				title="Bids"
			></wo-book>
		</div>

		<div v-else>
			Выберите пару в&nbsp;
			<router-link :to="{ name: 'settings' }">настройках</router-link>
		</div>
	</v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import WoBook from '@/components/Book';

export default {
	name: 'WoOrderBook',
	components: {
		WoBook,
	},
	computed: {
		...mapState([
			'currentPairName',
		]),
		...mapGetters([
			'currentAsks',
			'currentBids',
		]),
	},
};
</script>
