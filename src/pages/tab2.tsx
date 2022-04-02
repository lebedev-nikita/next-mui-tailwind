import type { NextPage } from "next";

import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full flex flex-row">
      <div>
        <Button>Tab2</Button>
      </div>
      <div>
        <Button>Tab2</Button>
      </div>
      <div>
        <Button>Tab2</Button>
      </div>
    </div>
  );
};

export default Home;
