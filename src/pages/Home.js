import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [post, setData] = useState();
  const [more, setMore] = useState(10);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        // const response = await axios.get(
        //   "https://jsonplaceholder.typicode.com/posts"
        // );
        setData(response.data.posts);
        // console.log(post);
        // console.log(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const moreClickHandler = () => {
    setMore(more + 5);
  };
  return (
    <>
      <div className="container grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
        {post ? (
          post
            .filter((blog) => blog.id <= more)
            .map((blog, i) => {
              if (i === 0) {
                return (
                  <Card
                    cols="col-span-1 md:col-span-2"
                    title={blog.title}
                    id={blog.id}
                    body={blog.body}
                    tags={blog.tags}
                    image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                );
              } else {
                return (
                  <Card
                    cols="col-span-1 "
                    title={blog.title}
                    id={blog.id}
                    body={blog.body}
                    tags={blog.tags}
                    image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                );
              }
            })
        ) : (
          <div className="text-6xl text-center h-[90vh] flex items-center w-full justify-center md:col-span-3">
            <div className="inline-block m-auto">
              <BeatLoader color="green" />
            </div>
          </div>
        )}
      </div>

      {/* { post !=[] ? <div className="container grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
        <Card
          cols="col-span-1 md:col-span-2"
          title={post[0].title}
          id={post[0].id}
          body={post[0].body}
          tags={post[0].tags}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          cols="col-span-1 "
          title={post[1].title}
          id={post[1].id}
          body={post[1].body}
          tags={post[1].tags}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          cols="col-span-1"
          title={post[2].title}
          id={post[2].id}
          body={post[2].body}
          tags={post[2].tags}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          cols="col-span-1"
          title={post[3].title}
          id={post[3].id}
          body={post[3].body}
          tags={post[3].tags}
          image="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Card
          cols="col-span-1"
          title={post[4].title}
          id={post[4].id}
          body={post[4].body}
          tags={post[4].tags}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          cols="col-span-1"
          title={post[5].title}
          id={post[5].id}
          body={post[5].body}
          tags={post[5].tags}
          image="https://images.pexels.com/photos/13748556/pexels-photo-13748556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Card
          cols="col-span-1"
          title={post[6].title}
          id={post[6].id}
          body={post[6].body}
          tags={post[6].tags}
          image="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>  : <h1>Posts not found</h1>} */}
      <div className="container p-5 justify-center  items-center text-center">
        <button
          className="text-center hover:bg-red-800 border-black border-x border-y  hover:text-white w-full lg:w-1/3  px-8 py-4 transition-all ease-in-out duration-500 text-sm tracking-widest items-center"
          onClick={moreClickHandler}
        >
            <p>More Stories</p>  
        </button>
      </div>
    </>
  );
};

export default Home;
