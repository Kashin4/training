const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const fons = document.querySelector ('.fon')


item.addEventListener('dragstart',dragstart)
item.addEventListener('dragstart',fonss)
item.addEventListener('dragend',dragend)
item.addEventListener('dragend',fonssend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)
}

function fonss() {
    placeholders.forEach((placeholder) =>{
        placeholder.classList.add('placeholder-event')
    })
}
function fonssend() {
    placeholders.forEach((placeholder) =>{
        placeholder.classList.remove('placeholder-event')
        placeholder.style.opacity = `1.0`;
    })
}


function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0) 
    console.log('drags tart');
    event.target.innerHTML = 'Отпусти меня';
    event.target.opacity = `1.0`;
};

function dragend(event) {
    event.target.classList.remove('hold','hide')
    event.target.innerHTML = 'Перетащи меня'
};

function dragover (event) {
    event.preventDefault()
    
};
function dragenter (event) {
    event.target.classList.add ('hovered')  
    
};
function dragleave (event) {
    event.target.classList.remove ('hovered')
    
};
function dragdrop (event) {
    event.target.classList.remove ('hovered')
    event.target.append(item) 
};