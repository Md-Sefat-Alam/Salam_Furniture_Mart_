import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import CartAndSearch from "../CartAndSearch/CartAndSearch";
import useAuth from "../../../hooks/useAuth";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Nav = () => {
  const { user, logOut, isAdmin } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = useLocation();
  if (location.pathname.includes("/dashboard")) {
    return <div></div>;
  }

  return (
    <AppBar
      sx={{
        bgcolor: "#fff",
        boxShadow: "1px 1px 15px gray inset",
        // borderBottom: "1px solid lightgray",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "gray" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to={"/home"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/new"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    New
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/living"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Living
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/office"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Office
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/bedroom"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Bedroom
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/dining"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Dining
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/door"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Door
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={"/products/kids"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: "roboto" }}
                    sx={{ color: "black" }}
                    textAlign="center"
                  >
                    Kids
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <CartAndSearch />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* ["New", "Living", "Office", "Bedroom", "Dining", "Door", "Kids"] */}
            <Link to={"/home"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Home
              </Button>
            </Link>
            <Link to={"/products/new"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                New
              </Button>
            </Link>
            <Link to={"/products/living"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Living
              </Button>
            </Link>
            <Link to={"/products/office"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Office
              </Button>
            </Link>
            <Link to={"/products/bedroom"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Bedroom
              </Button>
            </Link>
            <Link to={"/products/dining"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Dining
              </Button>
            </Link>
            <Link to={"/products/door"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Door
              </Button>
            </Link>
            <Link to={"/products/kids"}>
              <Button
                style={{ margin: "10px", fontFamily: "roboto" }}
                className="hover:text-gray-900"
                sx={{ my: 2, color: "gray", display: "block" }}
              >
                Kids
              </Button>
            </Link>
          </Box>

          {user.email && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleClick} sx={{ p: 0 }}>
                  <Avatar
                    alt={user.displayName ? user.displayName : user.email}
                    src={user.photoURL}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                {isAdmin.isAdmin === true ? (
                  <Link to={"/dashboard/manage-orders"}>
                    <MenuItem>
                      <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                      </ListItemIcon>
                      Admin Dashboard
                    </MenuItem>
                  </Link>
                ) : (
                  <Link to={"/dashboard/myorders"}>
                    <MenuItem>
                      <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                      </ListItemIcon>
                      My Orders
                    </MenuItem>
                  </Link>
                )}
                <MenuItem onClick={() => logOut()}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
