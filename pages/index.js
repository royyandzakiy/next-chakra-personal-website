import Head from 'next/head'
import Container from '../components/Container'
import { 
    Text,
    useColorMode,
    Stack,
    Heading,
    Flex
} from '@chakra-ui/react'

export default function Index() {
  const { colorMode } = useColorMode();
  const secondaryColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }
  return (
    <Container>
        <Head>
          <title>Home - Royyan A. Dzakiy</title>
        </Head>
        <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="0 auto 4rem auto"
            maxWidth="700px"
            px={2}
        >
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxWidth="700px"
                >
                <Heading mb={2}>Hi, I'm Royyan Dzakiy</Heading>
                <Text color={secondaryColor[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Flex>
        </Stack>
    </Container>
  )
}
