import IProjetos from "@/Interfaces/IProjetos";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado{
    projetos: IProjetos[]
}

export const key: InjectionKey<Store<Estado>>= Symbol()

export  const store =createStore<Estado>({
    state:{
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Estudos de Frontend'
            },
            {
                id: new Date().toISOString(),
                nome: 'Estudos de Inteligencia Artificial'
            },
        ]
    }
})