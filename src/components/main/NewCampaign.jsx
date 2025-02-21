import { useContext } from "react";
import { Auth } from "../../authprovider/AuthProvider";
import swal from "sweetalert";

const NewCampaign = () => {
  const { user } = useContext(Auth);

  const handleNewCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.username.value;
    const data = {
      title,
      type,
      thumbnail,
      description,
      amount,
      date,
      email,
      name,
    };
    // console.log(data);
    fetch("http://localhost:5000/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then(() => {
        // console.log(data);
        swal("success", "Your campaign has been deleted!", "success");
      })
    );
  };
  const handleThis = () => {
    // console.log("handleThis");
  };
  return (
    <div>
      <form onSubmit={handleNewCampaign} className="sm:px-10 md:px-20 ">
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="title"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign type</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="type"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Thumbnail</label>
          <input
            type="text"
            className="input w-full"
            placeholder="link of picture"
            name="thumbnail"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">description</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="description"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Minimum donation amount </label>
          <input
            type="number"
            className="input w-full"
            placeholder="Type here"
            name="amount"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Deadline</label>
          <input
            type="date"
            className="input w-full"
            placeholder="Type here"
            name="date"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Type here"
            name="email"
            value={user.email}
            onChange={handleThis}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Name </label>

          <input
            type="name"
            value={user.displayName}
            onChange={handleThis}
            className="input w-full"
            placeholder="Type here"
            name="username"
          />
        </fieldset>
        <button className="btn btn-soft btn-primary w-full my-5 ">Add</button>
      </form>
    </div>
  );
};

export default NewCampaign;
