import React, { useState, useEffect } from 'react';
import { DarkModeContext, themes } from './DarkModeContext';

export default function Wrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </DarkModeContext.Provider>
    );
}