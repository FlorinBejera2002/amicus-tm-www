import styled from '@emotion/styled'
import Image from 'next/image'

import profile from '../../public/profile-pic.jpg'

export const About = () => (
  <Container>
    <Heading>DESPRE NOI</Heading>

    <Content>
      <Left>
        <Message>
          Have an idea or a concept that really excite you? Let's turn that idea into reality. Shoot me a message.
        </Message>

        <Header>Profile</Header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, distinctio dolorem nostrum aliquam
          obcaecati quibusdam ex minima repudiandae rem accusamus pariatur repellat ab. Laborum porro aliquid at,
          dignissimos inventore iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, distinctio
          dolorem nostrum aliquam obcaecati quibusdam ex minima repudiandae rem accusamus pariatur repellat ab. Laborum
          porro aliquid at, dignissimos inventore iure.
        </p>
      </Left>
      <Right>
        <Image alt="picture" src={profile} />
      </Right>
    </Content>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 15rem;
  padding-right: 15rem;
  background: #e0e0e0;
`

const Heading = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
`

const Message = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 6rem;
`

const Content = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  padding-left: 7rem;
`

const Header = styled.div`
  font-size: 2rem;
  padding-bottom: 1rem;
`
