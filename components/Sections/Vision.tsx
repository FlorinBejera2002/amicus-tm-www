import styled from '@emotion/styled'
import Image from 'next/image'

import pic from '../../public/hero_background.jpeg'

export const Vision = () => (
  <Container>
    <Heading>VIZIUNEA</Heading>

    <Content>
      <Row>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a!
        </Left>

        <VerticalLine />

        <Right>
          <Image alt="picture" height={300} src={pic} width={500} />
        </Right>
      </Row>

      <Row>
        <Left>
          <Image alt="picture" height={300} src={pic} width={500} />
        </Left>

        <VerticalLine />

        <Right>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a!
        </Right>
      </Row>

      <Row>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a!
        </Left>

        <VerticalLine />

        <Right>
          <Image alt="picture" height={300} src={pic} width={500} />
        </Right>
      </Row>

      <Row>
        <Left>
          <Image alt="picture" height={300} src={pic} width={500} />
        </Left>

        <VerticalLine />

        <Right>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a!
        </Right>
      </Row>

      <Row>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Est ab nemo excepturi soluta accusamus iure odio nisi
          voluptatibus dolorum inventore iste, earum laborum, nulla odit provident incidunt ea vitae a!
        </Left>

        <VerticalLine />

        <Right>
          <Image alt="picture" height={300} src={pic} width={500} />
        </Right>
      </Row>
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
  background: #edf2f4;
`

const Heading = styled.div`
  color: #e9302e;
  font-size: 1rem;
  padding-bottom: 3rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 7rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  padding: 2rem 7rem;
`

const VerticalLine = styled.div`
  border-left: 3px solid #e9302e;
  border-radius: 4px;
  height: 15rem;
`
