import "bootstrap/dist/css/bootstrap.min.css";
import useFormInput from "./useFormInput";
function SignupForm() {
  const name = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:");
    console.log("Name is : ", name.value);
    console.log("Email is : ", email.value);
    console.log("Password is : ", password.value);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mx-auto " style={{ width: 300 }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name.value}
            onChange={name.onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email.value}
            onChange={email.onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password.value}
            onChange={password.onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
