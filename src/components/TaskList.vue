<template>
	<ul	class="todo-list">
		<li	v-for="todo	in sortedTasks" class="todo">
			<div class="view">
			  <input type="checkbox" @click="completeTask(todo)" />
				<label :class="{'todo-completed' : todo.completed }">{{	todo.title	}}</label>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
  props: ['todoList'],
  computed: {
    sortedTasks: function () {
      let sorted = this.todoList
      return sorted.sort(function (a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
    }
  },
  set: function (novalista) {
    this.todoList.concat(novalista)
  },
  methods: {
    completeTask (task) {
      task.completed = !task.completed
    }
  }
}
</script>

<style>
  .todo-completed {
    text-decoration: line-through;
  }
</style>