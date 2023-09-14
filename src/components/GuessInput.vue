<script setup lang="ts">
const props = defineProps<{
  guess: string[]
  colors: string[]
  disabled: boolean
}>()

const emit = defineEmits<{
  add: [color: string, index: number]
  guess: []
}>()

const guessPopover = ref()
const guessPopoverIndex = ref(0)
function toggle(event: Event, index: number) {
  guessPopover.value.toggle(event)
  guessPopoverIndex.value = index
}

function addGuess(color: string) {
  emit('add', color, guessPopoverIndex.value)
  guessPopover.value.hide()
}
</script>

<template>
  <div class="flex">
    <div class="flex flex-col">
      <OverlayPanel ref="guessPopover">
        <div class="flex gap-1">
          <BoxColor
            v-for="(color, index) in props.colors"
            :key="index"
            class="mx-1"
            :color="color"
            @click="addGuess(color)"
          />
        </div>
      </OverlayPanel>
      <div class="flex mt-4 ">
        <BoxColor
          v-for="(color, index) in guess"
          :key="index"
          class="mx-2"
          :color="color"
          @click="toggle($event, index)"
        />
      </div>
      <Button
        class="mt-6 mx-1"
        label="Guess"
        :disabled="props.disabled"
        @click="$emit('guess')"
      />
    </div>
    <div class="w-16 h-16" />
  </div>
</template>

<style scoped>

</style>
