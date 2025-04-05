import React from 'react'
import ContactSection from '../components/ContactSection'
import ImageGallery from '../components/GalleryImage'
import InnerBanner from '../components/InnerBanner'

export default function Interior() {
  return (
    <>
     <InnerBanner title="Interior" bg="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <ImageGallery/>
     <ContactSection/>
    </>
  )
}
