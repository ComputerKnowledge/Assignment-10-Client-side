const NewCampaign = () => {
  return (
    <div>
      <h3>This is the newCampaign page.</h3>
      <form className="sm:px-10 md:px-20 ">
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign title</label>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Campaign type</label>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">description</label>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Minimum donation amount </label>
          <input
            type="number"
            className="input w-full"
            placeholder="Type here"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">Deadline</label>
          <input type="date" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Type here"
            value={"Hello world"}
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-legend">User Name </label>

          <input
            type="name"
            value={"Hello world"}
            className="input w-full"
            placeholder="Type here"
          />
        </fieldset>
        <button className="btn btn-soft btn-primary w-full my-5 ">Add</button>
      </form>
    </div>
  );
};

export default NewCampaign;
