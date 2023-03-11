/* import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";

import "./TopMenu.scss";
export const TopMenu = () => {
  const {auth,logout} =useAuth()
  
  const renderNane = () => {
      if(auth.dataUser?.first_name && auth.dataUser?.last_name){
          return `${auth.dataUser.first_name} ${auth.dataUser?.last_name}`
      }

      return auth.dataUser.email
  }

  return (
    <Menu  className="top-menu-admin">
      <Menu.Item>
        <p style={{color:'black'}}>Icard Admin</p>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <p>Hola {renderNane()}</p>
        </Menu.Item>
        <Menu.Item onClick={logout}> 
          <Icon name="sign-out"/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
 */

import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import { useAuth } from "../../../hooks";
import "./TopMenu.scss";

export function TopMenu() {
  const {auth,logout} =useAuth()
  
  const renderNane = () => {
      if(auth.dataUser?.first_name && auth.dataUser?.last_name){
          return `${auth.dataUser.first_name} ${auth.dataUser?.last_name}`
      }

      return auth.dataUser.email
  }
  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <p>iCard Admin</p>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>Hola, {renderNane()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}