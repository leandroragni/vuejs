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
      let task = this.createTask(value)
      this.broadcast(task)
      this.clearField($event)
    },
    createTask (value) {
      let task = new Task()
      task.completed = false
      task.title = value
      return task
    },
    clearField () {
      this.$el.querySelector('input').value = ''
    },
    broadcast (task) {
      this.$emit('newTask', task)
    },
    createTaskJson (task) { // apenas exemplo
      let json = JSON.stringify(task)
      let url = 'http://urldopost.com.br'
      this.$http.post(url, json, {
        headers: {
          'Authorization': 'Basic KPDOAKODKAO=='
        }
      })
    }
  }
}
</script>

<style>

</style>