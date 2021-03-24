const panels = document.querySelectorAll('.panel');

panels.forEach(block => {
    block.addEventListener('click', () => {
        removeActiveClasses();
        block.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(block => {
        block.classList.remove('active');
    })
}