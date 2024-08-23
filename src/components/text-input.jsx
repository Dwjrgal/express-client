import React, { useState } from "react";

const TextInput = ({
  addList,
  setName,
  name,
  email,
  setEmail,
  setPosition,
  position,
}) => {
  const [inputOpen, setInputOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-outline btn-accent ml-5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add list
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog w-80">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section className="w-60 flex gap-2 flex-col mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-xs"
                placeholder="firstname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-xs"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-xs"
                placeholder="profession"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>
            <button className="btn btn-outline btn-success" onClick={addList}>
              Save
            </button>
          </section>
        </div>
      </dialog>
    </>
  );
};

export default TextInput;
