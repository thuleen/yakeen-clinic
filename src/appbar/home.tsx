import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import logo from "../asset/img/yaqeen-logo.png";

// const APPNAME = import.meta.env.VITE_APPNAME;

type AppbarProps = {
  handleNew: () => void;
};

const HomeAppbar = (props: AppbarProps) => {
  const navigate = useNavigate();
  const { handleNew } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu((previousVal) => !previousVal);
  };

  const toggleMenuItem = (pathName: string) => {
    navigate(pathName);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#079992" }}>
      <Toolbar style={styles.toolbarContainer}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={styles.logoContainer}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="flag" style={styles.logo} />
            </Link>
          </div>
        </div>
        <div style={styles.settings}>
          <IconButton
            size="large"
            aria-label="create-new-transaction"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleNew}
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
            <MenuItem onClick={() => toggleMenuItem("/transactions")}>
              Transactions
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppbar;
