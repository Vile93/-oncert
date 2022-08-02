const overlay = document.getElementById('overlay'),
    modalWindow = document.getElementById('modalWindow'),
    tourTickets = document.getElementById('tourTickets');

const crossBtn = document.getElementById('crossBtn'),
      closeBtn = document.getElementById('closeBtn');

let currBtn;

const check = () => {
    if (currBtn.classList.contains('tour-tickets__btn')) {
        overlay.classList.toggle('overlay--active')
        modalWindow.classList.toggle('ticket-modal--active')
    }
}

const removeClass = () => {
    overlay.classList.toggle('overlay--active');
    modalWindow.classList.toggle('ticket-modal--active');
}

tourTickets.addEventListener('click', e => {
    currBtn = e.target;
    check()
});

overlay.addEventListener('click', removeClass)
crossBtn.addEventListener('click', removeClass)
closeBtn.addEventListener('click', removeClass)