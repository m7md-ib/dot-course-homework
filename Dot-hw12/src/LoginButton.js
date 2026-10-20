function LoginButton({ isLoggedIn, toggleLogin }) {
  return (
    <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
  );
}

export default LoginButton;
