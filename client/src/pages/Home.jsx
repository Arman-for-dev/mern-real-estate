import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(()=>{
    const fetchOfferListings = async () =>{
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=3');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error)
      }
    }
    const fetchRentListings = async () =>{
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error)
      }
    }
    const fetchSaleListings = async ()=>{
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  });


  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find you next <span className="text-slate-500">perfect</span>
          <br />
          place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Arna Estate is a best place find your next home.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link to={'/search'} className="text-xs sm:text-sm text-blue-800 font-bold hover:underline">
          Let's get started...
        </Link>
      </div>
      {/* Swipper */}
      <Swiper navigation>
        {offerListings && offerListings.length > 0 && 
          offerListings.map((listing)=>(
            <SwiperSlide key={listing._id}>
              <div style={{
                background: `url(${listing.imageUrl[0]}) center no-repeat`,
                backgroundSize: 'cover'
              }}
              className='h-[500px]'
              key={listing._id}
              ></div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* listing result for offer, sale and rent */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div>
              <h2>Recent offers</h2>
              <Link to={'/search?offer=true'}>
              Show more offer</Link>
            </div>
            <div>
              {/* {
                offerListings.map((listing)=>(

                ))
              } */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home