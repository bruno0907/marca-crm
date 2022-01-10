import Head from 'next/head'
import { useRouter } from 'next/router'

import { AuthWrapper } from '../../components/AuthWrapper'
import { Divider } from '../../components/Divider'
import { Header } from '../../components/Header'
import { Content } from '../../components/Content'
import { UsersList } from '../../components/pages/Users/UsersList'

import { useSearch, SearchInput } from '../../hooks/useSearch'

import {    
  Button,
  HStack,
  Icon,
  Stack,  
} from '@chakra-ui/react'

import { FiPlus } from 'react-icons/fi'

export default function Users() {     
  const router = useRouter()    
  
  const { 
    toSearch,
    clearSearch,
    handleSearch,
    searchValue,
    searchInputRef 
  } = useSearch()

  return (
    <>
      <Head>
        <title>Clientes | MARCA</title>        
      </Head>
      <AuthWrapper>        
        <Header title="Clientes"/>
        <Divider />
        <Content>
          <Stack spacing={6}>
            <HStack spacing={3}>
              <SearchInput
                ref={searchInputRef}
                placeholder="Pesquise pelo nome do cliente..."
                onClearSearch={clearSearch}
                hasSearch={!!searchValue}
                value={searchValue}
                onChange={handleSearch}
              />      
              <Button
                colorScheme="blue"
                leftIcon={<Icon as={FiPlus}/>}
                onClick={() => router.push('/users/new-user')}
                flexShrink={0}
              >
                Novo cliente
              </Button>
            </HStack>            
            <UsersList filterValue={toSearch}/>
          </Stack>
        </Content>        
      </AuthWrapper>
    </>
  )
}
