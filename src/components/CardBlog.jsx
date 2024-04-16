import React from "react";
import { dataBlog } from "../data/dataBlog";

export default function CardBlog() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[1080px]:grid-cols-3 py-[25px]">
        {dataBlog.map((blog) => (
          <div
            className="max-[779px]:max-w-md md:w-[315px] h-[350px] lg:max-w-2xl flex flex-col gap-y-3 rounded-[20px] py-6 px-5 shadow-md border border-slate-200"
            key={blog.id}
          >
            <img
              className="rounded-[10px] w-[265px] h-[160px] mx-auto shadow-md cursor-pointer object-cover"
              src={blog.img}
              alt=""
            ></img>
            <h3 className="inline-block text-lg font-semibold mx-5 cursor-pointer max-[767px]:text-sm">
              {blog.title}
            </h3>
            <p className="text-sm text-slate-500 mx-5">
              Anim eu amet pariatur magna enim Lorem officia.Esse nulla
              voluptate veniam proident consectetur.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
