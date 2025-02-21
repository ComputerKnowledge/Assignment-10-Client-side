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
        fetch(`https://server-red-tau.vercel.app/campaign/${id}`, {
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
    <div className="overflow-x-auto  mb-50">
      <table className="table text-right">
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
              <td className="space-x-2 ">
                <Link to={`/updateCampaign/${data._id}`}>
                  <button className="btn btn-soft btn-primary btn-xs sm:btn-md">
                    Update
                  </button>
                </Link>

                <button
                  className="btn btn-soft btn-primary btn-xs sm:btn-md"
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
