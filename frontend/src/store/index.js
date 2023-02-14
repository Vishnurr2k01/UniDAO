import {createGlobalState} from 'react-hooks-global-state'

const {setGlobalState,useGlobalState,getGlobalState} = createGlobalState({
  connectedAccount :'',
  contract : null,
  proposals : [],
  isAdmin :false,
  isVoter : false,
})

export {setGlobalState,useGlobalState,getGlobalState}