<template>
    <div id="unico-elemento-raiz-porra">
        <div v-if="new Date().getHours() < 15">
            <p>Não passou dás 15!</p>
        </div>
        <div v-else-if="new Date().getHours() == 15">
            <p>São 15h</p>
        </div>
        <div v-else>
            <p>Já é mais de 15h</p>
        </div>
        <div>
            <p v-show="new Date().getHours() < 17">Após as 17h já era!</p>
            <p>{{ nome }}</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    let nome = 'testando uma variável!'
    return {
      nome
    }
  }
}
</script>

<style>
    
</style>