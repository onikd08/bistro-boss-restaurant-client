import { useEffect, useState } from "react";

import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import { Navigation } from "swiper/modules";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What our clients say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 flex flex-col items-center justify-center space-y-10">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-7xl " />

              <p className="text-center">{review.details}</p>
              <h3 className="text-3xl uppercase text-yellow-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
