import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: hidden;
`

export const RowHeader = styled.li`
  border-radius: 5px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  width: 800px;
  background-color: lightgrey;
`

export const RowContainer = styled(RowHeader)`
  background-color: aliceblue;
  opacity: 0.6;
`

export const TableHeader = styled.li`
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`

export const TableContainer = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  padding: 25px 30px;
  border-radius: 5px;
  background-color: lightgrey;
  font-size: 14px;
  text-transform: uppercase;
`

export const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  background-color: #3B3B98;
  text-transform: uppercase;
  padding: 8px;
`

export const TD = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  text-transform: uppercase;
  padding: 8px;
`

export const TextSpan = styled.span`
  text-align: right;
`

export const Title = styled.h1`
  color: #4b6cb7;
`