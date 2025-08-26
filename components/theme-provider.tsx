import {ThemeProvider as NextThemsProvider} from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({children}:{children:ReactNode}){
    return(
        <NextThemsProvider attribute="class"
        defaultTheme="system" enableSystem>
            {children}
        </NextThemsProvider>
    )
}