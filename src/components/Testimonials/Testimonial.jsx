import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Pattinson",
      image:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg", // Replace with actual images
      stars: 5,
      quote:
        "Lobortis leo pretium facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper.",
    },
    {
      name: "Greg Stuart",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      stars: 5,
      quote:
        "Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultrices integer nunc neque accumsan.",
    },
    {
      name: "Wade Warren",
      image:
        "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      stars: 4,
      quote:
        "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem.",
    },
  ];

  return (
    <div className="px-4 py-10 md:px-14 bg-gray-50 ">
      <div className="mb-10 text-center">
        <h2 className="text-[1.6rem] font-semibold text-gray-700">GOLF ME</h2>
        <h3 className="text-3xl font-bold text-blue-600">
          Quotes From Satisfied Users
        </h3>
      </div>
      <div className="w-[98%] lg:w-[80%] mx-auto">
        <OwlCarousel
          className="owl-theme"
          items={3}
          margin={20}
          loop
          dots
          autoplay
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1068: { items: 2 },
            1324: { items: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="item">
              <div className="p-6 text-center bg-white border-[3px] h-[20rem] lg:h-[19rem] border-black shadow-lg rounded-xl">
                <div className="w-[7rem] h-[7rem] mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full mb-4 rounded-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <div className="flex justify-center my-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < testimonial.stars
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } text-xl`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
