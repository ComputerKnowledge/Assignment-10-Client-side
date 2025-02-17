import { useContext } from "react";
import { Auth } from "../../authprovider/AuthProvider";

const NewCampaign = () => {
  const { user } = useContext(Auth);

  const handleNewCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.username.value;
    console.log(title, type, description, amount, date, email, name);
    const data = { title, type, description, amount, date, email, name };
    console.log(data);
    fetch("http://localhost:5000/addCampaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json().then((data) => console.log(data)));
  };
  const handleThis = () => {
    console.log("handleThis");
  };
  return (
    <div>
      <h3>This is the newCampaign page.</h3>
      <form onSubmit={handleNewCampaign} className="sm:px-10 md:px-20 ">
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="title"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign type</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="type"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">description</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
            name="description"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Minimum donation amount </label>
          <input
            type="number"
            className="input w-full"
            placeholder="Type here"
            name="amount"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Deadline</label>
          <input
            type="date"
            className="input w-full"
            placeholder="Type here"
            name="date"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Type here"
            name="email"
            value={user}
            onChange={handleThis}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Name </label>

          <input
            type="name"
            // value={}
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
