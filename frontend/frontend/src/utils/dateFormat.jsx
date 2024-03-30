import React from 'react'
import moment from 'moment' 

const dateFormat = (date) => {
  return (
    moment(date). format('DD/MM/YY')
  )
}

export default dateFormat