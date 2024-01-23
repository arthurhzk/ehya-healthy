<script setup lang="ts">
import { AlertDialogAction, type AlertDialogActionProps } from 'radix-vue'
import { cn } from '@/secondary/lib/utils'
import { buttonVariants } from '@/primary/components/ui/button'

const props = defineProps<AlertDialogActionProps>()
</script>

<template>
  <AlertDialogAction v-bind="props" :class="cn(buttonVariants(), $attrs.class ?? '')">
    <slot />
  </AlertDialogAction>
</template>
