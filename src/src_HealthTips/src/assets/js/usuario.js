/*by Franks*/
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
   event.preventDefault();

   const weight = document.getElementById('weight').value;
   const height = document.getElementById('height').value;

   const bmi = (weight / (height * height)).toFixed(2);

   const value = document.getElementById('value');
   let description ='';

   value.classList.add('attention');

   document.getElementById('infor').classList.remove('hidden');

   if (bmi < 18.5){
    description = 'Cuidado! Voçe está abaixo do peso!';
   } else if ( bmi >= 18.5 && bmi <= 25){
    description = "Voçe está no peso ideal!";
    value.classList.remove('attention');
    value.classList.add('normal');
   } else if ( bmi >= 25 && bmi <= 30){
    description = " Cuidado! Voçe está no peso sobrepeso!";
   } else if ( bmi >= 30 && bmi <= 35){
    description = "Cuidado! Voçe está com obesidade moderada!";
   } else if ( bmi >= 35 && bmi <= 40){
    description = "Cuidado! Voçe está com obesidade severa!";
   } else {
    description = "Cuidado! Voçe está com obesidade morbida!";
   }
    
   value.textContent = bmi.replace('.',',');
   document.getElementById('description').textContent = description;

});

