import * as React from "react";
import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Box,Collapse,} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess"; // Ícone para expandir menus.
import ExpandMore from "@mui/icons-material/ExpandMore"; // Ícone para recolher menus.
import { styled } from "@mui/material/styles"; // Para estilizar componentes.


import Translator from "../i18n/Translator";


// Definições adicionais necessárias
const drawerWidth = 240; // Largura da barra lateral

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItems = [
  { id: "1", name: <Translator path="menu.Home" /> },
  { id: "2", name: "Sobre", route: "/Sobre",},
  { id: "3", name: "Contact", route: "/Contato",},
  {
    id: "4",
    name: "Transações de TI",
    
    isSubmenu: true,
    submenu: [
      { id: "4-1", name: "Processamento e Armazenamento", route: "/transacoes-de-TI/Processamento-e-Armazenamento/Processamento" },
      { id: "4-2", name: "Connectividade", route: "/transacoes-de-TI/conectividade/Conectividade" },
      { id: "4-3", name: "Atendimento", route: "/transacoes-de-TI/Atendimento/Atendimento" },
      { id: "4-4", name: "Ambiente de Trabalho", route: "/transacoes-de-TI/Ambiente de trabalho/Ambiente" },
      { id: "4-5", name: "Colaboração", route: "/transacoes-de-TI/Colaboracao/Colaboracao" },
      { id: "4-6", name: "Telefonia", route: "/transacoes-de-TI/Telefonia/Telefonia" },
    ],
  },
  {
    id: "5",
    name: "Grandes Movimentos",
    
    isSubmenu: true,
    submenu: [
      { id: "5-1", name: "Nuvem", route: "/Grandes movimentos/Nuvem/Nuvem" },
      { id: "5-2", name: "BaaS", route: "/Grandes movimentos/BASS/BASS" },
      { id: "5-3", name: "Pix", route: "/Grandes movimentos/PIX/Pix" },
      { id: "5-4", name: "Low Code", route: "/Grandes movimentos/Low Code/lowcode" },
      {
        id: "5-5",
        name: "Canais Digitais",
        isSubmenu: true,
        submenu: [
          { id: "5-5-1", name: "Canis Digitais", route: "/Grandes movimentos/Canais Digitais/" },
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
      { id: "6-1", name: "Gerenciamento de Serviço", route: "/Governança-e-Gestao/Gerenciamento-de-Serviços/Gerencimento" },
      { id: "6-2", name: "Investimento em TI", route: "/Governança-e-Gestao/Investimento-de-TI/Investimento" },
      { id: "6-3", name: "Pessoas", route: "/Governança-e-Gestao/Pessoas/Pessoas" },
      { id: "6-4", name: "Riscos", route: "/Governança-e-Gestao/Riscos/Riscos" },
      { id: "6-5", name: "ASG", route: "/Governança-e-Gestao/ASG/ASG" },
      { id: "6-6", name: "Portfólio", route: "/Governança-e-Gestao/Portfolio/Portifolio" },
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
          <img src="/logo192.png" alt="Logo" />
        </div>
      </DrawerHeader>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClickMenu(index)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
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
