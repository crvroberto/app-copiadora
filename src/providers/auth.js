import React from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = props => {
    const [user,setUser] = React.useState("Funcionário")

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {props.children}

        </AuthContext.Provider>
    )
}