import React from 'react';



const AboutUs = () => {
  return (
    <div>
     
        <div className='bg-fuchsia-50 p-12'>
            <h2 className="text-5xl font-bold mb-4 text-fuchsia-900">About Us</h2>
            <p className="text-lg mb-6 text-fuchsia-800">Welcome to [Your Website Name], where creativity meets inspiration. We are a premier destination for visual storytelling, dedicated to curating a diverse and captivating collection of images that ignite imagination and evoke emotion. Our mission is to provide a platform for photographers, artists, and enthusiasts to showcase their talent, connect with a global audience, and celebrate the beauty of the world through the lens.</p>
            
            <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Our Vision</h3>
            <p className="text-lg mb-6  text-fuchsia-800">At [Your Website Name], we envision a world where every image has the power to inspire, educate, and unite. Through our carefully curated selection of photographs, we strive to foster creativity, promote cultural exchange, and spark meaningful conversations that transcend boundaries and bridge divides.</p>
            
            <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Why Choose Us</h3>
            <ul className="list-disc pl-6 mb-6  text-fuchsia-800">
                <li className="text-lg">Excellence in Curation: Our team of expert curators meticulously selects each photograph to ensure the highest standards of quality, creativity, and relevance.</li>
                <li className="text-lg">Diverse Perspectives: From stunning landscapes to intimate portraits, our collection reflects the rich tapestry of human experience, offering a multitude of perspectives and narratives.</li>
                <li className="text-lg">Community Engagement: We believe in the power of community to amplify voices, foster collaboration, and drive positive change. Join our vibrant community of creators and enthusiasts to connect, collaborate, and create together.</li>
            </ul>
            
            <h3 className="text-3xl font-bold mb-4  text-fuchsia-800">Connect With Us</h3>
            <p className="text-lg mb-6  text-fuchsia-800">Experience the power of visual storytelling and connect with us to explore endless possibilities. Whether you're a seasoned photographer, an aspiring artist, or simply a lover of beautiful imagery, we invite you to join us on this journey of discovery and inspiration.</p>
            

            <button className="bg-transparent border border-fuchsia-800 hover:bg-fuchsia-900 hover:border-fuchsia-50 hover:text-fuchsia-50 text-fuchsia-800 font-bold py-2 px-4 rounded">Get in Touch</button>
        </div>
       
    </div>
  );
}

export default AboutUs;
