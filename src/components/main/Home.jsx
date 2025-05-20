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
    <div>
      <div className="carousel overflow-hidden relative w-full">
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
      <h3 className="text-2xl sm:text-3xl font-bold">
        These campaign is running !!!
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
          <div key={data._id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={data.thumbnail} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
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

      <h4>2 Extra sections.</h4>
      <h2>First Extra section .</h2>
      <h2>second Extra section .</h2>
    </div>
  );
};

export default Home;
