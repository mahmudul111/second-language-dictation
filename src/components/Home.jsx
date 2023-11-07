import LeftSideNav from "./LeftSideNav";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="flex gap-5">
                <div className="w-1/4 border-red-500">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="w-3/4 border-solid border-2 border-sky-500">
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;