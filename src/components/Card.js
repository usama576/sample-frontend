import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, title, body, image , tags } = props;
  
  return (
    <Link
      to={`/blog/${id}`}
      state={{
        title: title,
        body: body,
        image: image,
        tags: tags,
      }}
      className={`container justify-center  px-4 ${props.cols}`}
    >
      <div className="group m-5">
        <div className="justify-center  grid h-80 w-full overflow-hidden  ">
          <a
            href="#"
            className=" group-hover:bg-slate-500 transition-all ease-in-out duration-500    w-full  block"
          >
            <img
              src={image}
              alt=""
              className="opacity-90 object-    group-hover:scale-105 transition-all ease-in-out duration-500 h-full w-full "
            />
            {/* <div className="bg-black block group-hover:bg-slate-500 transition-all ease-in-out duration-500 h-96 w-96 " style={{backgroundImage: "url(https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}></div> */}
          </a>
        </div>
        <div className="mt-2 block">
          <a href="#" className="px-2 text-slate-600 border-l-2 border-red-500">
            Frontpage
          </a>
          <i class="bi bi-pinterest float-right mx-2 invisible  group-hover:visible transition-all ease-in-out duration-500 text-red-600"></i>
          <i class="bi bi-facebook float-right mx-2 invisible group-hover:visible transition-all ease-in-out duration-500 text-blue-600"></i>
          <i className="bi bi-twitter float-right mx-2 invisible group-hover:visible transition-all ease-in-out duration-500 text-sky-500"></i>
        </div>
        <div className="flex my-2">
          <a
            href="#"
            className="group-hover:underline underline-offset-8 decoration-red-500 transition-all ease-in-out duration-500"
          >
            <h1 className="font-semibold text-2xl ">{title}</h1>
          </a>
        </div>
        <div>
          <p className="font-medium text-sm text-slate-500 ">
            22 JAN 2017 / AUTHOR
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
