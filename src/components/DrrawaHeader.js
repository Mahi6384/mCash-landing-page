import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import TollIcon from '@mui/icons-material/Toll';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarsIcon from '@mui/icons-material/Stars';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportIcon from '@mui/icons-material/Support';
import PolicyIcon from '@mui/icons-material/Policy';
import MailIcon from "@mui/icons-material/Mail";
import { shadows } from "@mui/system";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="transparent"
        position="absolute"
        style={{ boxShadow:"none", width:"100%"}}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "#ab11b4", fontWeight:"bold" ,fontSize:"25px"}} variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Redeem', 'Transaction', 'Invite a Friend', 'Rate us', 'Help and Support', 'Privacy Policy '].map((text, index) => (
            <ListItem key={text} disablePadding>
              <hr/>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <TollIcon style={{ color: "#ab11b4" }} />
            </ListItemIcon >
            <ListItemText className="list-item" primary={"Redeem"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <DescriptionIcon style={{ color: "#ab11b4" }}/>
            </ListItemIcon>
            <ListItemText className="list-item" primary={"Transaction"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <AccountCircleIcon style={{ color: "#ab11b4" }} />
            </ListItemIcon>
            <ListItemText className="list-item" primary={"Invite a Friend"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <StarsIcon style={{ color: "#ab11b4" }}/>
            </ListItemIcon>
            <ListItemText className="list-item" primary={"Rate Us"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <SupportIcon style={{ color: "#ab11b4" }} />
            </ListItemIcon>
            <ListItemText className="list-item" primary={"Help and Support"} />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon className ="list-icon">
              <PolicyIcon style={{ color: "#ab11b4" }} />
            </ListItemIcon>
            <ListItemText className="list-item" primary={"Privacy Policy"} />
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
