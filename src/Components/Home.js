import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


export default function Home() {
    

    const images = [
    {
        original: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
        thumbnail: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    },
    {
        original: "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
        thumbnail: "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
    },
    {
        original: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
        thumbnail: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
    },
    {
        original: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
        thumbnail:"https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
    },
   ];
   const images2 = [
    {
        original: "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
        thumbnail: "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
    },
    {
        original: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
        thumbnail: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
    },{
        original: "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
        thumbnail: "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
    },{
        original: "https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q",
        thumbnail: "https://fastly.picsum.photos/id/59/2464/1632.jpg?hmac=uTfe6jCzLvCzANvJgtpo-a0fKhO8BvjpwLNYX3lqx_Q",
    },
   ];
   const images3 = [
    {
        original: "https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ",
        thumbnail: "https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ",
    },
    {
        original: "https://fastly.picsum.photos/id/69/4912/3264.jpg?hmac=Q08LW3SoOxPfaE-y8-braexxvm5PESXMCdEDqFbEhQ8",
        thumbnail: "https://fastly.picsum.photos/id/69/4912/3264.jpg?hmac=Q08LW3SoOxPfaE-y8-braexxvm5PESXMCdEDqFbEhQ8",
    },{
        original: "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
        thumbnail: "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
    },{
        original: "https://fastly.picsum.photos/id/81/5000/3250.jpg?hmac=gFiddUc7I25C06HUIMesyaFCjSOWE3L3uDl0QSyuX4M",
        thumbnail: "https://fastly.picsum.photos/id/81/5000/3250.jpg?hmac=gFiddUc7I25C06HUIMesyaFCjSOWE3L3uDl0QSyuX4M",
    },
   ];


  return (
    <div>
     
      <div className='bg-fuchsia-50 p-12'>
        <h1 className='font-bold text-5xl text-fuchsia-900 drop-shadow-md'>Welcome to ImageInfinity</h1>
        <p className='text-xl mt-8 text-fuchsia-800 pl-2'>At <span className='font-semibold ml-2 mr-2 text-2xl'>ImageInfinity</span>, we believe in the power of images to inspire, educate, 
            and connect people from all walks of life. Our curated collection of photographs 
            spans a wide range of categories, offering something for everyone. Whether you're a student,
            professional, or enthusiast, you'll find a wealth of stunning images to explore and enjoy.
        </p>
        <div className='mt-10 w-full'>
            <ImageGallery items={images} thumbnailPosition='bottom' useTranslate3D={true} autoPlay={true} slideOnThumbnailOver={true} swipingTransitionDuration={1} lazyLoad={false} showNav={true} slideInterval={2500}/>
        </div>
        <div className='bg-pink-100 w-full p-4 mt-3 md:mt-6 rounded-lg'>
            <h2  className='font-bold text-3xl text-fuchsia-800 drop-shadow-sm'>
                Discover a World of Visual Delights
            </h2>
            <p className='text-xl mt-6 text-fuchsia-700 pl-2'>
                Immerse yourself in our diverse categories, carefully curated to showcase the beauty and diversity 
                of the world around us. From the majesty of nature to the vibrancy of urban life, 
                our collection spans a wide range of subjects and styles. Explore captivating landscapes, 
                intimate portraits, and mesmerizing abstract
                compositions - each telling its own unique story and inviting you to see the 
                world in a new light.
            </p>
        </div>
        
        <div className='mt-10 flex items-center' >
            <div className='w-2/4'>
            
                <p className='text-5xl text-fuchsia-800 pl-2 '>
                    Experience the wonder of wildlife, the charm of urban landscapes, and the magic of everyday moments in our gallery.
                </p>

            </div>
            <div className=' w-2/4 ml-auto'>
                <ImageGallery items={images2} thumbnailPosition='bottom' useTranslate3D={true} autoPlay={true} slideOnThumbnailOver={true} swipingTransitionDuration={1} lazyLoad={false} showNav={false} slideInterval={3000} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
            </div>
        </div>
        <div className='mt-10 flex items-center justify-evenly' >
            <div className='w-4/6 mr-auto'>
                <ImageGallery items={images3} thumbnailPosition='bottom' useTranslate3D={true} autoPlay={true} slideOnThumbnailOver={true} swipingTransitionDuration={1} lazyLoad={false} showNav={false} slideInterval={3500} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
            </div>
            <div className='w-2/6 bg-violet-100 pl-2 ml-5 rounded-md p-3'>
                <p className='text-3xl text-fuchsia-700'>From majestic mountains to serene beaches, find inspiration 
                for your next adventure in our diverse gallery</p>
                <p  className='text-xl text-fuchsia-800 pl-2 mt-3 md:mt-6'>Elevate your surroundings with our curated collection of high-quality images, perfect for any space or project</p>
            </div>
        </div>
        <div className=' w-full mt-7'>
            <h2  className='font-bold text-3xl text-fuchsia-800 drop-shadow-sm'>
            Search for Your Favorite Category
            </h2>
            <p className='bg-pink-100 text-xl p-4  text-fuchsia-700 pl-2 mt-3 md:mt-6 rounded-lg'>
                Looking for something specific? Use our intuitive search bar to find images 
                in your favorite category. Whether you're dreaming of sandy beaches, towering mountains,or exotic wildlife, 
                simply enter a keyword and let our search engine do the rest. With thousands of 
                images at your fingertips, the possibilities are endless
            </p>
        </div>
        <h2  className='font-bold text-3xl text-fuchsia-800 mt-7 drop-shadow-sm'>
            Featured Categories
        </h2>
        <div className='bg-violet-100 text-xl mt-8 text-fuchsia-700  p-4 pl-2  rounded-lg'>
            <p>
                Take a glimpse into some of our featured categories and embark on a visual journey like no other:
            </p>
            <ul >
                <li><span className='font-semibold  mr-2 text-xl'>Nature's Wonders:</span> Lose yourself in the serene beauty of pristine landscapes, 
                    majestic wildlife, and lush botanical gardens.
                </li>
                <li><span className='font-semibold  mr-2 text-xl'>Urban Adventures:</span>
                        Experience the energy and excitement of city life through our 
                    dynamic collection of urban scenes, architectural marvels, and candid street photography.
                </li>
                <li><span className='font-semibold mr-2 text-xl'> Culinary Delights:</span>
                    Indulge your senses with our mouthwatering collection of 
                    food photography, featuring tantalizing dishes from around the world that are sure to tickle your taste buds.
                </li>
            </ul>
        </div>
        
        
        <div className='bg-white w-full p-4 mt-3 md:mt-6 rounded-lg'>
            <h2  className='font-bold text-3xl text-fuchsia-800 drop-shadow-sm'>
                Join Our Community
            </h2>
            <p className='text-xl mt-6 text-fuchsia-700 pl-2'>
                Join our vibrant community of photography enthusiasts and connect with like-minded individuals from around 
                the globe. Follow us on social media to stay updated on the latest additions to our gallery, photography tips,
                and community events. Whether you're seeking inspiration,feedback, or simply a place to share your passion for 
                photography, you'll find a warm welcome here at <span className='font-semibold ml-2 mr-2 text-xl'>ImageInfinity</span>.
            </p>
        </div>
        {/* <h2  className='font-bold text-3xl text-fuchsia-800 mt-7 drop-shadow-sm'>
            Start Exploring Today
        </h2>
        <p className='text-xl mt-8 text-fuchsia-700 pl-2'>
            Ready to embark on a visual journey like no other? Click below to start exploring our gallery and discover the beauty that awaits. Whether you're seeking inspiration, relaxation, or simply a moment of wonder, you'll find it all here at [Your Website Name].
            <button>Explore Now</button>

        </p> */}
      </div>

    </div>
  )
}
