<template>
    <v-card
        class="mx-auto"
        max-width="280"
    >
        <v-card-item :title="props.title">
            <template v-slot:subtitle>
                <v-icon
                    class="me-1 pb-1"
                    color="error"
                    :icon="props.rateIcon"
                    size="18"
                ></v-icon>

                {{ props.risk }}
            </template>
        </v-card-item>

        <v-card-text class="py-0">
            <v-row
                align="center"
                no-gutters
            >
                <p v-if="!props.value">...</p>

                <v-col
                    class="text-h4"
                    cols="6"
                >
                    {{ props.value }}
                </v-col>

                <v-col
                    class="text-right"
                    cols="6"
                >
                    <v-icon
                        color="error"
                        :icon="props.icon"
                        size="88"
                    ></v-icon>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
    </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String
    },
    risk: {
        type: String
    },
    value: {
        type: String
    },
    icon: {
        type: String,
        default: 'mdi-heart-pulse'
    },
    rateIcon: {
        type: String,
        default: 'mdi-arrow-up'
    }
});
</script>
