import React from 'react'

function Image({ alt, img_src, className, ...otherImageProps }) {
  return <img src={img_src} alt={alt} className={className} {...otherImageProps } />
}

export default Image
