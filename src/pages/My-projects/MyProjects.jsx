import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProject, setVisibleProject] = useState(5);
  const [loading,setLoading] =useState(false);
  
  fetch("./data/projects.json")
    .then((res) => res.json())
    .then((data) => {
      setProjects(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
      setLoading(false); 
    });

  const handleShowMore = () => {
    setLoading(true);
    setVisibleProject(projects.length);
    setLoading(false);
  };
  return (
    <div id="myProjects" className="p-4">
      <div className="text-center">
        <h2 className="text-orange-500 text-3xl font-extrabold">My Project</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-4 gap-y-8 mt-8">
        {projects.slice(0, visibleProject).map((item, index) => (
          <div
            key={index}
            className=" card card-compact w-full lg:96 bg-base-100 shadow-xl hover:shadow-lg"
          >
            <div>
              <img
                className="w-full h-60 hover:scale-105 duration-700 ease-in"
                src={item.image}
                alt="Shoes"
              />
            </div>
            <div className="card-body">
              <h2 className="text-3xl my-4 font-extrabold text-center">
                {item.name}
              </h2>
              <hr />
              <div className="flex justify-center items-center gap-4 mt-4">
                <Link to={item.live_link} target="_blank">
                  <FaArrowRight className="bg-orange-500  w-8 h-8 p-2 rounded-full text-white text-sm" />
                </Link>

                <Link
                  to={item.live_link}
                  className="border p-2 rounded-md hover:bg-slate-400 hover:text-white hover:scale-110 duration-700 ease-in border-blue-400"
                  target="_blank"
                >
                  Live Link
                </Link>
                <Link
                  to={item.git_client_link}
                  className="border p-2 rounded-md hover:bg-slate-400 hover:text-white hover:scale-110 duration-700 ease-in border-blue-400"
                  target="_blank"
                >
                  Github Client
                </Link>
                <Link
                  to={item.git_server_link}
                  className="border p-2 rounded-md hover:bg-slate-400 hover:text-white hover:scale-110 duration-700 ease-in border-blue-400"
                  target="_blank"
                >
                  Git Server
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
      {loading ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          visibleProject < projects.length && (
            <button
              onClick={handleShowMore}
              type="button"
              className="btn btn-outline rounded-full hover:text-orange-500 hover:bg-white hover:border-orange-400 border-2 bg-orange-500  px-8 text-white  uppercase"
            >
              Show More
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default MyProjects;
{
  /* <div>
     inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] transition-all duration-700
</div> */
}
