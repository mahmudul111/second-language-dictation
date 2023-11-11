import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import ParasCard from "./ParasCard";

const Home = () => {
    const paras = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="flex gap-5">
                <div className="w-1/4 border-red-500">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="w-3/4 border-solid border-2 border-sky-500" >
                    {
                paras.map(para =><ParasCard
                key={para.id}
                aPara={para}
                ></ParasCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;