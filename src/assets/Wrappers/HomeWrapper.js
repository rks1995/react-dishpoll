import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5em auto;
  padding: 2em;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`
