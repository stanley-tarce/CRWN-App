import React from 'react'
import './MenuItem.scss'
import { useNavigate } from 'react-router-dom'


function MenuItem({ title, imageUrl, size, linkUrl, match }) {
  console.log(match)
  const navigate = useNavigate()
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`/${linkUrl}`)}
    >
      <div className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </div>
      <div className={"content"}>
        <h1 className={"title"}>
          {title.toUpperCase()}
        </h1>
        <span className={'subtitle'}>
          SHOP NOW
        </span>
      </div>


    </div>
  )
}

export default (MenuItem)
