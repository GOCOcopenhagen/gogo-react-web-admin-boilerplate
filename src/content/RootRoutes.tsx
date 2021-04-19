import * as React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AddAlertIcon from '@material-ui/icons/AddAlert';


type Route = {
    path: string
    name: string
    icon: JSX.Element
    secure: boolean
}

export const routes: Route[] = [
    {
        path: '/',
        name: 'Home',
        icon: <HomeIcon/>,
        secure: false
    },
    {
        path: '/segments',
        name: 'Segments',
        icon: <GroupIcon/>,
        secure: false
    },
    {
        path: '/notifications',
        name: 'Notification Center',
        icon: <AddAlertIcon/>,
        secure: false
    },
]
