<script setup lang="ts">
const props = defineProps<{
  color: string
  animated?: boolean
}>()

const {
  getColor,
} = useColorFactory()

const colorItem = computed(() => {
  return getColor(props.color)
})

const iconClass = computed(() => {
  let css = `${colorItem.value.icon}`
  if (props.animated)
    css = `${css} rotate`

  return css
})
</script>

<template>
  <Avatar class="" size="xlarge" :class="colorItem.color">
    <div class="text-3xl" :class="iconClass" />
  </Avatar>
</template>

<style scoped>
.rotate {
  animation: rotateAnimation 0.7s linear infinite; /* Use the rotateAnimation for animation */
}

@keyframes rotateAnimation {
  0% {
    transform: rotate(0deg); /* Start at 0 degrees rotation */
  }
  25% {
    transform: rotate(-35deg); /* End at 360 degrees (full circle) rotation */
  }
  50% {
    transform: rotate(0deg); /* End at 360 degrees (full circle) rotation */
  }
  75% {
    transform: rotate(35deg); /* End at 360 degrees (full circle) rotation */
  }
  100% {
    transform: rotate(0deg); /* End at 360 degrees (full circle) rotation */
  }
}
</style>
