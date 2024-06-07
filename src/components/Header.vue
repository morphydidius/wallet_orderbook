<template>
	<v-app-bar>
		<v-container class="d-flex justify-space-between align-center pa-0">
			<router-link :to="{ name: 'home' }">
				<v-btn
					:ripple="false"
					variant="plain"
					class="wo__logo"
				>
					<wo-logo></wo-logo>
				</v-btn>
			</router-link>

			<v-tabs
				:items="tabs"
				v-model="selectedTabId"
			>
				<v-tab
					v-for="tab in tabs"
					:key="tab.id"
					:selected="isTabActive(tab)"
					:value="tab.id"
					variant="text"
					@click="goTo(tab.value)"
				>
					{{ tab.text }}
				</v-tab>
			</v-tabs>
		</v-container>
	</v-app-bar>
</template>

<script>
import WoLogo from '@/components/Logo';

export default {
	name: 'WoHeader',
	components: {
		WoLogo,
	},
	data() {
		return {
			tabs: [
				{
					id: 1,
					text: 'Настройки',
					value: 'settings',
				},
				{
					id: 2,
					text: 'Order Book',
					value: 'orderBook',
				},
			],
			selectedTabId: null,
		};
	},
	methods: {
		goTo(name) {
			this.$router.push({ name });
		},
		isTabActive(tab) {
			return this.selectedTabId === tab.id;
		},
	},
	watch: {
		'$route.name': {
			handler(value) {
				if (value) {
					this.selectedTabId = this.tabs
						.find(tab => tab.value === this.$route.name)
						?.id;
				}
			}
		}
	}
};
</script>
