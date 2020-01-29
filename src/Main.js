import React from 'react'
import Schedule from './Schedule'
import Data from './Data'
import clsx from 'clsx'
import { makeStyles, useTheme, List } from '@material-ui/core';
import {AppBar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {Drawer} from '@material-ui/core';
import {Divider} from '@material-ui/core';
// import Search from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth =240;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
  },
  schedule:{
    left:40,
    position:"absolute"
  },
  SearchBox:{
    left:30
  }
}));

export default function Header(){

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className = {classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={clsx(classes.menuButton,open && classes.hide)} 
            color="inherit" 
            aria-label="menu"
            onClick = {handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Kanazawa Institute Univercity
          </Typography>
          <Button color="inherit">Login</Button>
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
        <div className = {classes.drawerHeader}>
          <IconButton onClick = {handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
          {/* <Button className = {classes.searchBtn} variant = "contained" color = "primary" disableElevation>
            <Search>
            </Search>
          </Button> */}
          <List className = {classes.SearchBox}>
            <Data></Data>
          </List>
          <Divider />
          <List>
            <Button>
              設定
            </Button>
          </List>
      </Drawer>
      <main className = {clsx(classes.content,{
        [classes.contentShift]: open,
      })}>
        <div className = {classes.drawerHeader} />
        <Typography paragraph variant = "h6" 
         className = {classes.schedule}>
          hogeの今月の予定
          <Schedule></Schedule>
        </Typography>
      </main>
    </div>
  );
}