import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h3 className="text-2xl font-bold mt-5 ml-8">Please Login</h3>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <h3 className="mb-5 text-center">Do not have account? <span className="text-blue-600 font-semibold"><Link to='/register'>Register</Link></span> now</h3>
    </div>
    </div>
    </div>
    );
};

export default Login;