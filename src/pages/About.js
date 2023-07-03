import React from "react";

const About = () => {
  return (
    <>
      <div className="container  grid grid-cols-1 lg:grid-cols-3 p-5  items-center dark:bg-black ">
        <div
          className="bg-slate-400 bg-cover relative bg-center bg-no-repeat block col-span-1 lg:col-span-2  w-full h-80 "
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/14484311/pexels-photo-14484311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        ></div>
        <div className="p-6 align-text-bottom relative   bg-slate-200  dark:bg-black dark:text-white text-lg font-semibold text-slate-800 lg:h-80 ">
          <h1
            className="lg:absolute bottom-0 left-0 lg:m-8 text-2xl font-normal lg:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif;" }}
          >
            About
          </h1>
        </div>
      </div>
      <div
        className="container p-5 lg:px-44  first-letter:float-left first-letter:text-6xl first-letter:mr-2 font-normal first-letter:text-red-700 text-black dark:bg-black dark:text-white leading-loose"
        style={{ fontFamily: "'Rubik'" }}
      >
        <p className="mb-4" style={{ fontFamily: "'Rubik'" }}>
          You love minimalism, want to be productive focusing only on the
          important things and want to take jekyll to the next level, Nubia is
          designed for you. Nubia focus on showing your content in a clean and
          simple way, focus on images, typography, and white space.
        </p>
        <p className="mb-4">
          This is the base Jekyll theme. You can find out more info about
          customizing your Jekyll theme, as well as basic Jekyll usage
          documentation at jekyllrb.com
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, vix ut case porro facilisis, alia possit
          neglegentur vis te. Has cu eirmod abhorreant, vel civibus efficiantur
          cu. Eu summo elitr vix, iusto putant maluisset per ut, ne etiam
          vivendum adipisci vel. Vis omnis tempor accusam ei, justo perpetua
          liberavisse cu qui. Saperet aliquando adipiscing ius ne, ne facer
          euripidis est. Pro mundi nostrum suavitate et.
        </p>
      </div>
    </>
  );
};

export default About;
