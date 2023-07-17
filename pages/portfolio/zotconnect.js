import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Mira">
      <Container>
        <Title>
          ZotConnect <Badge>2023-</Badge>
        </Title>
        <P>
        A mobile application that allows students to easily find clubs, groups, and organizations. Coming soon.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://zotconnect.uci.edu/">
            https://zotconnect.uci.edu/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Coming Soon</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://www.linkedin.com/in/jonathanduya">
              Coming Soon <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/zotconnect.png" alt="ZotConnect" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  