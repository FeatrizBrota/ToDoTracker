<template >
  <main class ="columns is-gapless is-multiline " :class="{'modo-escuro': modoEscuroAtivo}">
    <div class ="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class ="column is-three-quarter conteudo">
      <RouterView>

      </RouterView>


    </div>
    
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
  },
  data(){
    return{
      modoEscuroAtivo: false
    }
  },
  computed:{

    },

  methods:{
    trocarTema(modoEscuroAtivo: boolean){
      this.modoEscuroAtivo= modoEscuroAtivo

    }

  }

});
</script>

<style>
.lista{
  padding: 1.25rem;
}

main{
  --bg-primario: #ffff;
  --texto-primario: #355c7d;
  --tarefa-primario: #f67280

}

main.modo-escuro{
  --bg-primario: #355c7d;
  --texto-primario: #f67280;
  --tarefa-primario: #c06c84;

}
.conteudo{
  background-color: var(--bg-primario);

}

</style>
