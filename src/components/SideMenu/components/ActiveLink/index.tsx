import { ElementType } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import {
  Link as ChakraLink,
  Text,
  Icon,  
  LinkProps,  
} from '@chakra-ui/react'

interface ActiveLinkProps extends LinkProps {
  icon: ElementType;
  label: string;
  href: string;
}

const ActiveLink = ({ icon, label, href, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter()

  const isActive = asPath.startsWith(href)

  return (
    <Link href={href} passHref>
      <ChakraLink
        display="flex"
        px="8"
        py="4"
        alignItems="center"
        justifyContent="flex-start"
        fontWeight="bold"        
        borderLeftWidth="3px"        
        borderRightWidth="3px"
        borderColor="gray.50"
        borderRightColor={isActive && "blue.500"}         
        _hover={{ color: "blue.500", borderRightColor: "blue.500" }}
        _focus={{ boxShadow: 'none', color: "blue.500", borderRightColor: "blue.500" }}
        {...rest}
      >        
        <Icon as={icon} fontSize="xl" mr="4" color={isActive && "blue.500"}/>        
        <Text color={isActive && "blue.500"}>
          {label}
        </Text>        
      </ChakraLink>
    </Link>
  );
};

export { ActiveLink };
