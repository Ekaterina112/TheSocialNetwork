import React from 'react';
import {StoreType} from './components/redux/store';
import store from './components/redux/redux-store';


const StoreContext = React.createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

 export  const Provider = (props:any) =>  {
    return  <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}


export default StoreContext //component;