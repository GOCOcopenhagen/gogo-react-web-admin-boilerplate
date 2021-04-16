import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import * as React from 'react'
import { primary } from '../../globals/colors';


const theme = createMuiTheme({
    palette: {
        primary: { main: primary, contrastText:'#FAFAFD' },
        secondary: { main: '#A0A0C7' }
    },
});


export const Body: React.FC = ({children}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    )
}
