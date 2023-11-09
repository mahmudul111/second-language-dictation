import { Link } from "react-router-dom";

const DisplayLayout = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JxvRyrZ/4m5a8e2dd22l4hqvn0dousf89l.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mt-40 text-white text-5xl font-bold">Second Language Dictation</h1>
      <Link to='/login' className="btn btn-outline text-white mt-5">Get Started</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisplayLayout;