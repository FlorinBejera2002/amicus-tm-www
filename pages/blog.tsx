import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import type { NextPage } from 'next'

import { Post } from '../components/Post'

import { BlogPostResponse, fetchBlogPosts } from './api/cms-api'

export const getStaticProps = async () => {
  const blogPostResponse = await fetchBlogPosts()

  return { props: blogPostResponse }
}

type Props = BlogPostResponse

const Blog: NextPage<Props> = (props) => {
  return (
    <div style={{ marginTop: '80px' }}>
      <h3 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">More Stories</h3>

      {!props.posts ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
          {props.posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Blog
