import type { NextPage } from 'next'
import { BlogPosts, BlogPost, fetchBlosPosts } from '../lib/cms-api'

type Props = {
  posts: BlogPosts
}

const Blog: NextPage<Props> = ({ posts }) => {
  console.log('Posts', posts)
  return (
    <div style={{marginTop: '100px'}}>
      <div>{posts.totalCount}</div>
      {posts.posts.map(BlogPost)}
    </div>
  )

}

const BlogPost = (post: BlogPost) => {
  return <div>{post.title}</div>
}

export async function getStaticProps() {
  const posts = await fetchBlosPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}

export default Blog
