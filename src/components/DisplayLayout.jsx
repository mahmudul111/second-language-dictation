import { Link } from "react-router-dom";

const DisplayLayout = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pw6qbWd/Image-20231114001058.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="-mt-40 text-white text-5xl font-bold">Language Dictation Learning</h1>
      <Link to='/root' className="btn btn-outline text-white mt-5">Get Started</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisplayLayout;