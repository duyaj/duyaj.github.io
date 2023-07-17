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
        Mira <Badge>2023-</Badge>
      </Title>
      <P>
      A virtual assistant that implements machine learning that simplifies your wardrobe. Coming soon.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.miravirtualassistant.com/">
          https://www.miravirtualassistant.com/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/mira.png" alt="Mira" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
