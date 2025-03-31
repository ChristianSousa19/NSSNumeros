import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Translator from "../i18n/Translator";
import Logo from "../../image/INFO_TI_logos8.png";
import "./Sidebar.css";

const drawerWidth = 250;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "#031535",
}));

const menuItems = [
  { id: "1", name: <Translator path="Menu" />, route: "/home" },
  {
    id: "4",
    name: "Transações de TI",
    isSubmenu: true,
    submenu: [
      {
        id: "4-1",
        name: "Processamento e Armazenamento",
        route: "/transacoes-de-TI/Processamento-e-Armazenamento/Processamento",
      },
      {
        id: "4-2",
        name: "Connectividade",
        route: "/transacoes-de-TI/conectividade/Conectividade",
      },
      {
        id: "4-3",
        name: "Atendimento",
        route: "/transacoes-de-TI/Atendimento/Atendimento",
      },
      {
        id: "4-4",
        name: "Ambiente de Trabalho",
        route: "/transacoes-de-TI/Ambiente de trabalho/Ambiente",
      },
      {
        id: "4-5",
        name: "Colaboração",
        route: "/transacoes-de-TI/Colaboracao/Colaboracao",
      },
      {
        id: "4-6",
        name: "Telefonia",
        route: "/transacoes-de-TI/Telefonia/Telefonia",
      },
    ],
  },
  {
    id: "5",
    name: "Grandes Movimentos",
    isSubmenu: true,
    submenu: [
      { id: "5-1", name: "Nuvem", route: "/Grandes movimentos/Nuvem/Nuvem" },
      { id: "5-2", name: "BaaS", route: "/Grandes movimentos/BAAS/BAAS" },
      { id: "5-3", name: "Pix", route: "/Grandes movimentos/PIX/Pix" },
      { id: "5-4", name: "Low Code", route: "/Grandes movimentos/Low Code/lowcode" },
      {
        id: "5-5",
        name: "Canais Digitais",
        isSubmenu: true,
        submenu: [
          { id: "5-5-1", name: "Canais Digitais", route: "/Grandes movimentos/Canais Digitais/Canais" },
          { id: "5-5-2", name: "Canais PF", route: "/Grandes movimentos/Canais Digitais/CanaisPF" },
          { id: "5-5-3", name: "Canais PJ", route: "/Grandes movimentos/Canais Digitais/CanaisPJ" },
          { id: "5-5-4", name: "Whatsapp", route: "/Grandes movimentos/Canais Digitais/Whatsapp" },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Governança e Gestão",
    isSubmenu: true,
    submenu: [
      { id: "6-1", name: "Gerenciamento de Serviço", route: "/Governança-e-Gestao/Gerenciamento-de-Serviços/Gerenciamento" },
      { id: "6-2", name: "Investimento em TI", route: "/Governança-e-Gestao/Investimento-de-TI/Investimento" },
      { id: "6-3", name: "Pessoas", route: "/Governança-e-Gestao/Pessoas/Pessoas" },
      { id: "6-4", name: "Riscos", route: "/Governança-e-Gestao/Riscos/Riscos" },
      { id: "6-5", name: "ASG", route: "/Governança-e-Gestao/ASG/ASG" },
      { id: "6-6", name: "Portfólio", route: "/Governança-e-Gestao/Portfolio/Portfolio" },
      { id: "6-7", name: "Premiações e Certificações", route: "/Governança-e-Gestao/Premiacoes-e-certificacoes/Premiacoes" },
    ],
  },
  {
    id: "7",
    name: "Tecnologias Disruptivas",
    isSubmenu: true,
    submenu: [
      { id: "7-1", name: "LINK", route: "/Tecnologias Disruptivas/Tecnologias" },
    ],
  },
  { id: "2", name: "Sobre", route: "/Sobre" },
  { id: "3", name: "Contato", route: "/Contato" },
];

const Sidebar = ({ open }) => {
  // Inicia com os estados vazios, sem forçar Home como ativo
  const [expandedMenus, setExpandedMenus] = React.useState({});
  const [activeItem, setActiveItem] = React.useState({});

  const handleClickMenu = (id, level, event) => {
    if (event && event.preventDefault) event.preventDefault();
    setExpandedMenus((prev) => {
      const newState = { ...prev };
      if (newState[level] === id) {
        delete newState[level];
        Object.keys(newState).forEach((lvl) => {
          if (parseInt(lvl) > level) delete newState[lvl];
        });
      } else {
        newState[level] = id;
        Object.keys(newState).forEach((lvl) => {
          if (parseInt(lvl) > level) delete newState[lvl];
        });
      }
      return newState;
    });
  };

  const setActiveAtLevel = (level, id) => {
    setActiveItem((prev) => {
      const newActive = { ...prev, [level]: id };
      Object.keys(newActive).forEach((lvl) => {
        if (parseInt(lvl) > level) delete newActive[lvl];
      });
      return newActive;
    });
  };

  const renderMenu = (items, level = 0) =>
    items.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              if (item.isSubmenu) {
                handleClickMenu(item.id, level, e);
                setActiveAtLevel(level, item.id);
              } else {
                setActiveAtLevel(level, item.id);
                setExpandedMenus((prev) => {
                  const newState = {};
                  Object.keys(prev).forEach((lvl) => {
                    if (parseInt(lvl) < level) newState[lvl] = prev[lvl];
                  });
                  return newState;
                });
              }
            }}
            component={item.route && !item.isSubmenu ? Link : "div"}
            to={item.route && !item.isSubmenu ? item.route : undefined}
            sx={{
              pl: level * 2 + 1,
              color: "white",
              backgroundColor: activeItem[level] === item.id ? "#0d47a1" : "transparent",
              "&:hover": { backgroundColor: "#ADD8E6" },
            }}
          >
            {item.icon && (
              <ListItemIcon sx={{ color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.name} sx={{ color: "inherit" }} />
            {item.isSubmenu &&
              (expandedMenus[level] === item.id ? (
                <ExpandLess sx={{ color: "white" }} />
              ) : (
                <ExpandMore sx={{ color: "white" }} />
              ))}
          </ListItemButton>
        </ListItem>
        {item.isSubmenu && (
          <Collapse in={expandedMenus[level] === item.id} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenu(item.submenu, level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#031535",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <div className="logo" style={{ marginLeft: "20px" }}>
          <img src={Logo} alt="logo" style={{ width: "150px", height: "auto" }} />
        </div>
      </DrawerHeader>
      <Box sx={{ overflow: "auto" }}>
        <List>{renderMenu(menuItems)}</List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
