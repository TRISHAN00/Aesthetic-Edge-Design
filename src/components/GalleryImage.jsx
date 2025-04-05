import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import React from 'react';

const GalleryImage = () => {
  // Note: This component assumes lightGallery is properly imported in your project
  // You would typically need to include the lightGallery library in your project:
  // npm install lightgallery
  
  // Function to initialize lightGallery when needed
  const initLightGallery = () => {
    lightGallery(document.getElementById('gallery-container'), {
      dynamic: true,
      dynamicEl: [
        {
          src: '/path/to/image1.jpg',
          thumb: '/path/to/thumb1.jpg',
          subHtml: '<h4>Image Title 1</h4><p>Description</p>'
        },
        {
          src: '/path/to/image2.jpg',
          thumb: '/path/to/thumb2.jpg',
          subHtml: '<h4>Image Title 2</h4><p>Description</p>'
        },
        // Add more images as needed
      ]
    });
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Single Image Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Card Image */}
        <div 
          id="gallery-container"
          className="relative cursor-pointer" 
          onClick={initLightGallery}
        >
          <img 
            src="/api/placeholder/800/600" 
            alt="Gallery Image" 
            className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
          />
          
          {/* Play/Gallery Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black bg-opacity-50 rounded-full p-3 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
          </div>
          
          {/* Image Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
            <h3 className="text-sm font-semibold">Modern Interior Design</h3>
            <p className="text-xs">Click to view gallery</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default GalleryImage;