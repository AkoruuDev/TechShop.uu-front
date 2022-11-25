import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const userLogged = localStorage.getItem('log');
    const [user, setUser] = useState(userLogged);

    function keepUserLogged(log) {
		setUser(log);
		localStorage.setItem("log", log);
	}

    return(
        <AuthContext.Provider value={{ user, setUser, keepUserLogged }}>
            {props.children}
        </AuthContext.Provider>
    )
}