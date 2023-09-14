<script setup lang="ts">
import type { GameParameters } from '@/types/GameParameters'

const props = withDefaults(defineProps<GameParameters>(), {
  numberOfColors: 6,
  duplicateColor: false,
  numberOfColorToGuess: 4,
  numberOfTries: 8,
})

defineEmits<{
  won: []
}>()

const {
  guessHistory,
  currentGuess,
  possibleColors,
  isGuessComplete,
  addColor,
  guess,
  hasWon,
  hasLost,
  remainingTries,
  reset,
} = useGame(
  props.numberOfColors,
  props.duplicateColor,
  props.numberOfColorToGuess,
  props.numberOfTries,
)
</script>

<template>
  <div class="flex flex-col justify-center ">
    <TransitionGroup name="history">
      <Guess
        v-for="(guess, index) in guessHistory"
        :key="index"
        :colors="guess.colors"
        :correct="guess.correct"
        :present="guess.present"
        :is-winning="guess.isWinning"
        class="my-2"
      />
    </TransitionGroup>
    <GuessInput
      v-if="!hasWon && !hasLost"
      :colors="possibleColors"
      :guess="currentGuess"
      :disabled="!isGuessComplete"
      :tries="remainingTries"
      @add="addColor"
      @guess="guess"
    />
    <div v-if="hasLost" class="flex">
      <Button
        class="mt-6 mx-1 grow-1"
        label="You used all your tries"
        icon="i-mdi-refresh"
        icon-pos="right"
        @click="reset"
      />
      <div class="w-16 h-16" />
    </div>
    <div v-if="hasWon" class="flex">
      <Button
        class="mt-6 mx-1 grow-1"
        label="Next level"
        @click="$emit('won')"
      />
      <div class="w-16 h-16" />
    </div>
  </div>
</template>

<style lang="css">
.history-enter-active{
  transition: all 0.5s ease-in;
}
.history-enter-from {
  opacity: 0;
  transform: translatey(70px);
}

.history-leave-active {
  transition: all 0.5s ease-in;
}

.history-leave-to {
  opacity: 0;
  transform: translatey(-200px);
}
</style>
