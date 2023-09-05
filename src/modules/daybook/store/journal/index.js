
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


const journalModule = {
    namespaced: true,
    //las acciones asincronas que pueden llamar una mutacion, llegan al back
    actions,
    //trae información del state y se pueden procesar
    getters,
    //son sincronas y son las unicas que cambian el state
    mutations,
    state
}


export default journalModule
