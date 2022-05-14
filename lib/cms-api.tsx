export async function fetchBlosPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch(process.env.CMS_HOST + '/posts?type=article')
  const data = await res.json()

  return data as BlogPosts
}

export type BlogPosts = {
  totalCount: number
  posts: BlogPost[]
}

export type BlogPost = {
  id: number
  type: 'article'
  creation_date: string
  title: string
  text: string
  images: ImageRef[]
}

export type ImageRef = {
  imageId: number
  path: string
}