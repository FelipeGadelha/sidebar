import { useState } from "react";
import { NavLink } from "../NavLink";
import { Container, Logo } from "./styles";
import { TbLayoutDashboard } from "react-icons/tb";

export function Sidebar() {
  const [isActive, setIsActive] = useState(true)
  return (
    <Container isActive={isActive}>
      <Logo onClick={() => setIsActive(!isActive)}>sidebar</Logo>
      <NavLink icon={ TbLayoutDashboard } href="/">Home</NavLink>
      <NavLink icon={ TbLayoutDashboard } href="/dashboard">Dashboard</NavLink>
    </Container>
  )
}