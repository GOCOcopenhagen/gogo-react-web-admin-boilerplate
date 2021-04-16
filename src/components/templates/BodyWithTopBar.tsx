import { createStyles, Divider, fade, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Theme, Typography } from '@material-ui/core';
import { AppBar, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react'
import { lightest } from '../../globals/colors';
import { companyNameAllCaps } from '../../globals/dk_names';
import { Body } from './Body';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: lightest,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 0
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        list: {
            width: 250,
        }
    }),
);


export const BodyWithTopBar: React.FC = ({ children }) => {

    const [openLeftBar, setOpenLeftBar] = React.useState(false)
    const barClickHandle = () => setOpenLeftBar(!openLeftBar)
    const classes = useStyles();

    const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts']

    return (
        <Body>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={barClickHandle} edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer"> <MenuIcon /></IconButton>
                    <h6 className={classes.title}>{companyNameAllCaps} ADMIN</h6>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}> <SearchIcon /></div>
                        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }}
                            inputProps={{ 'aria-label': 'search' }} />
                    </div>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor='left' open={openLeftBar} onClose={barClickHandle} onOpen={barClickHandle} >
                <List className={classes.list}>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            {children}
        </Body>
    )
}