import Head from 'next/head'
import { useRouter } from 'next/router'

import { useSupplierQuery } from '../../../hooks/useSupplierQuery'

import { Authenticated } from '../../../components/Layout/Authenticated'
import { Divider } from '../../../components/Layout/Divider'
import { Header } from '../../../components/Header'
import { SupplierInformation } from './components/SupplierInformation'
import { AddressesInformation } from '../../../components/AddressInformation'

import { VStack, Button } from '@chakra-ui/react'

import { FiPrinter } from 'react-icons/fi'

export default function Supplier() {  
  const router = useRouter()
  const id = router.query.id
  
  const supplier = useSupplierQuery(String(id))

  const handlePrintUser = () => router.push(`/suppliers/${id}/supplier-to-print`)  

  return (
    <>
      <Head>
        <title>MARCA | {supplier.data?.nome}</title>
      </Head>
      <Authenticated>

        <Header withGoBack title={supplier.data?.nome}>
          <Button
            colorScheme="blue"
            leftIcon={<FiPrinter />}            
            onClick={handlePrintUser}
          >Imprimir</Button>

        </Header>

        <Divider />
        
        <VStack spacing={3} align="flex-start" >
          <SupplierInformation supplierId={id}/>
          <AddressesInformation userId={id}/>          
        </VStack>

      </Authenticated>
    </>
  )
}
