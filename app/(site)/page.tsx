import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
const page = async () => {
  // await sleep(2000);

  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category />
    </div>
  );
};

export default page;
