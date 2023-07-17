import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMira from '../public/images/works/mira.png'
import thumbZotConnect from '../public/images/works/zotconnect.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="zotconnect" title="ZotConnect" thumbnail={thumbZotConnect}>
            Find your community at UC Irvine
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="mira" title="Mira" thumbnail={thumbMira}>
            Simplify your wardrobe
          </WorkGridItem>
        </Section>
        </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
