import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import DisplayItem from './DisplayItem';


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

   const natureImages = [
    {
        id:'1',
        url:'https://fastly.picsum.photos/id/374/3888/2592.jpg?hmac=aLgKcbAu5RT1FF8nN-g7ALPS1vb71QEPx6hYqw3ZUNY'
    },
    {
        id:'2',
        url:'https://fastly.picsum.photos/id/353/5000/2806.jpg?hmac=QvrRaGlMinnGfuGM-yhcEwdMbIM3MXXyo0dC7PqqGc0'
    },
    {
        id:'3',
        url:'https://fastly.picsum.photos/id/362/4438/2954.jpg?hmac=SaEsgFrZIK1IM_SZgrf-3ySjRErJmLRfKbbTmrL1Gi0'
    },
    {
        id:'4',
        url:'https://fastly.picsum.photos/id/400/5000/3333.jpg?hmac=XKAazck_prwhbeyjBv4hERt3PeQAn0aX52O92xOXdrM'
    },
    {
        id:'5',
        url:'https://fastly.picsum.photos/id/412/5000/3337.jpg?hmac=VSZ7GVX_YrRuuXWEg2UwwHA25JGD1ZfrTVJEQezSimg'
    },
    {
        id:'6',
        url:'https://fastly.picsum.photos/id/459/2310/1534.jpg?hmac=3GuIBHCecDx0ymJJzLe_lGSQDAlbf-PiXYnCc7iM2MI'
    },
    {
        id:'7',
        url:'https://fastly.picsum.photos/id/479/5000/3125.jpg?hmac=j66BaSs_lceNGSjKSvLiVom-oT-CX7MpkwxjUypWZ08'
    },
    {
        id:'8',
        url:'https://fastly.picsum.photos/id/537/2291/3450.jpg?hmac=uzL_amhTzSWxkfdcv7Iaq6g6rsmgyiaj6GhbBP18hE8'
    },
    {
        id:'9',
        url:'https://fastly.picsum.photos/id/559/4288/2848.jpg?hmac=UBJtq93OgcI7jlLRd-kgsM4ayEMD1-PiY38ctRS642I'
    },
    {
        id:'10',
        url:'https://fastly.picsum.photos/id/564/2000/1333.jpg?hmac=GyOWIiB-_VM3YeERuSH4_UlknZGRd6R0Rge6x0hSbIc'
    },
    
   ]
   const OtherImages = [
    {
        id:'1',
        url:'https://fastly.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I'
    },
    {
        id:'2',
        url:'https://fastly.picsum.photos/id/134/4928/3264.jpg?hmac=IcPmWTNClVqLcr7PpqBrfOAvgmJbqw0Z8jZvmsCrC-c'
    },
    {
        id:'3',
        url:'https://fastly.picsum.photos/id/188/2896/1936.jpg?hmac=tKGI_u_jJ-s7wzHbJibhbflqi57bIpH9g7FJXnTfJao'
    },
    {
        id:'4',
        url:'https://fastly.picsum.photos/id/195/768/1024.jpg?hmac=rksrWrgeGQzOdzXlnzsTWy2L2zYq4gQei3TBMWCmXsI'
    },
    {
        id:'5',
        url:'https://fastly.picsum.photos/id/212/2000/1394.jpg?hmac=5mJ6tJgbGO0Wl1jBHXsiOQQYq-bRf47wLE9vmXjcEuU'
    },
    {
        id:'6',
        url:'https://fastly.picsum.photos/id/238/2560/1440.jpg?hmac=wKo4dLHwDntZmO_fdtnKtsnmRcPMACca3m5J5vx2AVc'
    },
    {
        id:'7',
        url:'https://fastly.picsum.photos/id/257/5000/3333.jpg?hmac=B0TMVZJOXC_cBK0gZj5EzCBnCwoBMEyvt9t8AbJDkdA'
    },
    {
        id:'8',
        url:'https://fastly.picsum.photos/id/299/5000/3288.jpg?hmac=vajPmKo1hPW0RLYeb2h14Ry9Mp5Gw0rs0yc78FmBmdM'
    },
    {
        id:'9',
        url:'https://fastly.picsum.photos/id/320/2689/1795.jpg?hmac=RbcHvJKkKfsAdlsQWzGT-F31XZcRP-O89MeKyDaeads'
    },
    {
        id:'10',
        url:'https://fastly.picsum.photos/id/376/5000/3324.jpg?hmac=YsGSzJMjAbs9Y95mgDvjlhJ28wfLdf55oWsN7pOhytY'
    },
    
   ]
   const FoodImages = [
    {
        id:'1',
        url:'https://w0.peakpx.com/wallpaper/214/646/HD-wallpaper-delicious-food-iteam-spicey-food-tasty-food-yummy-food-food-delicious-food.jpg'
    },
    {
        id:'2',
        url:'https://i.pinimg.com/originals/bf/65/bb/bf65bb64aa8cc139f454028a9d03f297.jpg'
    },
    {
        id:'3',
        url:'https://i.pinimg.com/564x/4a/97/33/4a9733376d9c220d0d72ad34674dc5ec.jpg'
    },
    {
        id:'4',
        url:'https://i.pinimg.com/564x/52/a3/21/52a321e6f9cfcc2b7873eab190e1bea6.jpg'
    },
    {
        id:'5',
        url:'https://i.pinimg.com/564x/31/9f/59/319f5908f05f1007ca101fc58891260e.jpg'
    },
    {
        id:'6',
        url:'https://i.pinimg.com/564x/f2/a4/0a/f2a40a4e61fabda517587679a78d5206.jpg'
    },
    {
        id:'7',
        url:'https://i.pinimg.com/564x/f3/2e/39/f32e395464f6884ee9a158ba37276347.jpg'
    },
    {
        id:'8',
        url:'https://i.pinimg.com/564x/f7/d5/e3/f7d5e32151a137191c6c2e9000dd5253.jpg'
    },
    {
        id:'9',
        url:'https://i.pinimg.com/564x/5e/cb/c6/5ecbc688ce65b2eb47e5953d8e6ee578.jpg'
    },
    {
        id:'10',
        url:'https://i.pinimg.com/564x/c8/51/16/c85116745864aba8116944f362aa5396.jpg'
    },
    
   ]
   


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
                    <div className='flex flex-wrap'>
                        {natureImages.map((Item)=>{
                            return(<DisplayItem Item={Item} key={Item.id}/>)
                        })}
                    </div>
                </li>
                <li><span className='font-semibold  mr-2 text-xl'>Urban Adventures:</span>
                        Experience the energy and excitement of city life through our 
                    dynamic collection of urban scenes, architectural marvels, and candid street photography.
                    <div className='flex flex-wrap'>
                        {OtherImages.map((Item)=>{
                            return(<DisplayItem Item={Item} key={Item.id}/>)
                        })}
                    </div>
                </li>
                <li><span className='font-semibold mr-2 text-xl'> Culinary Delights:</span>
                    Indulge your senses with our mouthwatering collection of 
                    food photography, featuring tantalizing dishes from around the world that are sure to tickle your taste buds.
                    <div className='flex flex-wrap'>
                        {FoodImages.map((Item)=>{
                            return(<DisplayItem Item={Item} key={Item.id}/>)
                        })}
                    </div>
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
