// "use strict";
// for displaying results
let output = document.getElementById('output');


// getting the number input
let numInput = document.getElementById("numberInput");


// selecting the outputs
let firstOutput = document.getElementById('firstOutput');
let secondOutput = document.getElementById('secondOutput');
let thirdOuput = document.getElementById('thirdOutput');
let FourthOutput = document.getElementById('FourthOutput');
let fifthOutput = document.getElementById('fifthOutput');
let sixthOutput = document.getElementById('sixthOutput');
let lastOutput = document.getElementById('lastOutput');

numInput.onchange = function(e){
    let numValue = e.target.value;
    getSelectedVal(numValue);
}



function getSelectedVal(numV){
    let weightCategory = document.getElementById('category');
    
    weightCategory.onchange = function (e){
    
        let weightVal = e.target.value;
            if(weightVal == 'Pound'){
                  let output = numV * 453.592;
                //   for grams
                      firstOutput.innerHTML = output;

                // for Tonne
                secondOutput.innerHTML = numV / 2204.23;

                // for miligram
                thirdOuput.innerHTML = numV * 453592.37;

                // for micro
                FourthOutput.innerHTML = numV * 4.53600000;

                // for kilograms
                fifthOutput.innerHTML = numV / 2.205;

                // for stone
                sixthOutput.innerHTML = numV / 14;

                // ounce
                lastOutput.innerHTML = numV * 16;
            }

            // checking for grams
            if(weightVal == 'Grams'){
                let first = document.getElementById('first');
                 first.innerHTML = 'Pounds';

                //  for pounds
                firstOutput.innerHTML = numV / 453.592;

                // for tonne
                secondOutput.innerHTML = numV / 1000000;

                // mili
                thirdOuput.innerHTML = numV * 1000;

                // for micro
                FourthOutput.innerHTML = numV * 1000000;

                // for kilo
                fifthOutput.innerHTML = numV / 1000;

                // for stone
                sixthOutput.innerHTML = numV / 6350.293;

                // for ounce
                lastOutput.innerHTML = numV / 28.35;
            
            }

            // checking tonne
            if(weightVal == 'Tonne'){
                let second = document.getElementById('second');
                second.innerHTML = 'Pounds';

                // for grams
                firstOutput.innerHTML = numV * 1000000;

                // for pounds
                secondOutput.innerHTML = numV * 2204.623;

                // mili
                thirdOuput.innerHTML = numV * 1000000000;

                // for micro
                FourthOutput.innerHTML = numV * 1000000000000;

                // for kilo
                fifthOutput.innerHTML = numV * 1000;

                // for stone
                sixthOutput.innerHTML = numV * 157.473;

                // for ounce
                lastOutput.innerHTML = numV * 35273.962;
            }

            // checking for miligram
            if(weightVal == 'Miligram'){
                let third = document.getElementById('third');
                third.innerHTML = 'Pound';

                // for grams
                firstOutput.innerHTML = numV / 1000;

                // for tonne
                secondOutput.innerHTML = numV / 1000000000;

                // for pound
                thirdOuput.innerHTML = numV / 453592.37;

                // for microgram 
                FourthOutput.innerHTML = numV * 1000;

                // for kilo
                fifthOutput.innerHTML = numV / 1000000;

                // for stone
                sixthOutput.innerHTML = numV / 6350000;

                // for ounce
                lastOutput.innerHTML = numV / 28349.523;
            }

            // for micro
            if(weightVal == 'Microgram'){
                let fourth = document.getElementById('fourth');
                fourth.innerHTML = 'Pound';

                // for grams
                firstOutput.innerHTML = numV / 1000000;

                // for tonne
                secondOutput.innerHTML = numV / 1000000000000;

                // for miligram
                thirdOuput.innerHTML = numV / 1000;

                // for pound
                FourthOutput.innerHTML = numV / 453600000;

                // for kilo
                fifthOutput.innerHTML = numV / 1000000000;

                // for stone
                sixthOutput.innerHTML = numV / 6350000000;

                // for ounce
                lastOutput.innerHTML = numV / 28350000;

            }
            // testing for kilograms
            if(weightVal == 'Kilogram'){
                let fifth = document.getElementById('fifth');
                fifth.innerHTML = 'Pound';

                // grams
                firstOutput.innerHTML = numV * 1000;

                // tonne
                secondOutput.innerHTML = numV / 1000;

                // miligram
                thirdOuput.innerHTML = numV * 1000000;

                // microgram
                FourthOutput.innerHTML = numV * 1000000000

                // pound
                fifthOutput.innerHTML = numV * 2.205;

                // stone
                sixthOutput.innerHTML = numV / 6.35;

                // ounce 
                lastOutput.innerHTML = numV * 35.274;

            }

            // stone
            if(weightVal == 'Stone'){
                let sixth = document.getElementById('sixth');
                sixth.innerHTML = 'Pound'

                  // grams
                  firstOutput.innerHTML = numV * 6350.293;

                  // tonne
                  secondOutput.innerHTML = numV / 157.473
  
                  // miligram
                  thirdOuput.innerHTML = numV * 6350000;
  
                  // microgram
                  FourthOutput.innerHTML = numV * 6350000000;
  
                  // kilo
                  fifthOutput.innerHTML = numV * 6.35;

                //   pounds
                sixthOutput.innerHTML = numV * 14;

                // ounce
                lastOutput.innerHTML = numV * 224;
            }

            // for ounce 
            if(weightVal == 'Ounce'){
                let last = document.getElementById('last');
                last.innerHTML = 'Pound';
                // gram
                firstOutput.innerHTML = numV * 28.35;

                // tonne
                secondOutput.innerHTML = numV / 35273.926;

                // miligram
                thirdOuput.innerHTML = numV * 28349523;

                // microgram
                FourthOutput.innerHTML = numV * 28350000;

                // kilo
                fifthOutput.innerHTML = numV / 35.274;

                  // stone
                  sixthOutput.innerHTML = numV / 224;

                //   pound
                lastOutput.innerHTML = numV / 16;
            }
    }
}

   