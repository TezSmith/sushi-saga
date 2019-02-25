import React from 'react'

const MoreButton = (props) => {
  const { getMore } = props
    return <button onClick={() => getMore()}>
            More sushi!
          </button>
}

export default MoreButton
