import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const data = useLoaderData();
  const { _id, title, type, description, amount, date, email, name } = data;
  // console.log(data);
  const handleUpdateCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.username.value;
    // console.log(title, type, description, amount, date, email, name);
    const data = { title, type, description, amount, date, email, name };
    // console.log(data);
    fetch(`https://server-red-tau.vercel.app/updateCampaign/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then(() => {
        // console.log(data);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your data has been updated successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      })
    );
  };
  const handleThis = () => {};
  return (
    <div>
      <h3>This is the Update Campaign page.</h3>
      <form onSubmit={handleUpdateCampaign} className="sm:px-10 md:px-20 ">
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="title"
            defaultValue={title}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign type</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="type"
            defaultValue={type}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">description</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="description"
            defaultValue={description}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Minimum donation amount </label>
          <input
            type="number"
            className="input w-full"
            placeholder="Type here"
            name="amount"
            defaultValue={amount}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Deadline</label>
          <input
            type="date"
            className="input w-full"
            placeholder="Type here"
            name="date"
            defaultValue={date}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Type here"
            name="email"
            value={email}
            onChange={handleThis}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Name </label>

          <input
            type="name"
            value={name}
            className="input w-full"
            placeholder="Type here"
            name="username"
            onChange={handleThis}
          />
        </fieldset>
        <button className="btn btn-soft btn-primary w-full my-5 ">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaign;
