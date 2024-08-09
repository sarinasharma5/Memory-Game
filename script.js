let gameBoard = document.querySelector('.board');
let resetbutton = document.querySelector('.button');
let gamecharacters = ['A','A','B','B','C','C','D','D','E','E','F','F'];

let values = gamecharacters.sort(() => Math.random() -0.5);
let selectedvalues = [];
let totalpair = gamecharacters.length / 2;
let Matchedpair = 0;
values.forEach ((item,index)  => {
    let card = document.createElement('div');
    card.className = 'card';
    card.textContent = item;
    console.log(values);
    gameBoard.append(card);

    card.addEventListener('click',flip);
    })
//         card.classList.toggle('flip');
//         //console.log(card);
//         selectedvalues.push(card);
//         if (selectedvalues.length == 2) {
//             if (selectedvalues [0].textContent === selectedvalues[1].textContent){
//                 alert("Matched");
//             }
//         }
//     });
// })
    
  function flip() {
     this.classList.toggle('flip');
     selectedvalues.push(this);
     if (selectedvalues.length == 2) { 
        setTimeout(checkForMatch,500);
     }
    }

         //if(selectedvalues [0].textContent === selectedvalues [1].textContent) {
        //     alert("Matched");
        // }
     function checkForMatch() {
        if(selectedvalues [0].textContent === selectedvalues [1].textContent) {
            selectedvalues[0].removeEventlistener("click",flip);
            selectedvalues[1].removeEventlistener("click",flip);
            Matchedpair++;
            if (Matchedpair == totalpair) {
                alert("You Won !!!");
            }
     } else {
        selectedvalues[0].classList.remove('flip');
        selectedvalues[1].classList.remove('flip');
     }
      selectedvalues = [];
    }

    resetbutton.addEventListener('click',function(){
        window.location.reload();
    });