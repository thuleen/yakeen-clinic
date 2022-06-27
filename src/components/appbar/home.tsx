import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./styles";
import logo from "../../asset/img/logo.svg";

const APPNAME = import.meta.env.VITE_APPNAME;

type AppbarProps = {
  handleReset: () => void;
};

const HomeAppbar = (props: AppbarProps) => {
  const { handleReset } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu((previousVal) => !previousVal);
  };

  const toggleMenuItem = (pathName: string) => {
    // navigate.push(pathName);
  };

  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbarContainer}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.logoContainer}>
            <img src={logo} alt="flag" style={styles.logo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                color="white"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  marginLeft: "0.5rem",
                  fontFamily: "Oswald",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                {APPNAME}
              </Typography>
            </Link>
          </div>
        </div>
        <div style={styles.settings}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleReset}
            color="inherit"
          >
            <AddIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton
            aria-label="verification-menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleMenu}
            color="inherit"
          >
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
          <Menu
            id="menu"
            MenuListProps={{
              "aria-labelledby": "menu",
            }}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={toggleMenu}
          >
            <MenuItem onClick={() => toggleMenuItem("/transactions-history")}>
              Transactions history
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppbar;
