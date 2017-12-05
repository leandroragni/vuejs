<template>
  <section class="cepChecker">
    <label>Digite seu CEP</label>
    <input @blur="checkCep" v-mask="'99999-999'" type="text"></input>
    <router-link class="home" to="/">Ver tarefas</router-link>
    <div v-show="hasAddress()">
       <p>Rua: {{address.logradouro}}</p>
       <p>Bairro: {{address.bairro}}</p>
       <p>Cidade: {{address.cidade}}</p>
       <p>Estado: {{address.estado}}</p>
     </div>
     <footer-todo>
       <p>Footer do Cep</p>
     </footer-todo>
  </section>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import FooterTodo from './Footer'

export default {
  data () {
    return {
      address: {}
    }
  },
  components: {
    FooterTodo
  },
  directives: {
    'mask': AwesomeMask
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
    },
    hasAddress () {
      return Object.keys(this.address).length > 0
    }
  }
}
</script>