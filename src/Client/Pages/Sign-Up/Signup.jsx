import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
    birthdate: "",
    education: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validate = () => {
    setError("");
    if (
      !data.firstname ||
      !data.lastname ||
      !data.username ||
      !data.email ||
      !data.password ||
      !data.country ||
      !data.city ||
      !data.phone ||
      !data.birthdate ||
      !data.education
    ) {
      return "All fields are required!";
    }
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(data.firstname)) {
        return "First name must contain only letters.";
    }
    if (!nameRegex.test(data.lastname)) {
        return "Last name must contain only letters.";
    }
    if (!nameRegex.test(data.country)) {
        return "Countrt must contain only letters.";
    }
    if (!nameRegex.test(data.city)) {
        return "City must contain only letters.";
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(data.password)) {
      return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(data.email)) {
      return "Please enter a valid email address.";
    }
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(data.phone)) {
      return "Phone number must be 11 digits.";
    }
    const today = new Date();
    const birthdate = new Date(data.birthdate);
    if (birthdate >= today) {
      return "Birthdate must be in the past.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
      const result = await response.json();
      setSuccessMessage("Registration successful! Redirecting to Sign In...");
      setTimeout(() => navigate("/sign-in"), 2000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome...!</h1>
          <p>If you have an account:</p>
          <Link to="/sign-in">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>

        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={data.country}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={data.city}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className={styles.input}
            />
            <input
              type="date"
              placeholder="Birthdate"
              name="birthdate"
              onChange={handleChange}
              value={data.birthdate}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Education"
              name="education"
              onChange={handleChange}
              value={data.education}
              required
              className={styles.input}
            />

            {error && <div className={styles.error_msg}>{error}</div>}
            {successMessage && (
              <div className={styles.success_msg}>{successMessage}</div>
            )}

            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
