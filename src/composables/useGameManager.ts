import { Levels } from '@/assets/levels'
import type { GameParameters } from '@/types/GameParameters'

const levels: Ref<GameParameters[]> = ref(Levels)

export function useGameManager() {
  const level = ref(1)
  function restart() {
    level.value = 1
  }

  const levelParameters = computed(() => {
    return levels.value[level.value - 1]
  })

  const hasNextLevel = computed(() => {
    return level.value < levels.value.length
  })

  function nextLevel() {
    if (hasNextLevel.value)
      return level.value++
  }

  return {
    level,
    levelParameters,
    hasNextLevel,
    nextLevel,
    restart,
  }
}
