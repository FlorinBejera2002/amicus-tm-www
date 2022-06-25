import Image, { ImageLoaderProps } from 'next/image'

import { BlogPost } from '../lib/cms-api'

import DateFormatter from './DateFormatter'

interface Props {
  post: BlogPost
}

export const Post = (props: Props) => {
  const post = props.post
  // const imageSource = process.env.NEXT_PUBLIC_CMS + '/' + post.images[0].path
  const myLoader = ({ src }: ImageLoaderProps) => `https://cms-backend.ariseforchrist.com/${src}`

  return (
    <div>
      <div className="mb-5">
        <Image
          alt="Failed to load image preview"
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
          height="400px"
          loader={myLoader}
          src={post.images[0].path}
          width="500px"
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">{post.title}</h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={post.creation_date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.text.substring(0, 300) + '...' }} />
    </div>
  )
}
