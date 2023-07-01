import { createContext, useContext, useReducer } from "react";
import RecipeReducer from "../reducer/RecipeReducer";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
 const {initialState, recipeReducer} = RecipeReducer();
 const [state, dispatch]= useReducer(recipeReducer, initialState);

 

    return(
        <DataContext.Provider value={{state, dispatch}}>
        {children}
        </DataContext.Provider>
    )
}

export const useData =()=>useContext(DataContext)

