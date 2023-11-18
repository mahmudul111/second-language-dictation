
import { useEffect, useState } from "react";
import LessonName from "../cardComponent/LessonName";

const LeftSideNav = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(()=>{
        fetch('/fake.json')
        .then(res => res.json())
        .then(data => setLessons(data))
    },[])
    return (
        <div className="bg-emerald-900 text-white border-solid border-2 border-sky-500">
            <div className="border-solid border-2 border-sky-500 text-center">
            <h3 className="text-xl font-semibold my-2">
            {
                    lessons?.map(lesson => <LessonName key={lesson.id} lesson={lesson}></LessonName>)
                }
            </h3>
            </div>
        </div>
    );
};

export default LeftSideNav;