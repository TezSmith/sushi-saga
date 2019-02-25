import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { banana, eaten, eatSushi } = props
  console.log("This is an single sushi (banana): ", banana)

  return (
    // <div></div>
    <div className="sushi">
      <div className="plate"
           onClick={() => eatSushi(banana)}>
        {
          /* Tell me if this sushi has been eaten! */
          eaten.includes(banana) ? null : <img src={banana.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {banana.name} - ${banana.price}
      </h4>
    </div>
  )
}

export default Sushi
