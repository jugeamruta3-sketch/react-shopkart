
import { createContext,useReducer}from "react";
export const Themecontext=createContext()
const initialState={
    theme:"light",

}
function themeReducer(state,action)
{
    switch(action.type)
    {
        case "TOGGLE_THEME":
        return{
            ...state,
            theme:state.theme==="light"?"dark":"light"
        };
        default:
        return state;

        }
    }
        export default function ThemeProvider({children})
        {
const [state,dispatch]=useReducer(themeReducer,initialState);
return(
    <Themecontext.Provider value={{state,dispatch }}>
        {children}
    </Themecontext.Provider>
        

);
        }
    
