import React, { useEffect } from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = props => {
    const storage = sessionStorage.getItem("funcionario") || "Funcionário"

    const [user,setUser] = React.useState(storage)
    
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}

        </AuthContext.Provider>
    )
}