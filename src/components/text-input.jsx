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
      <section className="w-60 flex gap-2 flex-col">
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
        <button className="btn" onClick={addList}>
          Save
        </button>
      </section>
    </>
  );
};

export default TextInput;
