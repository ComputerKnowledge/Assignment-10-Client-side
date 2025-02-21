import { useLoaderData } from "react-router-dom";

const MyDonation = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className=" mb-50">
      <p className="text-2xl"> You have donated to these campaigns !!!</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
          <div key={data._id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={data.thumbnail} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  Donated amount ${data.amount}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
