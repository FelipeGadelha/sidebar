import { ReactNode, useState } from "react"
import { Header } from "../Header"
import { Sidebar } from "../Sidebar"
import { Grid } from "./styles"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isActive, setIsActive] = useState()
  return (
    <Grid>
      <Sidebar/>
      <Header/>
      {children}
    </Grid>
  )
}