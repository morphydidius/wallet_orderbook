<template>
	<div>
		<div>Logo</div>
		<router-link :to="{ name: 'settings' }">Настройки</router-link>
		&nbsp;
		<router-link :to="{ name: 'orderBook' }">Order Book</router-link>
	</div>
</template>

<script>
export default {
	name: 'WoHeader',
};
</script>
