import { Link, useLoaderData, useParams } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";

const MyCourses = () => {
  const paras = useLoaderData();
  const { id } = useParams();
  const lesson = paras?.find((para) => para.id == id);

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex gap-5">
        <div className="w-1/4 border-red-500">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="w-3/4 border-solid border-2 border-sky-500">
          <h2 className="p-10 text-3xl">{lesson?.para}</h2>
          <h2 className="px-10 py-5 text-3xl">{lesson?.chinese}</h2>
          <h2 className="px-10 py-5 text-3xl">{lesson?.bangla}</h2>
          
          <div className="flex justify-center mt-10 gap-5">
            <Link to={`/root/task/${id}`}>
              <div className="btn btn-outline">{lesson?.btn}</div>
            </Link>

            <Link to="/root">
              <button className="btn btn-outline ">{lesson?.btn_back}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
