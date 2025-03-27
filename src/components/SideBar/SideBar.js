import * as React from "react";
import {Drawer,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Box,styled,Collapse,} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess"; // Ícone para expandir menus.
import ExpandMore from "@mui/icons-material/ExpandMore"; // Ícone para recolher menus.
import { styled } from "@mui/material/styles"; // Para estilizar componentes.
import Logo from "caminho/para/seu/logo.svg"; // O arquivo de logo que você está usando.
import Translator from "../i18n/Translator";

const menuItems = [
  { id: "1",  name: <Translator path="menu.home" />, icon: Dashboard },
  { id: "2", name: "Sobre", route: "/Sobre", icon: Receitas },
  { id: "3", name: "Contact", route: "/Contato", icon: Pagamentos },
  {
    id: "4",
    name: "Transações de TI",
    icon: Acessos,
    isSubmenu: true,
    submenu: [
      { id: "4-1", name: "Processamento e Armazenamento", route: "/transacoes-de-TI/processamento-e-armazenamento/processamento" },
      { id: "4-2", name: "Connectividade", route: "/transacoes-de-TI/conectividade/conectividade" },
      { id: "4-3", name: "Atendimento", route: "/transacoes-de-TI/Atendimento/atendimento" },
      { id: "4-4", name: "Ambiente de Trabalho", route: "/transacoes-de-TI/Ambiente de trbalho/ambiente" },
      { id: "4-5", name: "Colaboraçao", route: "/transacoes-de-TI/Colaboraçao/colaboracao" },
      { id: "4-6", name: "Telefonia", route: "/transacoes-de-TI/Telefonia/telefonia" },
    ],
  },
  {
    id: "5",
    name: "Grandes Movimentos",
    icon: Clientes,
    isSubmenu: true,
    submenu: [
      { id: "5-1", name: "Nuvem", route: "/Grandes movimentos/Nuvem/nuvem" },
      { id: "5-2", name: "BaaS", route: "/Grandes movimentos/BASS/BASS" },
      { id: "5-3", name: "Pix", route: "/Grandes movimentos/PIX/pix" },
      { id: "5-4", name: "Low Code", route: "/Grandes movimentos/Low Code/lowcode" },
      {
        id: "5-5",
        name: "Canais Digitais",
        isSubmenu: true,
        submenu: [
          { id: "5-5-1", name: "Canis Digitais", route: "/Grandes movimentos/Canais Digitais/" },
          { id: "5-5-2", name: "Canais PF", route: "/Grandes movimentos/Canais Digitais/canaisPF" },
          { id: "5-5-3", name: "Canais PJ", route: "/Grandes movimentos/Canais Digitais/canaisPJ" },
          { id: "5-5-4", name: "Whatsapp", route: "/Grandes movimentos/Canais Digitais/whtsapp" },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Governança e Gestão",
    icon: Configuracao,
    isSubmenu: true,
    submenu: [
      { id: "6-1", name: "Gerenciamento de Serviço", route: "/Gorvernança-e-Gestao/Gerenciamento-de-Serviços/gerencimento" },
      { id: "6-2", name: "Investimento rm TI", route: "/Gorvernança-e-Gestao/Investimento-de-TI/investimento" },
      { id: "6-3", name: "Pessoas", route: "/Gorvernança-e-Gestao/Pessoas/pessoas" },
      { id: "6-4", name: "Riscos", route: "/Gorvernança-e-Gestao/Riscos/riscos" },
      { id: "6-5", name: "ASG", route: "/Gorvernança-e-Gestao/ASG/ASG" },
      { id: "6-6", name: "Portifolio", route: "/Gorvernança-e-Gestao/Portfolio/portifolio" },
      { id: "6-7", name: "Premiações e Certificações", route: "/Gorvernança-e-Gestao/Premiaçoes-e-certificaçoees/´premiacoes" },
    ],
  },
  {
    id: "7",
    name: "Tecnologias Disruptivas",
    icon: Display,
    isSubmenu: true,
    submenu: [
      { id: "7-1", name: "LINK", route: "/Tecnologias Disruptivas/tecnologias" },
      
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
