import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary";

const banners = [
  {
    id: 1,
    image: "/youtube.png",

    title: "유튜브로 이동",
    description: "2025.02.16 ",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    image: "/instagram.png",

    title: "인스타그램으로 이동",
    description: "2025.02.16 ",

    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    image: "/hanteo.png",
    title: "한터차트로 이동",
    description: "2025.02.16 ",

    link: "https://www.hanteochart.com/",
  },
];

const Banner = () => {
  return (
    <div className="flex justify-center w-full max-w-[425px] mt-4">
      <Swiper
        className="max-w-[425px] "
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        slidesOffsetBefore={15} // ✅ 왼쪽 여백 증가
        slidesOffsetAfter={15}
        style={{ paddingBottom: "40px" }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <div className="w-full border border-1 shadow-md rounded-lg">
                <div className=" h-[200px] rounded-t-lg overflow-hidden">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col px-4 py-2">
                  <span className="font-bold"> {banner.title}</span>
                  <span className="text-right text-sm">
                    {banner.description}
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
