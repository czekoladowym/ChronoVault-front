import {
  AuthWindow,
  AuthCard,
  CardTitle,
  CardDesc,
  GoogleLogBtn,
  CardHr,
  SignInInput,
  SignInField,
  ForgotPassword,
  SignInBtn,
  AccountOffer,
} from "./authStyles";
const Auth = () => {
  return (
    <AuthWindow>
      <AuthCard>
        <CardTitle>Welcome back!</CardTitle>
        <CardDesc>Continue with Google or enter your details.</CardDesc>
        <GoogleLogBtn>
          <img src="/img/auth/logos/Google_Logo.svg" />
          Log in with Google
        </GoogleLogBtn>
        <CardDesc>or</CardDesc>
        <CardHr />
        <SignInField>
          <SignInInput placeholder="Email" type={"email"} />
          <SignInInput placeholder="Password" type={"password"} />
        </SignInField>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <SignInBtn>Log in</SignInBtn>
        <AccountOffer>Don't have account? </AccountOffer>
      </AuthCard>
    </AuthWindow>
  );
};
export default Auth;
