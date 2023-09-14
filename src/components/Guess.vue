<script setup lang="ts">
import type { Guess } from '@/types/Guess'

const props = defineProps<Guess>()
</script>

<template>
  <div class="flex justify-center ">
    <BoxColor
      v-for="(color, index) in props.colors"
      :key="index"
      :color="color"
      :animated="props.isWinning"
      class="mx-2"
    />
    <div v-if="!props.isWinning" class="w-16 h-16 flex flex-col justify-around">
      <div class="grow-0">
        <Badge severity="warning" :value="props.present" />
      </div>
      <div class="grow-0">
        <Badge severity="success" :value="props.correct" />
      </div>
    </div>
    <div v-else class="w-16 h-16 flex flex-col justify-center">
      <div class="grow-0">
        <Badge severity="success" :value="props.correct" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
