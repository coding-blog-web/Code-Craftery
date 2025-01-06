import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  // Menu items array
  const menuItems = [
    {
      name: "Overview",
      icon: <DashboardIcon sx={{ color: "orange" }} />,
      link: "/overview",
    },
    {
      name: "Platform",
      icon: <AssignmentIcon sx={{ color: "orange" }} />,
      subItems: [
        { name: "Assistant", link: "/platform/assistant" },
        { name: "Files", link: "/platform/files" },
        { name: "Phone Number", link: "/platform/phone-number" },
        { name: "Tools", link: "/platform/tools" },
      ],
    },
    {
      name: "Play Ground",
      icon: <LibraryMusicIcon sx={{ color: "orange" }} />,
      link: "/play-ground",
    },
    {
      name: "Logs",
      icon: <HistoryIcon sx={{ color: "orange" }} />,
      subItems: [
        { name: "Settings", link: "/logs/settings" },
        { name: "Calls", link: "/logs/calls" },
        { name: "Webhooks", link: "/logs/webhooks" },
      ],
    },
  ];

  // Toggle submenu function
  const handleToggle = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <Box
      sx={{
        width: "250px",
        backgroundColor: "white",
        color: "orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      {/* Sidebar Header */}
      <Box>
      <img
            src="./assets/images/11.png"
            alt="Logo"
            className="w-[150px] sm:w-[175px]"
          />
        <List>
          {/* Dynamically render menu items */}
          {menuItems.map((menu) => (
            <Box key={menu.name}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => menu.subItems && handleToggle(menu.name)}
                  component={!menu.subItems ? Link : undefined}
                  to={!menu.subItems ? menu.link : undefined}
                >
                  <ListItemIcon >{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                  {menu.subItems &&
                    (openMenus[menu.name] ? (
                      <ExpandLess sx={{ color: "orange" }} />
                    ) : (
                      <ExpandMore sx={{ color: "orange" }} />
                    ))}
                </ListItemButton>
              </ListItem>
              {menu.subItems && (
                <Collapse in={openMenus[menu.name]} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 4 }}>
                    <List>
                      {menu.subItems.map((subItem) => (
                        <ListItem disablePadding key={subItem.name}>
                          <ListItemButton component={Link} to={subItem.link}>
                            <ListItemText primary={subItem.name} sx={{ color: "orange" }} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
      </Box>

      {/* Profile Button */}
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "orange",
            width: "100%",
          }}
          component={Link}
          to="/profile"
        >
          Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
