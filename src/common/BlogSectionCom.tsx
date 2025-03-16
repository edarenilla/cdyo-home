import React from 'react'
type Props = {
    category: string
    title: string
    link: string
    image: string
    lec: number
}
const BlogSectionCom: React.FC<Props> = ( {category, title, link, lec, image} ) => {
    
  return (
   
    <div className='blog--section__post__img'
         onClick={() => window.open(link, "_blank")}>
        <img src= {image} alt="" />
        <div className="blog--section__post__text">
            <span>{category}</span>
            <h3> {title} </h3>
            <small> {lec} MIN. LECTURA</small>
        </div>
    </div>
    

  )
}

export default BlogSectionCom