import { useLoaderData, useParams } from "react-router-dom";


const TaskCard = () => {
    const paras = useLoaderData();
  const { id } = useParams();
  const lesson = paras?.find((para) => para.id == id);
    return (
        <div className="border-solid border-2 border-sky-500 text-center m-10">
            <h2 className="text-3xl p-10">{lesson.para}</h2>
        </div>
    );
};

export default TaskCard;