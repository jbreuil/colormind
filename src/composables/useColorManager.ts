import type { Color } from '@/types/Color'

const {
  getColor,
} = useColorFactory()

const listOfAllColors: Ref<Color[]> = ref([
  getColor('yellow'),
  getColor('green'),
  getColor('red'),
  getColor('blue'),
  getColor('pink'),
  getColor('black'),
  getColor('gray'),
  getColor('purple'),
])

export function useColorManager(number = 8) {
  const numberOfColors = ref(number)

  const listOfColors = computed(() => {
    return listOfAllColors.value.slice(0, numberOfColors.value)
  })

  function getRandomColor(exclude: string[]) {
    const restrictedColors = listOfColors.value.filter(color => !exclude.includes(color.name))
    return restrictedColors[Math.floor(Math.random() * restrictedColors.length)]
  }

  return {
    numberOfColors,
    listOfColors,
    getRandomColor,
  }
}
