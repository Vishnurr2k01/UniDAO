import {createGlobalState} from 'react-hooks-global-state'

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
  connectedAccount :''
})

export {setGlobalState,useGlobalState,getGlobalState}