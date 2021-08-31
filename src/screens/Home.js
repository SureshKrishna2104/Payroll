import React, { Component } from "react";
import styled from "styled-components";
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 270px;
  background-color: #252529;
  color: #fff;
  font-family: "Open Sans", sans-serif;
`;
const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;
const SidebarMenuItem = styled.li`
  height: 40px;
  width: 100%;
`;
const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;
const SidebarMenuItemLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
`;
class Home extends Component {
  render() {
    return (
      <SidebarContainer>
        <SidebarMenu>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Dashboard</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Service Alerts</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Customer Tickets</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Archive</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Library</SidebarMenuItemLabel>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Icon></Icon>
            <SidebarMenuItemLabel>Deliveries</SidebarMenuItemLabel>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
    );
  }
}
export default Home;
