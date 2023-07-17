import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPosition from '../public/images/contents/iseb.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Starting a new position"
            thumbnail={thumbPosition}
            href="https://www.linkedin.com/posts/jonathanduya_i-am-excited-to-announce-that-i-am-starting-activity-7071650838464638976-eHo7?utm_source=share&utm_medium=member_desktop"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
