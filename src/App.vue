<template>
    <v-app class="wo">
        <wo-header></wo-header>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
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
