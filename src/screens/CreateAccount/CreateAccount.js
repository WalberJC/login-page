import './CreateAccount.css'
import { inputEmail } from '../../components/inputEmail/inputEmail'
import { inputPassword } from '../../components/inputPassword/inputPassword'
import { InputConfPassword } from '../../components/inputPassword/inputPassword'
import { inputFistEmail } from '../../components/InputName/inputName'
import { inputLastEmail } from '../../components/InputName/inputName'

const NewAccountCard = document.querySelector('#create-card')

function NewAccount(){
    return`
    
    <section class="new-account">
        <div class="side-01">
            <h1 class="title-01">Wow, I'm so happy to see you here</h1>
            <p>Please, fill in your details and be part of our community</p>
        </div>
        <div class="side-02">
            <h1 class="title-02">Create your account</h1>
            <form>
                <div class="twoInputs">
                    ${inputFistEmail()}
                    ${inputLastEmail()}            
                </div>

                <div class="email">
                    ${inputEmail()}
                </div>

                <div class="twoInputs">
                        ${inputPassword()}
                        ${InputConfPassword()}
                </div>
            </form>

            <div class="terms">
                <input type="checkbox" name="" id="term">
                <label for="term" class="term">Yes, I understand and agree to this project <a>Terms Of Service</a> incluing the <a>User Agreement </a> and <a> Privacy Policy </a> </label>
            </div>

            <input type="button" value="Done" class="button-done">
        </div>
    </section>

    `
}

const htmlCreateAccount = NewAccount()
NewAccountCard.insertAdjacentHTML('beforeend', htmlCreateAccount)