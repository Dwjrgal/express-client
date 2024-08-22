import React from "react";

const TextInput = ({
  addList,
  setName,
  name,
  email,
  setEmail,
  setPosition,
  position,
}) => {
  return (
    <>
<button className="btn btn-outline btn-accent" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add list</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <section className="w-80 flex gap-2 flex-col mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="firstname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
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
