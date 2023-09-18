import React, { useState } from 'react'
import  {Rating, ThinStar}  from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#F89828',
  inactiveFillColor: '#B3B7BC'
}

const RatingComponents = () => {

  const [rating, setRating] = useState(0)

  return (
    <Rating style={{ maxWidth: 78 }} value={rating} onChange={setRating} itemStyles={myStyles} />
  )
}

export default RatingComponents