import type { Color } from '@/types/Color'

const colors: Ref<Color[]> = ref([
  { name: 'empty', color: 'bg-transparent outline', icon: 'i-mdi-help' },
  { name: 'yellow', color: 'bg-yellow', icon: 'i-mdi-duck' },
  { name: 'green', color: 'bg-green', icon: 'i-mdi-snake' },
  { name: 'red', color: 'bg-red', icon: 'i-mdi-bird' },
  { name: 'blue', color: 'bg-blue', icon: 'i-mdi-fish' },
  { name: 'pink', color: 'bg-fuchsia', icon: 'i-mdi-butterfly' },
  { name: 'black', color: 'bg-dark-9', icon: 'i-mdi-bat' },
  { name: 'gray', color: 'bg-gray', icon: 'i-mdi-elephant' },
  { name: 'purple', color: 'bg-violet', icon: 'i-mdi-jellyfish' },
])

export function useColorFactory() {
  function getColor(name: string) {
    return colors.value.find(color => color.name === name) || colors.value[0]
  }

  return {
    getColor,
  }
}
