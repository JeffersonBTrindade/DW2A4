import { mask } from './modules/mask.js'
import { valid } from './modules/valid.js'

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js
    const id = $input.id

    console.log(id);

    if (field){
        $input.addEventListener('input', (e) => {
            e.target.value = mask[field](e.target.value)
        }, false)
    }

    $input.addEventListener('focusout', (e) => {
        if(valid[id](e.target.value)) {
            $input.classList.add('errorInput')
        } else {
            $input.classList.remove('errorInput')
        }
    }, false)
})

