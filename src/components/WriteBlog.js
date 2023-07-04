import React, { useState } from "react";

const WriteBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setBlog((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });

    console.log(blog);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center my-5 mb-0  min-h-[90vh] border-2   ">
      <form onSubmit={submitHandler}>
        <h1 className="text-center">Write Blog</h1>
        <label htmlFor="title">Blog Title</label>
        <br />
        <input
          type="text"
          className="px-3 py-1 my-2 border-slate-600s border-2 rounded-md dark:bg-black"
          id="title"
          name="title"
          value={blog.title}
          onChange={changeHandler}
          placeholder="Write Blog Title "
        />
        <br />
        <label htmlFor="des">Blog Description</label>
        <br />
        <input
          type="textarea"
          className="px-3 py-1 my-2 border-slate-600s border-2 rounded-md dark:bg-black"
          id="des"
          name="description"
          value={blog.description}
          onChange={changeHandler}
          placeholder="Write Blog Description"
        />
        <br />
        <label htmlFor="img">Image Url</label>
        <br />
        <input
          type="text"
          className="px-3 py-1 my-2 border-slate-600s border-2 rounded-md  dark:bg-black"
          id="img"
          name="image"
          value={blog.image}
          onChange={changeHandler}
          placeholder="Paste Image url here"
        />
        <br />
        <button
          type="submit"
          className="bg-slate-400 dark:bg-slate-800 p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
