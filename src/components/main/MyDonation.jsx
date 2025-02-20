import { useLoaderData } from "react-router-dom";

const MyDonation = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>This is the MyDonation page.</h2>
      <div className="grid grid-cols-2">
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
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
