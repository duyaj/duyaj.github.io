import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../pc-loader'

const LazyVoxelDog = dynamic(() => import('../pc'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jonathan's Homepage" />
        <meta name="author" content="Jonathan Duya" />
        <meta name="author" content="duyaj" />
        <meta property="og:site_name" content="Jonathan Duya" />
        <meta name="og:title" content="Jonathan Duya" />
        <meta property="og:type" content="website" />
        <title>Jonathan Duya - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
