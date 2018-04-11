import React from 'react'
import Head from '../src/components/head'
// import "../src/style/index.styl"
import { Rate } from 'antd'

export default class extends React.Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <Head></Head>
        <h1 style={{marginTop: 10 + 'px'}}>主页么么哒!!!</h1>
        <Rate />
      </div>
    )
  }
}