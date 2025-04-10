import React from 'react'
import Navbar from './navbar';
import Footer from './footer';
import Facts from './facts';
import Carousel from '../animation/carousel';

const tips = () => {

  const images = [
    'https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1000301206/photo/litter-of-puppies-in-animal-shelter-australian-shepherds.jpg?s=612x612&w=0&k=20&c=hYVpHKXlx3ts3E1srCVxkkQTdQ6lzRT6I7O2n_4ZMN4=',
    'https://media.istockphoto.com/id/1205991539/photo/sick-bernese-mountain-dog.jpg?s=612x612&w=0&k=20&c=r_Iae5cwDB05AaNxb8dkh4vPNAPikXooOqLS4aBSFcQ=',
    'https://media.istockphoto.com/id/860992046/photo/taking-care-of-a-baby-roe-deer-wildlife-rescue.jpg?s=612x612&w=0&k=20&c=M_jyXw-dePO2ZeqLMJF7hOQJb-FpasUj2uGfRjukvMw=',
    'https://media.istockphoto.com/id/1351910691/video/a-rabbit-is-sniffing-burnt-out-plants-in-the-forest.jpg?s=640x640&k=20&c=DoufLYOQr_MQp7uAduJnEPko2Frj93rBnVR8eolaVNk=',
    'https://media.istockphoto.com/id/1138129452/photo/bornean-orangutan-at-semenggoh-nature-reserve-and-wildlife-rehabilitation-centre.jpg?s=2048x2048&w=is&k=20&c=ABj6xXpj5loyofIjhmXvrihIOmnzQ12Hux5T1PaAQtM=',
    'https://media.istockphoto.com/id/957283094/photo/baby-rabbit-eating-with-baby-bottle.jpg?s=612x612&w=0&k=20&c=wJ_aJHRd8f78PYeWlMT7xy9B5OGrO4DItgH7QEJupwI=',
    'https://images.pexels.com/photos/12195433/pexels-photo-12195433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2+'
  ];
  
  return (
    <div className='flex flex-col '>

      <Navbar />
      <div className='h-screen w-full relative '>

      <Carousel images={images} />
      
        <Facts />
      </div>
      <Footer />
    </div>
  )
}

export default tips



