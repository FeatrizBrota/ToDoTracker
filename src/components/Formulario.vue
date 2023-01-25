<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Fomulário para criação de uma nova tarefa">
                
                <input type="text" class="input" placeholder="Qual tarefa você quer iniciar?" v-model="tarefa">
                
            </div>
            <div class="column temporizador">
                <Temporizador  @aoTemporizadorFinalizado="finalizarTarefa"/>
            </div>
        </div>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';


export default defineComponent({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador,
    },

    data(){
        return{
            tarefa:''
        }

    },

    methods:{
        finalizarTarefa(tempoDecorrido:number): void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao:this.tarefa
            })

            this.tarefa =''

        }
    }
});

</script>


<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}

</style>
