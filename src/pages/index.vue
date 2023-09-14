<script setup lang="ts">
const {
  level,
  levelParameters,
  hasNextLevel,
  nextLevel,
  restart,
} = useGameManager()

const gameOver = ref(false)

function handleWon() {
  if (!hasNextLevel.value)
    gameOver.value = true
  nextLevel()
}
</script>

<template>
  <Game
    v-if="!gameOver"
    :key="level"
    class="mb-10"
    :number-of-colors="levelParameters.numberOfColors"
    :duplicate-color="levelParameters.duplicateColor"
    :number-of-color-to-guess="levelParameters.numberOfColorToGuess"
    :number-of-tries="levelParameters.numberOfTries"
    @won="handleWon"
  />
  <div class="flex">
    <div class="grow-1 text-xl">
      Level {{ level }}
    </div>
    <div class="w-16 h-8" />
  </div>
  <div v-if="levelParameters.duplicateColor && !gameOver" class="flex">
    <div class="grow-1 italic">
      Colors can appear twice or more
    </div>
    <div class="w-16 h-16" />
  </div>
  <div v-if="gameOver">
    <div class="text-4xl">
      You beat the game !
    </div>
    <Button class="mt-8" label="Play again" @click="restart" />
  </div>
</template>

<style lang="css">

</style>
