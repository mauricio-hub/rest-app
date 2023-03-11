import React from "react";
import { SideMenu, TopMenu } from "../../components/Admin";
import { useAuth } from "../../hooks";
import { LoginAdmin } from "../../pages/Admin";
import "./AdminLayout.scss";

export const AdminLoyout = (props) => {
  const { children } = props;
  const { auth } = useAuth();

  //si el usuario no esta logueado retorna la vista para entrar
  if (!auth) return <LoginAdmin />;

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  );
};
