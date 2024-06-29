import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      layout이 먼저
      {children}
    </div>
  );
};

export default layout;
