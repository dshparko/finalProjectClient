
import { createContext } from "react";

export const themes = {
    dark: "",
    light: "white-content",
};

export const DarkModeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});