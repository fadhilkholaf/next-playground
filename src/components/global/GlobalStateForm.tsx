"use client";

import { useGlobalState } from "../providers/GlobalStateProvider";

const GlobalStateForm = () => {
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <form>
      <div className="flex flex-col w-fit">
        <label htmlFor="globalState">Input global state</label>
        <input
          type="text"
          id="globalState"
          className="border border-black"
          onChange={(e) => setGlobalState(e.target.value)}
          value={globalState}
        />
      </div>
    </form>
  );
};

export default GlobalStateForm;
