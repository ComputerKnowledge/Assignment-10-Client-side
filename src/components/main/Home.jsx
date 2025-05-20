import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
const Home = () => {
  const data = useLoaderData();
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const slide4 = useRef(null);

  // console.3og(data)3
  return (
    <div className="mt-16">
      <div className="carousel overflow-hidden relative w-full mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <div ref={slide1} className="carousel-item w-full">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQE1CReHYOxLvQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1676005937400?e=2147483647&v=beta&t=3oDs8X1v_JJpfJzOLMeq4zwBidOTmwuv8hWdJaw4r78"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                slide4.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                slide2.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
        <div ref={slide2} className="carousel-item  snap-start relative w-full">
          <img
            src="https://code-care.com/wp-content/uploads/2021/12/What-is-a-Crowdfunding-1.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                slide1.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                slide3.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
        <div ref={slide3} className="carousel-item  snap-start relative w-full">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231212173723/Equity-Crowdfunding-copy.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                slide2.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                slide4.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
        <div ref={slide4} className="carousel-item snap-start  relative w-full">
          <img
            src="https://ares.decipherzone.com/blog-manager/uploads/banner_dc873741-94c0-4fdf-b15e-f144baab3da8.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                slide3.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                slide1.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 px-4">
        These campaign is running !!!
      </h3>
      <div className="grid  justify-center sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((data) => (
          <div
            key={data._id}
            className="px-4 sm:pt-4 card bg-base-100 w-full  shadow-sm"
          >
            <figure className="w-full ">
              <img
                src={data.thumbnail}
                alt=""
                className="h-48 sm:h-56 md:h-60 lg:h-64  rounded-xl w-full"
              />
            </figure>
            <div className="card-body items-center text-center p-3 pb-6 sm:pt-4 ">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Link to={`/campaign/${data._id}`}>see more</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
