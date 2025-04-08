import React, { useContext } from "react";
import styled from "styled-components";

import { SignInContext } from "../context/LoginContext";
import { Eye, EyeOff } from "lucide-react";
import { Header } from "../components/Header";

const Login = () => {
  const { state, dispatch } = useContext(SignInContext);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!state.email) {
      newErrors.email = "Email cannot be empty!";
      isValid = false;
    } else if (!validateEmail(state.email)) {
      newErrors.email = "Incorrect Email format";
      isValid = false;
    }

    if (!state.password) {
      newErrors.password = "Password cannot be empty!";
      isValid = false;
    } else if (!validatePassword(state.password)) {
      newErrors.password =
        "The password must contain at least 8 characters, at least one letter and one number!";
      isValid = false;
    }

    dispatch({ type: "ERRORS", payload: newErrors });

    if (isValid) {
      localStorage.setItem("email", state.email);
      localStorage.setItem("password", state.password);
      alert("Data saved!");

      dispatch({ type: "reset" });
    }
  };

  return (
    <SignContain>
      <StyledContain>
        <h1>Login</h1>
        <StyledForm onSubmit={handleSubmit}>
          <FromMini>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Введите e-mail"
              id="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
            <Valid>
              {state.errors.email && (
                <ErrorText>{state.errors.email}</ErrorText>
              )}
            </Valid>
          </FromMini>
          <FromMini>
            <label htmlFor="password">Password</label>
            <StyledEye>
              <div>
                <StyleInput
                  type={state.showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  id="password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  
                />

                <Valid>
                  {state.errors.password && (
                    <ErrorText>{state.errors.password}</ErrorText>
                  )}
                </Valid>
              </div>
              <EyeBtn
                type="button"
                onClick={() =>
                  dispatch({
                    type: "SHOW-PASSWORD",
                    payload: !state.showPassword,
                  })
                }
              >
                {state.showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
              </EyeBtn>
            </StyledEye>
          </FromMini>
          <StdBtnLog
            onClick={() =>
              dispatch({ type: "toggle", payload: !state.toggleList })
            }
          >
            Login to account
          </StdBtnLog>
        </StyledForm>

        <StyledMiniDiv>
          <p>or</p>
          <a href="#">register on the site</a>
          <a href="#">Forgot your password?</a>
        </StyledMiniDiv>
      </StyledContain>
    </SignContain>
  );
};

export default Login;

const SignContain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: initial;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 450px;
  height: 411px;
  label {
    font-family: initial;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  input {
    width: 408px;
    height: 48px;
    gap: 12px;
    border-radius: 4px;
    border-width: 1px;
    padding-left: 10px;
  }
`;
const StdBtnLog = styled.button`
  width: 408px;
  height: 50px;
  top: 422px;
  left: 520px;
  padding: 10px;
  gap: 10px;
  background-color: #4a4c6c;
  font-family: initial;
  font-weight: 400;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 1%;
  cursor: pointer;
  color: white;
`;

const FromMini = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledMiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  span {
    font-family: initial;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
  }

  p {
    font-family: initial;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
  }
  a {
    text-decoration-line: none;
    color: black;
    & a:hover {
      color: #57505079;
    }
    & a:active {
      color: #57505079;
    }
  }
`;

const StyleInput = styled.input`
  width: 408px;
  height: 48px;
  gap: 12px;
  border-radius: 4px;
  border-width: 1px;
  padding-left: 10px;
`;
const EyeBtn = styled.button`
  width: 55px;
  height: 48px;
  border: none;
  background-color: white;
`;

const Valid = styled.div`
  width: auto;
  height: 15px;
  padding-bottom: 5px;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px;
`;
const StyledEye = styled.div`
  display: flex;
`;
