import { Link, useLoaderData } from "react-router-dom";
const Home = () => {
  const data = useLoaderData();

  // console.log(data);
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQE1CReHYOxLvQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1676005937400?e=2147483647&v=beta&t=3oDs8X1v_JJpfJzOLMeq4zwBidOTmwuv8hWdJaw4r78"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://code-care.com/wp-content/uploads/2021/12/What-is-a-Crowdfunding-1.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/BestCrowdfundingSites_resized-03_da571c91-d511-482f-81d8-abf24c0481f8.jpg?v=1730468327"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231212173723/Equity-Crowdfunding-copy.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
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
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card Title:{data.date}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
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
