<template>
  <section class="todoapp">
    <header class="header">
      <h2>Tarefas</h2>
      <input-task @newTask="addTask"></input-task>
      <task-list v-bind:todo-list="tasks"></task-list>
          <router-link class="cep" to="/cep">Verificar CEP</router-link>
    </header>
    <condicional></condicional>
  </section>
</template>

<script>
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'
import Condicional from './components/Condicional'

export default {
  name: 'app',
  components: {
    InputTask,
    TaskList,
    Condicional
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.events.on('newTask', eventData => this.addTask(eventData))
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
    },
    broadcast (task) {
      this.$events.emit('newTask', task)
    }
  }
}
</script>

<style>

html,
body {
	margin: 0;
	padding: 0;
}
button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	-webkit-appearance: none;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}
:focus {
	outline: 0;
}
.cep{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  border-top: 1px solid #ededed;
  text-align: center;
}
.hidden {
	display: none;
}
.todoapp {
}
.todoapp h1 {
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: rgba(175, 47, 47, 0.15);
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}

</style>
