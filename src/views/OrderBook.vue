<template>
	<div>
		<div
			v-if="currentPairName"
			class="order-book"
		>
			<wo-book
				v-if="currentAsks.length"
				:orders="currentAsks"
			></wo-book>

			<wo-book
				v-if="currentBids.length"
				:orders="currentBids"
			></wo-book>
		</div>

		<div v-else>
			Выберите пару в&nbsp;
			<router-link :to="{ name: 'settings' }">настройках</router-link>
		</div>
	</div>
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

<style scoped>
.order-book {
	display: flex;
	justify-content: space-around;
}
</style>