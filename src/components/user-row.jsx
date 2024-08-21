import React from "react";

const UserRow = () => {
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
            <img
              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">Hart Hagerty</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>email</td>
      <td>
        <button className="btn btn-outline btn-info btn-xs">Edit</button>
        <button className="btn btn-outline btn-error btn-xs">delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
