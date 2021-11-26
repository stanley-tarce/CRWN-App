import React from 'react'
import './preview-collection.scss'
import ItemCollection from '../collection-item/item-collection'
function PreviewCollection({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.filter((item, index) => index < 4).map(({ id, ...others }) => (
          <ItemCollection key={id} {...others} />
        ))}
      </div>
    </div>
  )
}

export default PreviewCollection
