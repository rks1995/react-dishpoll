import styled from 'styled-components'

const DishWrapper = styled.div`
  /* width: 80%; */
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  justify-content: center;
  align-content: center;
  gap: 1.5rem;
  margin-top: 2em;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 0.5fr);
  }
`
export { DishWrapper }
