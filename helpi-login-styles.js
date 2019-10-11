import { css } from 'lit-element';

export default css`
:host {
  display: block;
  box-sizing: border-box;
  --helpi-app-theme-color-one: #FFFFFF;
  --helpi-app-theme-color: #FABC09;
  --helpi-app-theme-color-three: #FACC43;
  --helpi-app-theme-color-1: #23bc7d;
  --helpi-app-theme-color-2: #19E68C;
  --helpi-app-theme-color-3: #25BEA0;
  --helpi-app-theme-color-five: #374353;
  --helpi-app-theme-color-nine: #EEEEEE;
  --helpi-app-theme-color-six: #DDDDDD;
  --helpi-app-theme-color-seven: #B1B1B1;
  --helpi-app-theme-color-eight: #555555;
  --helpi-app-theme-color-shadow: #37435399;
  --helpi-app-theme-color-yellow-shadow: #FACC43CC;
  --helpi-app-theme-color-coral-shadow: #F88379CC;
  --helpi-app-theme-color-ten: coral;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
}

.form {
  width: 100%;
  height: 100vh;
  background-color: #ff6200;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ff6200'/%3E%3Cstop offset='1' stop-color='%23fa744b'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232ae095' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%232ae095' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%232ae095' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%232ae095' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  color: white;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

.header {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.body {
  width: 100%;
  height: 75%;
  background-color: ghostwhite;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 1px;
}
input {
  width: 80%;
  height: 50px;
  margin: 0 0 20px 0;
  padding: 0;
  border: none;
  border-bottom: 2px solid var(--helpi-app-theme-color-ten);
  background-color: transparent;
  color: var(--helpi-app-theme-color-five);
  font-family: sans-serif;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
input:focus, input:active {
  outline: none;
}
button {
  font-family: sans-serif;
  letter-spacing: 1px;
}
button:active, button:focus {
  outline: none;
}
button:hover {
  cursor: pointer;
}
.login {
  width: 80%;
  height: 50px;
  border: none;
  border-radius: 0.1rem;
  font-size: 0.8rem;
  font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--helpi-app-theme-color-one);
  background-color: var(--helpi-app-theme-color-five);
}
span {
  font-size: 0.7rem;
  font-family: sans-serif;
  font-weight: bold;
  color: var(--helpi-app-theme-color-five);
}
.social-login {
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  text-transform: none;
  margin-bottom: 60px;
}
.social-login-button {
  width: 45%;
  height: 100%;
  border: none;
  text-align: center;
}
.facebook {
  background-color: #4267B2;
  color: #FFFFFF;
}
.gmail {
  background-color: #D93025;
  color: #FFFFFF;
}
.register {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: #ff6200;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23ff6200'/%3E%3Cstop offset='1' stop-color='%23fa744b'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%232ae095' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%232ae095' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%232ae095' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%232ae095' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: scroll;
  background-size: cover;
  font-size: 0.7rem;
  font-family: sans-serif;
  font-weight: bold;
  color: var(--helpi-app-theme-color-one);
  text-decoration: none;
}
.register:hover {
  cursor: pointer;
}
`;
