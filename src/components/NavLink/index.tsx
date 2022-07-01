import { AnchorHTMLAttributes, ElementType } from "react"
import { ActiveLink } from "./ActiveLink"
import { Container, Icon, Text } from "./styles"

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType,
  children: string,
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Container {...rest}>
        <div><Icon as={icon} /></div>
        <Text>{children}</Text>
      </Container>
    </ActiveLink>
  )
}