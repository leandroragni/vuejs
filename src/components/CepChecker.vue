<template>
  <section class="cepChecker">
    <label>Digite seu CEP</label>
    <input @blur="checkCep" type="text"></input>
    <router-link class="home" to="/">Ver tarefas</router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
      address: {}
    }
  },
  methods: {
    checkCep ($event) {
      let cep = $event.target.value
      this.$http.get('https://api.postmon.com.br/v1/cep/' + cep).then(
        (res) => {
          this.address = res.body
          console.log(this.address)
        },
        (res) => {
          console.log(res)
        }
      )
    }
  }
}
</script>