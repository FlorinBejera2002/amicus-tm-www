// URLs
export const CMS_URL = process.env.NEXT_PUBLIC_CMS

// Types
export type BlogPostResponse = {
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

export enum Status {
  InProgress = 'InProgress',
  Complete = 'Complete',
}

export enum EvangelismCategory {
  Counseling = 'Counseling',
  SpiritualReconciliation = 'SpiritualReconciliation',
  EvangelismRequest = 'EvangelismRequest',
}

export type EvangelismRequest = {
  name: string
  email?: string
  mobile?: string
  address?: string
  age?: number
  occupation?: string
  otherdetails?: string
  religion?: string
  category?: EvangelismCategory
  status?: Status
}

// Apis
export const fetchBlogPosts = async () => {
  try {
    const response = await fetch(CMS_URL + '/posts?type=article')
    const blogPostResponse: BlogPostResponse = await response.json()

    return blogPostResponse
  } catch (error) {
    console.error(error)
    alert('Something happened while trying to get the posts')
  }
}

export const createER = async (er: EvangelismRequest) => {
  try {
    await fetch(CMS_URL + '/evangelism-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(er),
    })
  } catch (error) {
    console.error(error)
  }
}
