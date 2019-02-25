import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // The syntax below is called destructuring props
  const { sushis, eaten, eatSushi, getMore } = props
  console.log("These are the sushis in the container: ", sushis )
  console.log("Eaten sushi: ", eaten)


//PAY ATTENTION HERE!! DOUBLE RETURN
  let showSushi = () => {
    return sushis.map(sushi => {
      return <Sushi key={sushi.id} banana={sushi} eaten={eaten} eatSushi={eatSushi}/>
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {showSushi()}
        <MoreButton getMore={getMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
