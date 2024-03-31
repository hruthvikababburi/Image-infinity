import React from 'react';
import ImageGallery from "react-image-gallery";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const images4= [
        {
            original: "https://fastly.picsum.photos/id/83/2560/1920.jpg?hmac=LFdAxfpbYKs0hZr0LhHVWyqXarWGg7FtM8pIzJPBc0w",
            thumbnail: "https://fastly.picsum.photos/id/83/2560/1920.jpg?hmac=LFdAxfpbYKs0hZr0LhHVWyqXarWGg7FtM8pIzJPBc0w",
        },
        {
            original: "https://fastly.picsum.photos/id/120/4928/3264.jpg?hmac=i-8mkfKj_gRyQt9ZJVhbIBXbtIBNcsbI_gwNe_39vus",
            thumbnail: "https://fastly.picsum.photos/id/120/4928/3264.jpg?hmac=i-8mkfKj_gRyQt9ZJVhbIBXbtIBNcsbI_gwNe_39vus",
        },
        {
            original: "https://fastly.picsum.photos/id/109/4287/2392.jpg?hmac=K5ytllhfakgsUEDFnY5ujHIGJTzELPQgVJjZMpRlfJY",
            thumbnail: "https://fastly.picsum.photos/id/109/4287/2392.jpg?hmac=K5ytllhfakgsUEDFnY5ujHIGJTzELPQgVJjZMpRlfJY",
        },
        {
            original: "https://fastly.picsum.photos/id/110/5000/3333.jpg?hmac=AvUBrnXG4ebvrtC08T95vEzD1I9SryZ8KSQ4iJ9tb9s",
            thumbnail: "https://fastly.picsum.photos/id/110/5000/3333.jpg?hmac=AvUBrnXG4ebvrtC08T95vEzD1I9SryZ8KSQ4iJ9tb9s",
        },
        
       ];
  return (
    <div>
        <div className='bg-fuchsia-50 p-12'>
            <h2 className="text-5xl font-bold mb-4 text-fuchsia-900">About Us</h2>
            <p className="text-lg mb-6 text-fuchsia-800">Welcome to <span className='font-semibold ml-2 mr-2 text-xl'>ImageInfinity</span>, where creativity meets inspiration. We are a premier destination for visual storytelling, dedicated to curating a diverse and captivating collection of images that ignite imagination and evoke emotion. Our mission is to provide a platform for photographers, artists, and enthusiasts to showcase their talent, connect with a global audience, and celebrate the beauty of the world through the lens.</p>
            <div className='mt-10 flex items-center' >
                <div className='w-2/4'>
                    <p className='text-5xl text-fuchsia-800 pl-2 '>
                    What sets us apart is our commitment to quality!
                    </p>
                    <p className='text-2xl text-fuchsia-800 p-4 pl-2 m-2 mr-4 mt-4 bg-pink-100 rounded-md'>
                        Every image in our collection undergoes a rigorous selection process to ensure it
                         meets our standards of excellence. From breathtaking landscapes to captivating portraits, 
                        each photograph is carefully curated to showcase the beauty and diversity of the world around us.
                    </p>
                </div>
                <div className=' w-2/4 ml-auto'>
                    <ImageGallery items={images4} thumbnailPosition='bottom' useTranslate3D={true} autoPlay={true} slideOnThumbnailOver={true} swipingTransitionDuration={1} lazyLoad={false} showNav={false} slideInterval={3000} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
                </div>
            </div>
            <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Our Vision</h3>
            <p className="text-lg mb-6  text-fuchsia-800">At <span className='font-semibold ml-2 mr-2 text-xl'>ImageInfinity</span>, we envision a world where every image has the power to inspire, educate, and unite. Through our carefully curated selection of photographs, we strive to foster creativity, promote cultural exchange, and spark meaningful conversations that transcend boundaries and bridge divides.</p>
            
            <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Why Choose Us</h3>
            <ul className="list-disc pl-6 mb-6  text-fuchsia-800">
                <li className="text-lg">Excellence in Curation: Our team of expert curators meticulously selects each photograph to ensure the highest standards of quality, creativity, and relevance.</li>
                <li className="text-lg">Diverse Perspectives: From stunning landscapes to intimate portraits, our collection reflects the rich tapestry of human experience, offering a multitude of perspectives and narratives.</li>
                <li className="text-lg">Community Engagement: We believe in the power of community to amplify voices, foster collaboration, and drive positive change. Join our vibrant community of creators and enthusiasts to connect, collaborate, and create together.</li>
            </ul>
            
            <div className='bg-rose-100 p-4 rounded-md'>
                <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Connect With Us</h3>
                <p className="text-lg mb-6  text-fuchsia-800">Experience the power of visual storytelling and connect with us to explore endless possibilities. Whether you're a seasoned photographer, an aspiring artist, or simply a lover of beautiful imagery, we invite you to join us on this journey of discovery and inspiration.</p>
                <button className="bg-transparent border border-fuchsia-800 hover:bg-fuchsia-900 hover:border-fuchsia-50 hover:text-fuchsia-50 text-fuchsia-800 font-bold py-2 px-4 rounded"><Link to='/contact'>Get in Touch</Link></button>
            </div>

            
        </div>
       
    </div>
  );
}

export default AboutUs;
