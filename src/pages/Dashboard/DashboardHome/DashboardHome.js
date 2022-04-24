import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PaymentsIcon from "@mui/icons-material/Payments";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function DashboardHome(props) {
  const { isAdmin, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        boxShadow:
          "5px 0 5px -5px rgba(0,0,0,0.7),-5px 0 10px -5px rgba(0,0,0,0.7)",
      }}
    >
      <Toolbar className="flex justify-center items-center">
        <Link to={"/home"}>
          <img
            style={{ maxHeight: "60px" }}
            src="https://i.ibb.co/MsDWXFB/Salam-furniture-logo1.png"
            alt="site logo"
          />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {isAdmin.isAdmin === true ? (
          <>
            <Link onClick={handleDrawerToggle} to="manage-orders">
              <ListItem button>
                <ListItemIcon>
                  <ManageHistoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Manage Orders"} />
              </ListItem>
            </Link>
            <Link onClick={handleDrawerToggle} to="addproduct">
              <ListItem button>
                <ListItemIcon>
                  <QrCodeScannerIcon />
                </ListItemIcon>
                <ListItemText primary={"Add a Product"} />
              </ListItem>
            </Link>
            <Link onClick={handleDrawerToggle} to="manage-products">
              <ListItem button>
                <ListItemIcon>
                  <ManageHistoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Manage Products"} />
              </ListItem>
            </Link>
            <Link onClick={handleDrawerToggle} to="make-admin">
              <ListItem button>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary={"Make Admin"} />
              </ListItem>
            </Link>
            <Link onClick={handleDrawerToggle} to="select-home-slider-item">
              <ListItem button>
                <ListItemIcon>
                  <AddPhotoAlternateIcon />
                </ListItemIcon>
                <ListItemText primary={"Home Banner"} />
              </ListItem>
            </Link>
          </>
        ) : (
          <>
            <Link onClick={handleDrawerToggle} to="myorders">
              <ListItem button>
                <ListItemIcon>
                  <QrCodeScannerIcon />
                </ListItemIcon>
                <ListItemText primary={"My Orders"} />
              </ListItem>
            </Link>
            <Link onClick={handleDrawerToggle} to="add-review">
              <ListItem button>
                <ListItemIcon>
                  <RateReviewIcon />
                </ListItemIcon>
                <ListItemText primary={"Add Review"} />
              </ListItem>
            </Link>
            {/* <Link onClick={handleDrawerToggle} to="pay">
              <ListItem button>
                <ListItemIcon>
                  <PaymentsIcon />
                </ListItemIcon>
                <ListItemText primary={"Pay"} />
              </ListItem>
            </Link> */}
          </>
        )}
      </List>
      <Divider />
      <List>
        <Link onClick={handleDrawerToggle} to={"/home"}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <ListItem
          onClick={() => {
            handleDrawerToggle();
            logOut();
          }}
          button
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Log out"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ color: "black" }}
            variant="h6"
            noWrap
            component="div"
          >
            Salam Furniture Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

DashboardHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardHome;
