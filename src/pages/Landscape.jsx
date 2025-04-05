import React from 'react'
import ContactSection from '../components/ContactSection'
import ImageGallery from '../components/GalleryImage'
import InnerBanner from '../components/InnerBanner'

export default function Landscape() {
  return (
    <>
        <InnerBanner title="Landscape" bg="https://images.unsplash.com/photo-1569227997603-33b9f12af927?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <ImageGallery/>
        <ContactSection/>
    </>
  )
}
