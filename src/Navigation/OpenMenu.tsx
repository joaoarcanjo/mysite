import { createContext, useContext } from "react"

export type ContextType = {
    isOpen: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  export const OpenInContext = createContext<ContextType | undefined>(undefined)
  
  export const useMenuState = () => useContext(OpenInContext)