import { useLocation } from "react-router-dom";
export const BlogPost = (props) => {
  const location = useLocation();
  const { title, body, image, tags } = location.state || {};

  return (
    <>
      <div className="container  grid grid-cols-1 lg:grid-cols-3 p-5  items-center dark:bg-black ">
        <div
          className="bg-slate-400 dark:bg-black  bg-cover relative bg-center bg-no-repeat block col-span-1 lg:col-span-2  w-full h-80 "
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="p-6 align-text-bottom relative   bg-slate-200 dark:bg-black dark:text-gray-100 text-lg font-semibold text-slate-800 lg:h-80 ">
          <h1
            className="lg:absolute bottom-0 left-0 lg:m-8 text-2xl font-normal lg:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif;" }}
          >
            {title}
          </h1>
        </div>
      </div>
      <div
        className="container p-5 lg:px-44  first-letter:float-left first-letter:text-6xl first-letter:mr-2 font-normal first-letter:text-red-700 text-black dark:text-gray-100  leading-loose"
        style={{ fontFamily: "'Rubik'" }}
      >
        <p className="mb-4" style={{ fontFamily: "'Rubik'" }}>
          {body}
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
