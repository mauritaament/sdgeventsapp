import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import {Home} from "../components/Home/Home";
import {About} from "../components/About/About";
import {Favorites} from "../components/Favorites/Favorites";
import * as COOKIENAMES from "../helpers/CookieNames";
import history from "../helpers/history";
import Cookie from 'universal-cookie';


const cookies=new Cookie();

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function logout() {
    cookies.set(COOKIENAMES.AUTHENTICATED, false)
    history.push('/login')
}

function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const children=props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
    })}
>
<Toolbar>
    <IconButton
    color="inherit"
    aria-label="Open drawer"
    onClick={handleDrawerOpen}
    edge="start"
    className={clsx(classes.menuButton, open && classes.hide)}
>
<MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
    Sustainable Development Goals Events
    </Typography>
    </Toolbar>
    </AppBar>
    <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
        paper: classes.drawerPaper,
    }}
>
<div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
</IconButton>
    </div>
    <Divider />
    <List>
        <Link to="/home" activeClassName={classes.drawerHeader}>
            <ListItem button key="Home" >
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
        <Link to="/about" activeClassName={classes.drawerHeader}>
            <ListItem button key="About" >
                <ListItemText primary="About" />
            </ListItem>
        </Link>
        <Link to="/favorites" activeClassName={classes.drawerHeader}>
            <ListItem button key="Favorites" >
                <ListItemText primary="Favorites" />
            </ListItem>
        </Link>

</List>
    <Divider />
    <List>
        <ListItem button key="Logout">

         <ListItemText primary="Logout"/>
    </ListItem>

</List>
    </Drawer>
    <main
    className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}
>
<div className={classes.drawerHeader} />
        <Route exact path={'/'} render={() => {
            return <Redirect to={'/login'}/>
        }}/>
        <Route path={'/home'}  component={Home}/>
        <Route path={'/about'}  component={About}/>
        <Route path={'/favorites'} component={Favorites}/>

    </main>
    </div>
);
}

export default PersistentDrawerLeft;