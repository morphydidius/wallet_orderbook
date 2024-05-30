<template>
    <wo-header></wo-header>

    <router-view/>
</template>

<script>
import WoHeader from '@/components/Header';

export default {
    name: 'WoApp',
    components: {
        WoHeader,
    },
};
</script>
