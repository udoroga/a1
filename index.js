/*popup*/
const popup = document.querySelectorAll('.popup');

function BodyScroll(lock) {
    document.body.style.overflow = lock ? 'hidden' : '';
}
function BodyPadding(lock){
    const Body = document.querySelector('body')
    const value = window.innerWidth - Body.offsetWidth + 'px'
    Body.style.paddingRight = lock? value : null ;
}

document.querySelector('.sign').addEventListener('click', function (e){
    let popupSign = document.querySelector('.popupSign')
    popupSign.classList.toggle('active')
    BodyPadding(true)
    BodyScroll(true)

})

document.querySelector('.log').addEventListener('click', function (e){
    let popupLog = document.querySelector('.popupLog')
    popupLog.classList.toggle('active');
    BodyPadding(true)
    BodyScroll(true)

})


let closeButton = document.querySelectorAll('p');
closeButton.forEach(closeButton => {
    closeButton.addEventListener("click", ev => {
        closeButton.closest('.popup').classList.toggle('active')
        BodyScroll(false)
        BodyPadding(false)
    })
})

popup.forEach(popup =>{
    popup.addEventListener('click', e =>{
        if (e.target.querySelector('.popup__body')){
            popup.classList.remove('active')
            BodyScroll(false)
            BodyPadding(false)
        }
    } )
})
/*popup*/






/* galary*/
let gallery = document.querySelector('.galary')
document.querySelector('input[type = "file"]').onchange = e => {
    let file = document.querySelector('input[type = "file"]').files
    for(let i = 0; i < file.length; i++){
        let reader = new FileReader;
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = e =>{
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.textContent = 'X'
            p.classList.add('remove')
            p.addEventListener('click', function (e){
                div.remove(p.closest('div'))
            })
            let img = document.createElement('img');
            img.src = e.target.result
            div.append(img,p)
            gallery.append(div);
        };
    }
}
/* galary*/




/*list*/
let button = document.getElementsByClassName('button');

for ( let  i = 0; i < button.length; i++){
    button[i].addEventListener('click', function (e){
        let content = button[i].nextElementSibling;
        if(content.style.height){
            content.style.height = null
        }else {
            content.style.height = content.scrollHeight + 35 + "px"

        }
        this.classList.toggle('active')
    })
}
/*list*/


















