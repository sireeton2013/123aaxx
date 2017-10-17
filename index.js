import React from 'react'
import style from 'styled-components'

const App = style.div`
  padding:10px;
  background-color:#336699;
  color:#fff;
`

export default class Index extends React.Component{
  render(){
    return(
      <App>
        <p>This is pull request website</p>
        <p>This is React Hello can you hear me ???</p>
      </App>
    )
  }
}
