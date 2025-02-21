import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  // setData(fetchData);
  // console.log(data);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainCampaign = data.filter((data) => data._id !== id);
              setData(remainCampaign);
            }
          });
      }
    });
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
