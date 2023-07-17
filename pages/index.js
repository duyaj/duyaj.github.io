import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer based in Irvine, California!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jonathan Duya
          </Heading>
          <p>Computer Science & Engineering Undergraduate at UC Irvine</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jonathan.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Jonathan is an undergraduate student and software developer based in Irvine, California with a
          passion for building digital services and applications to suit his personal interests. He has an aptitude
          for the development process, from planning and designing to releasing it for the world to see. Outside of the
          computer world, Jonathan loves to thrift and dabble into the fashion industry. Currently, he is working on his
          product called{' '}
          <Link as={NextLink} href="/portfolio/mira" passHref scroll={false}>
            Mira
          </Link>
          , a virtual assistant that simplifies your wardrobe.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in San Diego, California.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Began the Bachelor&apos;s Program in the Donald Bren School of Information and Computer Sciences and the Henry Samueli School of Engineering at the University of California, Irvine.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Worked at UC Irvine Donald Bren School of Information and Computer Sciences.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
        Basketball, Cooking, Graphic Design, Fashion, Music, Photography, Reading, Tennis, Thrifting, Traveling, Video Games
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/duyaj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @duyaj
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
  
)


export default Home
export { getServerSideProps } from '../components/chakra'
