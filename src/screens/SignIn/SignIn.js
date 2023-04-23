import './SignIn.css'
import { Input } from '../../components/Input'

export function SignIn(){
    return `
    <section class="login-card">
    <div class="side-01">
        <h1 class="welcome">Welcome back!</h1>
        <p>You can sign in to acess with your existing account</p>
    </div>

    <div class="side-02">
        <h1 class="signIn">Sign In</h1>
        <form>
           ${Input('Email')}
           ${Input('Senha')}
        </form>

        <div class="remember-forgot">
            <div class="remember">
                <input type="checkbox" name="" id="rememberMe">
                <label for="rememberMe" class="rememberMe">Remember me</label>
            </div>
            <a href="" class="forgot">Forgot password </a>
        </div>

        <input type="button" value="Sign In" class="button-signIn">

        <p class="createAccount">New here?
            <a id="new-account" href="../create-account.html">Create an Account</a>
        </p>
    </div>
</section>
    `
}