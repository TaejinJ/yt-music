import React from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
const Header = ({ children }) => {
  return (
    <header className="relative overflow-auto w-full h-full">
      {/**bg section */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="media item"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full "></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full"></div>
        </div>
      </section>
      {/**search section  */}
      <section className="sticky">
        <PagePadding>search section</PagePadding>
        <UserIcon />
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
