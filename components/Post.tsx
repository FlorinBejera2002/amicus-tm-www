import styled from '@emotion/styled'
import { Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image, { ImageLoaderProps } from 'next/image'
import { useState } from 'react'

import { BlogPost } from '../pages/api/cms-api'

import DateFormatter from './DateFormatter'

interface Props {
  post: BlogPost
}

export const Post = (props: Props) => {
  const { t } = useTranslation('common')
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

          <Link onClick={() => setShowContent((prev) => !prev)}>{t('blog.read_more')}</Link>
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

  @media (max-width: 760px) {
    flex-direction: column;
  }
`

const DescriptionWrapper = styled.div`
  padding: 2rem;
  color: #fff;

  @media (max-width: 760px) {
    font-size: 0.8rem;
  }
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
