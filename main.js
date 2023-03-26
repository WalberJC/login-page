import './index.css'
import { SignIn } from "./src/screens/SignIn/SignIn"

const LoginCard = document.querySelector('#card')
const htmlSignIn = SignIn()

LoginCard.insertAdjacentHTML("beforeend", htmlSignIn)

