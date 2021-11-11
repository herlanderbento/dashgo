import { ElementType, ReactNode } from "react";
import { Link, Icon, Text, LinkProps as ChakraLinks } from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinks {
  icon: ElementType;
  children?: ReactNode;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
