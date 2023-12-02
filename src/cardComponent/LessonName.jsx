/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LessonName = ({ lesson }) => {
  const { id, title } = lesson;
  return (
    <div
      className={
        id <= 5
          ? "bg-green-700"
          : id > 5 && id <= 10
          ? "bg-yellow-600"
          : "bg-red-500"
      }
    >
      <Link to={`/root/courses/${id}`}>
        <div className="border-b-2 py-2 text-white">{title}</div>
      </Link>
    </div>
  );
};

export default LessonName;
