// Game







// Status




// Player Names
let playerNames = document.getElementById('playerNames');
playerNames.addEventListener('click', () => {
    let dialog = document.querySelector('dialog');
    dialog.showModal()
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault()
        let form = document.getElementById('form')
        const inputp1 = document.querySelector('#p1').value;
        const inputp2 = document.querySelector('#p2').value;
        let textp1 = document.querySelector('.play1name');
        textp1.textContent = inputp1;
        let textp2 = document.getElementById('play2name');
        textp2.textContent = inputp2;
        dialog.close()
        form.reset()
    })
})

// New Game