import React from 'react'

const Information = ({colorList}) => {

  if (!colorList) {
    throw new Error("Information not ready");    
  }
  return (
    <div className='text-center'>Informacion de la cantidad de colores : {colorList.length}</div>
  )
}

export default Information