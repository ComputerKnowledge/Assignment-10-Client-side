import { useContext } from "react";
import { Auth } from "../../authprovider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  // const {} = useContext(Auth);
  const data = useLoaderData();
  // console.log(data);
  const handleSeeMore = (id) => {
    console.log(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th></th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        {data.map((data, idx) => (
          <tbody key={data._id}>
            <tr>
              <th>{idx + 1}</th>
              <td>{data.title}</td>
              <td>Quality Control Specialist</td>
              <td>{data._id}</td>
              <td>
                <button
                  onClick={() => handleSeeMore(data._id)}
                  className="btn btn-primary"
                >
                  <Link to={`/campaign/${data._id}`}>see more</Link>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllCampaign;
