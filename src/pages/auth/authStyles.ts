import styled from "styled-components";
export const AuthWindow = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: url("/img/auth/bg/background-01.svg") no-repeat center center
    fixed;
  background-size: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const AuthCard = styled.div`
  display: flex;
  width: 400px;
  height: 580px;
  background-color: #fff;
  border-radius: 31px;
  box-shadow: 1px 1px 12px 1px #919191;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const CardTitle = styled.h1`
  margin: 45px 0 0;
  font-size: 38px;
  font-weight: 600;
  user-select: none;
`;
export const CardDesc = styled.p`
  color: #5b5b5b;
  font-size: 16px;
  margin: 15px 0 15px;
  user-select: none;
`;
export const GoogleLogBtn = styled.button`
  display: flex;
  gap: 5px;
  padding: 0;
  height: 55px;
  width: 325px;
  border: 1.5px solid #a1a1a1;
  border-radius: 7px;
  background-color: #fff;
  font-size: 19px;
  line-height: 19px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  :hover {
    background-color: #f9f9f9;
    cursor: pointer;
    transition: 0.3s;
  }
  user-select: none;
`;

export const CardHr = styled.hr`
  border-bottom: 0px solid #d1d1d1;
  width: 90%;
`;

export const SignInField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 15px;
`;

export const SignInInput = styled.input`
  margin-bottom: 15px;
  font-size: 18px;
  height: 30px;
  width: 325px;
  border: none;
  border-bottom: 1px solid #a1a1a1;
  :focus {
    outline: none;
    border-bottom: 1px solid black;
    transition: 0.5s ease-in;
  }
`;
export const ForgotPassword = styled(CardDesc)`
  margin: 0;
  color: black;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const SignInBtn = styled(GoogleLogBtn)`
  background-color: #7e7eff;
  margin: 20px 0 15px;
  border: 1px solid black;
  color: #fff;
  :hover {
    background-color: #8b8bff;
    transition: 300ms;
  }
`;

export const AccountOffer = styled(CardDesc)`
  :after {
    content: "Sign up for free";
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
`;
