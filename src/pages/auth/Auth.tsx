import { AuthBackground, AuthBlock, AuthWindow } from "./authStyles";

const Auth = () => {
  return (
    <AuthWindow>
      <AuthBlock></AuthBlock>
      <AuthBackground>
        <img
          src="/img/auth/bg/background-01.svg"
          alt="Auth Background"
          className="auth-bg"
        />
      </AuthBackground>
    </AuthWindow>
  );
};
export default Auth;
