const texts = ["Hello world!", "Nibras here"];
let count = 0;
let index = 0;
let currentText = "";


(function type()
  {
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".main_plate").textContent = letter;
    if(letter.length === currentText.length){
          count++;
          index = 0;
         }
    setTimeout(type, 400);
    }
)();

