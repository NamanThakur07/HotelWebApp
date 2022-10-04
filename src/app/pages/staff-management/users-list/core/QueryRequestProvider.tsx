import {FC, useState, createContext, useContext, PropsWithChildren} from 'react'
import {
  QueryState,
  QueryRequestContextProps,
  initialQueryRequest,
} from '../../../../../_metronic/helpers'

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest)

type Props = {
  children:any
}

const QueryRequestProvider: FC<PropsWithChildren<Props>> = ({children}) => {
  const [state, setState] = useState<QueryState>(initialQueryRequest.state)

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = {...state, ...updates} as QueryState
    setState(updatedState)
    console.log(updatedState,"UpdatedStateHere");
  }

  return (
    <QueryRequestContext.Provider value={{state, updateState}}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
