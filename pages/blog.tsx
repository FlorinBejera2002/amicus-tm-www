import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import type { NextPage } from 'next'
import Fade from 'react-reveal/Fade'

import { HeaderBlog } from '../components/HeaderBlog'
import { Post } from '../components/Post'

import { BlogPostResponse, fetchBlogPosts } from './api/cms-api'

export const getStaticProps = async () => {
  const blogPostResponse = await fetchBlogPosts()

  return { props: blogPostResponse }
}

type Props = BlogPostResponse

const Blog: NextPage<Props> = (props) => {
  console.log('***props:', props)

  return (
    <Container>
      <HeaderWrapper>
        <HeaderBlog />
      </HeaderWrapper>
      <Fade bottom>
        <Message>
          <Heading>Blog</Heading>
        </Message>
      </Fade>

      <Content>
        {!props.posts ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PostsContainer>
            {props.posts?.map((post) => (
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

  @media (max-width: 360px) {
    font-size: 1rem;
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
