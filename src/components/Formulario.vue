<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Fomulário para criação de uma nova tarefa">

                <input type="text" class="input" placeholder="Qual tarefa você quer iniciar?" v-model="tarefa">

            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column temporizador">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>

    </div>

</template>

<script lang="ts">

import { key } from '@/store';
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Temporizador from './Temporizador.vue';


export default defineComponent({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador,
    },

    data() {
        return {
            tarefa: '',
            idProjeto:''
        }

    },

    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.tarefa,
                projeto: this.projetos.find(proj =>proj.id == this.idProjeto)
            })

            this.tarefa = ''

        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(()=> store.state.projetos)
        }

    }
});

</script>


<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>
