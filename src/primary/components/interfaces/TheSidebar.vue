<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer
                :rail="rail"
                permanent
            >
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                    title="John Leider"
                    nav
                >
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                    density="compact"
                    nav
                >
                    <router-link to="/system">
                        <v-list-item
                            prepend-icon="mdi-home-city"
                            title="Home"
                            value="home"
                        ></v-list-item>
                    </router-link>

                    <router-link to="/pills">
                        <v-list-item
                            prepend-icon="mdi-pill"
                            title="My Account"
                            value="account"
                        ></v-list-item>
                    </router-link>

                    <router-link to="/exercises">
                        <v-list-item
                            prepend-icon="mdi-dumbbell"
                            title="Users"
                            value="users"
                        ></v-list-item>
                    </router-link>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>
<script lang="ts">
export default {
    data() {
        return {
            drawer: true,
            rail: true
        };
    }
};
</script>
