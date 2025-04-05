import React from 'react'
import ImageGallery from '../components/GalleryImage'
import InnerBanner from '../components/InnerBanner'

export default function Exterior() {
  return (
    <>
        <InnerBanner title="Exterior" bg="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImageGallery/>
    </>
  )
}
