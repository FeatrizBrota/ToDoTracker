<template>
    <header :class="{'modo-escuro': modoEscuroAtivo}">

      <h1>
        <img class="logo" src="../assets/logo.png" alt="">
      </h1>

      <button class="button" @click="alterarTema">
        <i :class="[!modoEscuroAtivo ? 'fa-regular fa-lightbulb' : 'fa-solid fa-moon'] "></i>
       </button>
        
        
    </header>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits:['aoTemaAlterado'],
  data(){
    return{
      modoEscuroAtivo: false
    }

  },
  computed:{
    textoBotao(){
      if(this.modoEscuroAtivo){
        return 'fa-solid fa-jedi'
      } 
        return 'Modo Escuro'
      
    }

  },
  methods:{
    alterarTema(){
      this.modoEscuroAtivo =!this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)

    }
  }

});

</script>


<style>
header {
  padding: 1rem;
  background: var(--tarefa-primario);
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.logo{
  width: 50%;

}
</style>
