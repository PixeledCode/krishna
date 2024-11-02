import React from "react";
import { client } from "../client";
import { Homepage } from "../components/layouts/Homepage";

async function App() {
  const data = await client.fetch('*[_type == "homepage"][0]');

  return <Homepage data={data} />;
}

export default App;
