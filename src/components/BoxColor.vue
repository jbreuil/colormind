<script setup lang="ts">
const props = defineProps<{
  color: string
}>()

const {
  getColor,
} = useColorFactory()

const colorItem = computed(() => {
  return getColor(props.color)
})
</script>

<template>
  <Avatar class="" size="xlarge" :class="colorItem.color">
    <div class="text-3xl" :class="colorItem.icon" />
  </Avatar>
</template>

<style scoped></style>
