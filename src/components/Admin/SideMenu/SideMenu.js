import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";

import "./SideMenu.scss";
export const SideMenu = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
};

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();
  
  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
        <Icon name="home" />
        Pedidos
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/admin/tables"}
        active={pathname === "/admin/tables"}
      >
        <Icon name="table" />
        Mesas
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/admin/payments-history"}
        active={pathname === "/admin/payments-history"}
      >
        <Icon name="history" />
        Historial de pagos
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/admin/category"}
        active={pathname === "/admin/category"}
      >
        <Icon name="folder" />
        Categorias
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={"/admin/products"}
        active={pathname === "/admin/products"}
      >
        <Icon name="cart" />
        Productos
      </Menu.Item>

      {auth.dataUser.is_staff && (
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users"}
        >
          <Icon name="users" />
          Usuarios
        </Menu.Item>
      )}
    </Menu>
  );
}
