import './input.css'

export function Input(title){
    return `
    <div class="inputGroup">
        <input type="text" name="" id="" required=""  autocomplete="off">
        <label for="">${title}</label>
    </div>
    `
}