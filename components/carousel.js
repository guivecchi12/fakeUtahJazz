import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function NextJsCarousel() {
  // images being used
  const images = [
    "https://images.unsplash.com/photo-1602357280104-742c517a1d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnQlMjBjb3VydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1511415221243-04dab195b318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnQlMjBjb3VydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0JTIwY291cnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  ]

  return (
    <div className='flex justify-center w-full bg-gray-900'>
			<Carousel 
        className='md:w-1/3'
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
      >
				<div>
					<img src={images[0]} alt="image1"/>
				</div>
				<div>
					<img src={images[1]} alt="image2" />
				</div>
				<div>
					<img src={images[2]} alt="image3"/>
				</div>
			</Carousel>
    </div>
  );
};
