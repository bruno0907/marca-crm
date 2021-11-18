import Head from 'next/head'
import { useRouter } from 'next/router'

import { useReactToPrint } from 'react-to-print'

import { useUserQuery } from '../../../hooks/useUserQuery'
import { useUserOrdersQuery } from '../../../hooks/useUserOrdersQuery'

import { Authenticated } from '../../../components/Layout/Authenticated'
import { Divider } from '../../../components/Layout/Divider'
import { Header } from '../../../components/Header'
import { AddressesInformation } from '../../../components/AddressInformation'
import { Content } from '../../../components/Layout/Content'

import { UserInformation } from './components/UserInformation'
import { UserOrders } from './components/UserOrders'

import {     
  Center,
  Spinner,
  VStack,
  Button,  
} from '@chakra-ui/react'

import { FiPrinter } from 'react-icons/fi'

export default function User() {  
  const router = useRouter()
  const id = router.query.id  
  
  const user = useUserQuery(id)  
  const orders = useUserOrdersQuery(String(id))

  return (
    <>
      <Head>
        <title>MARCA | {user.data?.data.nome}</title>
      </Head>

      <Authenticated>

        <Header withGoBack title={user.data?.data.nome}>
          <Button 
            colorScheme="blue" 
            leftIcon={<FiPrinter />} 
            onClick={() => router.push(`/users/${id}/user-to-print`)}
          >Imprimir</Button>
        </Header>

        <Divider />

        { !user.data?.data && !orders.data ? (
          <Content>
            <Center>
              <Spinner size="lg" color="blue.500"/>
            </Center>
          </Content>
        ) : (
          <VStack spacing={3} align="flex-start">
            <UserInformation userId={id}/>
            <AddressesInformation userId={id}/>
            <UserOrders userId={id}/>          
          </VStack>
        )}
        
      </Authenticated>

    </>
  )
}
