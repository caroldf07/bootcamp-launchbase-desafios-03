const modalOverlay = document.querySelector('.modal-overlay')
const close = document.querySelector('.close-modal')
const courses = document.querySelectorAll('.bootcamp')

for(let course of courses){
    course.addEventListener("click",function(){
        const bootcampId = course.getAttribute('id')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${bootcampId}`

    })
}

close.addEventListener("click", function (){
    modalOverlay.classList.remove('active')
})

modalOverlay.addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})