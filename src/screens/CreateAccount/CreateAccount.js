import './CreateAccount.css'

import { Input } from '../../components/Input'

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
                    ${Input('Fist Name')}
                    ${Input('Last Name')}
                </div>

                <div class="email">
                   ${Input('Email')}
                </div>

                <div class="twoInputs">
                    ${Input('Password')}
                    ${Input('Confirm Password')}
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