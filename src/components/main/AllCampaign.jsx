import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  // const {} = useContext(Auth);
  const data = useLoaderData();
  // console.log(data);
  // const handleSeeMore = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="overflow-x-auto text-xs">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Added by</th>
            <th>Last date</th>
            <th></th>
          </tr>
        </thead>
        {data.map((data, idx) => (
          <tbody key={data._id}>
            <tr>
              <th>{idx + 1}</th>
              <td>{data.title}</td>
              <td>{data.name}</td>
              <td>{data.date}</td>
              <td>
                <button className="btn btn-primary btn-xs sm:btn-md">
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
