const MyCampaign = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-right">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td className="space-x-2">
              <button className="btn btn-soft">Update</button>
              <button className="btn btn-soft">Update</button>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td className="space-x-2">
              <button className="btn btn-soft">Update</button>
              <button className="btn btn-soft">Update</button>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td className="space-x-2">
              <button className="btn btn-soft">Update</button>
              <button className="btn btn-soft">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
