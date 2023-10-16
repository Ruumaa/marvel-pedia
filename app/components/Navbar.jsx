"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SiMarvelapp } from "react-icons/si";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && querySearch.trim() !== "") {
      setQuerySearch("");
      router.push(`/search?query=${querySearch}`);
    }
  };

  return (
      <div className="navbar bg-base-100 container">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            <SiMarvelapp size={30} />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={querySearch}
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>
  );
};

export default Navbar;
