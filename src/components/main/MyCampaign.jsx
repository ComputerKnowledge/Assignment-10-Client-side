import { Link, useLoaderData } from "react-router-dom";

const MyCampaign = () => {
  const data = useLoaderData();
  // console.log(data);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/campaign/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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

                <button
                  className="btn btn-soft btn-primary"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyCampaign;
