import { Link } from "react-router-dom";


const LessonName = ({lesson}) => {
    const {id, title} = lesson
    return (
        <div>
            <Link to={`/root/courses/${id}`}>
            <div className="border-b-2 py-2">
            {title}
        </div>
            </Link>
        </div>
    );
};

export default LessonName;