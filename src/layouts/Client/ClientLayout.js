import React from 'react'

import "./ClientLayout.scss"

export const ClientLayout = (props) => {
 
  const {children} = props  


  return (
    <div className='client_app'>
        <h2>ClientLayout</h2>
        {children}
    </div>
  )
}
