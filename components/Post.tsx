import styled from '@emotion/styled'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import Image, { ImageLoaderProps } from 'next/image'
import { useState } from 'react'

import { BlogPost } from '../pages/api/cms-api'

import DateFormatter from './DateFormatter'

interface Props {
  post: BlogPost
}

export const Post = (props: Props) => {
  const post = props.post
  const [showContent, setShowContent] = useState(false)
  const myLoader = ({ src }: ImageLoaderProps) => `https://cms-backend.ariseforchrist.com/${src}`

  return (
    <Container>
      <Content>
        <Image
          alt="Failed to load image preview"
          className="shadow-small hover:shadow-medium transition-shadow duration-200"
          height="100px"
          loader={myLoader}
          src={post.images[0].path}
          width="150px"
        />

        <CardContent>
          <Title>{post.title}</Title>
          <Date>
            <DateFormatter dateString={post.creation_date} />
          </Date>

          <Link onClick={() => setShowContent((prev) => !prev)}>citește articolul...</Link>
        </CardContent>
      </Content>

      {showContent && (
        <DescriptionWrapper>
          <div dangerouslySetInnerHTML={{ __html: post?.text }} />
        </DescriptionWrapper>
      )}
    </Container>
  )
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  background: #121313;
`

const Content = styled.div`
  display: flex;
`

const DescriptionWrapper = styled.div`
  padding: 2rem;
  color: #fff;
`

const Title = styled(Typography)`
  font-size: 1.5rem;
  color: #edf2f4;
`

const Date = styled(Typography)`
  font-size: 0.6rem;
  color: #8d99ae;
`

const Link = styled.div`
  padding-top: 1rem;
  color: #666666;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  :hover {
    color: #edf2f4;
  }
`
