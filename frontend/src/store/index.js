import {createGlobalState} from 'react-hooks-global-state'

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
  connectedAccount :'',
  contract : null
})

export {setGlobalState,useGlobalState,getGlobalState}