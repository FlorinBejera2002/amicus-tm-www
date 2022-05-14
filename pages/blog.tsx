import type { NextPage } from 'next'
import { BlogPosts, BlogPost, fetchBlosPosts } from '../lib/cms-api'
import Image from 'next/image'
import DateFormatter from '../components/DateFormatter'

type Props = {
  posts: BlogPosts
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div style={{ marginTop: '80px' }}>
      <h3 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h3>
      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.posts.map((post) => <BlogPost post={post} key={post.id} />)}
      </div>
    </div>

  )

}

const BlogPost = ({ post }: { post: BlogPost }) => {
  const toSrc = (post: BlogPost) => process.env.NEXT_PUBLIC_CMS + '/' + post.images[0].path


  return (
    <div>
      <div className="mb-5">
        <Image src={toSrc(post)}
          alt="Failed to load image preview"
          width="500px" height="400px"
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        {post.title}
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={post.creation_date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.text.substring(0, 300) + '...' }} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetchBlosPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}

export default Blog
