import { ref } from 'vue'
export default function useMousePosition() {
  const mouseX = ref(0)
  const mouseY = ref(0)

  document.addEventListener('mousemove', (event) => {
    mouseX.value = event.pageX
    mouseY.value = event.pageY
  })

  return { mouseX, mouseY }
}
