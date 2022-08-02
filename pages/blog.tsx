import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Fade from 'react-reveal/Fade'

import { Header } from '../components/Header'
import { Post } from '../components/Post'

import { BlogPostResponse, fetchBlogPosts } from './api/cms-api'

interface StaticPropsType {
  locale: string
}
export const getStaticProps = async (props: StaticPropsType) => {
  const blogPostResponse = await fetchBlogPosts()
  const translations = await serverSideTranslations(props.locale, ['common'])

  return { props: { postResponse: blogPostResponse, ...translations } }
}

type Props = { postResponse: BlogPostResponse }

const Blog: NextPage<Props> = (props) => {
  const { t } = useTranslation('common')
  const posts = props.postResponse?.posts

  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Fade bottom>
        <Message>
          <Heading>{t('blog.title')}</Heading>
        </Message>
      </Fade>

      <Content>
        {!posts ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PostsContainer>
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </PostsContainer>
        )}
      </Content>
    </Container>
  )
}

export default Blog

const Container = styled.div`
  overflow: hidden;
  padding: 0 10rem;
  background-color: #000;

  @media (max-width: 390px) {
    padding: 0 2rem;
  }
`

const HeaderWrapper = styled.div`
  padding-top: 2.5rem;
`

const Message = styled.div`
  display: flex;
  align-items: center;
  margin: 0rem 4rem;
  padding-top: 8rem;
  padding-left: 5rem;
  max-width: 45%;

  @media (max-width: 1500px) {
    max-width: 55%;
  }

  @media (max-width: 1000px) {
    max-width: 65%;
  }

  @media (max-width: 390px) {
    padding: 0 2rem;
    margin: 0rem;
    padding-left: 0rem;
  }
`

const Heading = styled.div`
  color: #edf2f4;
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 1.257;
  padding-right: 3.2rem;
  margin-top: 0;

  @media (max-width: 1900px) {
    font-size: 3.8rem;
  }

  @media (max-width: 1500px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  display: flex;
  margin: 8rem 0rem;
`

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`
