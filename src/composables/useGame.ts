import type { Guess } from '../types/Guess'

export function useGame(
  numberOfColors = 8,
  duplicateColor = true,
  numberOfColorToGuess = 4,
) {
  const {
    listOfColors,
    getRandomColor,
  } = useColorManager(numberOfColors)

  function newGuess() {
    return Array.from({ length: numberOfColorToGuess }, () => 'empty')
  }

  function newCombination() {
    const combination: string[] = []
    for (let index = 0; index < numberOfColorToGuess; index++)
      combination.push(getRandomColor(duplicateColor ? [] : combination).name)

    return combination
  }

  const hasWon = ref(false)
  const guessHistory: Ref<Guess[]> = ref([])
  const secretColorCombination = ref(newCombination())
  const currentGuess = ref(newGuess())
  const possibleColors = computed(() => {
    if (duplicateColor)
      return listOfColors.value.map(color => color.name)

    return listOfColors.value.filter(color =>
      !currentGuess.value.includes(color.name),
    ).map(color => color.name)
  })
  const correct = ref(0)
  const present = ref(0)
  const isGuessComplete = computed(() => {
    return !currentGuess.value.includes('empty')
  })

  function addColor(color: string, index: number) {
    currentGuess.value[index] = color
  }

  function pushGuess() {
    guessHistory.value.push({
      colors: currentGuess.value,
      correct: correct.value,
      present: present.value,
    })
    correct.value = 0
    present.value = 0
    currentGuess.value = newGuess()
  }

  function guess() {
    if (!isGuessComplete)
      return

    const remainingColor = [...secretColorCombination.value]
    const notCorrectColor: string[] = []
    for (let index = 0; index < currentGuess.value.length; index++) {
      const current = currentGuess.value[index]
      if (current === secretColorCombination.value[index]) {
        correct.value++
        remainingColor.splice(remainingColor.indexOf(current), 1)
      }
      else {
        notCorrectColor.push(current)
      }
    }

    for (let index = 0; index < notCorrectColor.length; index++) {
      const current = notCorrectColor[index]
      if (remainingColor.includes(current)) {
        present.value++
        remainingColor.splice(remainingColor.indexOf(current), 1)
      }
    }

    // if (correct.value === numberOfColorToGuess)
    pushGuess()
  }

  return {
    listOfColors,
    secretColorCombination,
    guessHistory,
    currentGuess,
    possibleColors,
    correct,
    present,
    isGuessComplete,
    addColor,
    guess,
  }
}
