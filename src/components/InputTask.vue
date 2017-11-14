<template>
  <div>
    <p>
      <input class="new_todo" @keyup.enter="addTask" placeholder="O que precisa ser feito" />
    </p>
  </div>
</template>

<script>
import { Task } from '../models/Task'

export default {
  data () {
    return {
    }
  },
  methods: {
    addTask ($event) {
      let value = $event.target.value
      let task = new Task()
      task.completed = false
      task.title = value
      this.$emit('newTask', task)
      event.target.value = ''
    }
  }
}
</script>

<style>

</style>