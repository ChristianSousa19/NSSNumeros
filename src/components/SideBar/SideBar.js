import * as React from "react";
import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Box,styled,Collapse,} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess"; // Ícone para expandir menus.
import ExpandMore from "@mui/icons-material/ExpandMore"; // Ícone para recolher menus.
import { styled } from "@mui/material/styles"; // Para estilizar componentes.
import Logo from "caminho/para/seu/logo.svg"; // O arquivo de logo que você está usando.
import Translator from "../i18n/Translator";

const menuItems = [
  { id: "1",  name: <Translator path="menu.home" />, icon: Dashboard },
  { id: "2", name: "About", route: "/about", icon: Receitas },
  { id: "3", name: "Contact", route: "/contact", icon: Pagamentos },
  {
    id: "4",
    name: "Transactions",
    icon: Acessos,
    isSubmenu: true,
    submenu: [
      { id: "4-1", name: "Processing & Storage", route: "/transactions/processingstorage" },
      { id: "4-2", name: "Connectivity", route: "/transactions/connectivity" },
      { id: "4-3", name: "Support", route: "/transactions/support" },
      { id: "4-4", name: "Work Environment", route: "/transactions/workenvironment" },
      { id: "4-5", name: "Collaboration", route: "/transactions/collaboration" },
      { id: "4-6", name: "Telephony", route: "/transactions/telephony" },
    ],
  },
  {
    id: "5",
    name: "Movements",
    icon: Clientes,
    isSubmenu: true,
    submenu: [
      { id: "5-1", name: "New VM", route: "/movements/newvm" },
      { id: "5-2", name: "BaaS", route: "/movements/baas" },
      { id: "5-3", name: "Pix", route: "/movements/pix" },
      { id: "5-4", name: "Low Code", route: "/movements/lowcode" },
      {
        id: "5-5",
        name: "Digital Channels",
        isSubmenu: true,
        submenu: [
          { id: "5-5-1", name: "Digital Channels", route: "/movements/digitalchannels" },
          { id: "5-5-2", name: "SubTab 1", route: "/movements/digitalchannels/subtab1" },
          { id: "5-5-3", name: "SubTab 2", route: "/movements/digitalchannels/subtab2" },
          { id: "5-5-4", name: "SubTab 3", route: "/movements/digitalchannels/subtab3" },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Governance",
    icon: Configuracao,
    isSubmenu: true,
    submenu: [
      { id: "6-1", name: "Service Management", route: "/governance/servicemanagement" },
      { id: "6-2", name: "IT Investment", route: "/governance/itinvestment" },
      { id: "6-3", name: "People", route: "/governance/people" },
      { id: "6-4", name: "Risks", route: "/governance/risks" },
      { id: "6-5", name: "ESG", route: "/governance/esg" },
      { id: "6-6", name: "Portfolio", route: "/governance/portfolio" },
      { id: "6-7", name: "Awards & Certifications", route: "/governance/awardscertifications" },
    ],
  },
  {
    id: "7",
    name: "Disruptive Tech",
    icon: Display,
    isSubmenu: true,
    submenu: [
      { id: "7-1", name: "Disruptive Tech", route: "/disruptivetech" },
      { id: "7-2", name: "Channels Individual", route: "/disruptivetech/channelsindividual" },
    ],
  },
];
const Sidebar = ({ open }) => {
  const [isExpand, setIsExpand] = React.useState(null);

  const handleClickMenu = (index) => {
    setIsExpand((state) => (index === state ? null : index));
  };

  return (
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
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </DrawerHeader>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClickMenu(index)}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {item.isSubmenu ? (
                    isExpand === index ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItemButton>
              </ListItem>
              {item.isSubmenu && (
                <Collapse in={isExpand === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem) => (
                      <ListItemButton
                        key={subItem.id}
                        component="a"
                        href={subItem.route}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
