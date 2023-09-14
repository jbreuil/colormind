<script setup lang="ts">
const {
  listOfColors,
  guessHistory,
  currentGuess,
  possibleColors,
  isGuessComplete,
  addColor,
  guess,
  secretColorCombination,
} = useGame(6, true, 3)
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
        class="my-2"
      />
    </TransitionGroup>
    <GuessInput
      :colors="possibleColors"
      :guess="currentGuess"
      :disabled="!isGuessComplete"
      @add="addColor"
      @guess="guess"
    />
  </div>
</template>

<style lang="css">
.history-enter-active,
.history-leave-active {
  transition: all 0.5s ease-in;
}
.history-enter-from,
.history-leave-to {
  opacity: 0;
  transform: translatey(70px);
}
</style>
