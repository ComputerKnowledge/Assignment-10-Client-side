import { Link, useLoaderData } from "react-router-dom";

const MyCampaign = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="overflow-x-auto">
      <table className="table text-right">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Job</th>
            <th>amount</th>
            <th></th>
          </tr>
        </thead>
        {data.map((data, idx) => (
          <tbody key={data._id}>
            <tr>
              <th>{idx + 1}</th>
              <td>{data.title}</td>
              <td>Quality Control Specialist</td>
              <td>{data.amount}</td>
              <td className="space-x-2">
                <Link to={`/updateCampaign/${data._id}`}>
                  <button className="btn btn-soft btn-primary">Update</button>
                </Link>
                <Link to={``}>
                  <button className="btn btn-soft btn-primary">Delete</button>
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyCampaign;
