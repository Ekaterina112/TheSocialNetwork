import React from 'react';
import store, {StoreType} from './components/redux/store';
import {BrowserRouter} from 'react-router-dom';

const StoreContext = React.createContext({} as StoreType)

 export  const Provider = (props:any) =>  {
    return  <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}


export default StoreContext //component;