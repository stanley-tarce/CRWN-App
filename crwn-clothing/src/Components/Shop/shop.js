import React, { Component } from 'react'
import { SHOP_DATA } from './SHOP_DATA'
import PreviewCollection from '../Preview/preview-collection'



export class ShopPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...others }) => (
          <PreviewCollection key={id} {...others} />

        ))}
      </div>
    )
  }
}


export default ShopPage
