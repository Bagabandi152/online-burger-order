import React from 'react'

const FormatMnt = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '₮'
}

export default FormatMnt;