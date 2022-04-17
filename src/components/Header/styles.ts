import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;
    background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const RedirectionContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TitleHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);;
  background-clip: text;
  -webkit-background-clip: text;
`