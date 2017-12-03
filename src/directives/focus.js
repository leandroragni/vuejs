export default {
  inserted (el, binding) {
    if (binding.value === true) {
      console.log('teste')
      el.focus()
    }
  }
}
