/*const calcBmi1 = () => {
    const gewicht = document.getElementById("gewicht").value
    const groesse = document.getElementById("groesse").value
   
   const bmi = (gewicht / groesse ** 2) * 100 *100;
   const ausgabe = document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) ;


   if (bmi < 18.5) {
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + " Sie sind  untergewichtig!"

   } else if (bmi >= 18.5 && bmi < 24.9){
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + "   Sie sind  normalgewichtig!"

   } else if (bmi >= 25 && bmi < 29.9){
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + "   Sie sind  übergewichtig!"

   } else if (bmi >= 30 && bmi < 34.9){
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + "   Sie sind  adipos - Grad I!"

   } else if (bmi >= 35 && bmi < 39.9){
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + "   Sie sind  adipos - Grad II!"

   } else if (bmi >= 40){
        document.getElementById("bmiWert").innerHTML = "Ihr BMI beträgt: " + bmi.toFixed(1) + "   Sie sind  adipos - Grad III!"
   }


};*/

const calcBmi = () => {
  const gewicht = document.getElementById("gewicht").value;
  const groesse = document.getElementById("groesse").value;
  const select = document.getElementById("geschlecht");
  const geschlecht = select.options[select.selectedIndex].value;
  const bmi = (gewicht / groesse ** 2) * 100 * 100;

  if (geschlecht === "maennlich") {
    switch (true) {
      case bmi < 16:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind stark untergewichtig";
        break;
      case bmi >= 16 && bmi <= 16.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind mäßig untergewichtig";
        break;
      case bmi >= 17 && bmi <= 18.4:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind leicht untergewichtig";
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind normalgewichtig";
        break;
      case bmi >= 25 && bmi <= 29.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind übergewichtig <br> (Präadipositas)";
        break;
      case bmi >= 25 && bmi <= 29.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind übergewichtig <br> (Präadipositas)";
        break;
      case bmi >= 30 && bmi <= 34.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind fettleibig <br> (Adipositas Grad I)";
        break;
      case bmi >= 35 && bmi <= 39.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind adipos <br> (Adipositas Grad II)";
        break;
      case bmi >= 40:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br>Sie sind adipos <br> (Adipositas Grad III)";
        break;
    }
  } else {
    switch (true) {
      case bmi < 15:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind stark untergewichtig";
        break;
      case bmi >= 15 && bmi <= 15.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind mäßig untergewichtig";
        break;
      case bmi >= 16 && bmi <= 17.4:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind leicht untergewichtig";
        break;
      case bmi >= 17.5 && bmi <= 23.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind normalgewichtig";
        break;
      case bmi >= 24 && bmi <= 28.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind übergewichtig <br> (Präadipositas)";
        break;
      case bmi >= 24 && bmi <= 28.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind übergewichtig <br> (Präadipositas)";
        break;
      case bmi >= 29 && bmi <= 33.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind fettleibig <br> (Adipositas Grad I)";
        break;
      case bmi >= 34 && bmi <= 38.9:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br> Sie sind adipos <br> (Adipositas Grad II)";
        break;
      case bmi >= 39:
        document.getElementById("bmiWert").innerHTML =
          "Ihr BMI beträgt: " +
          bmi.toFixed(0) +
          "<br> <br>Sie sind adipos <br> (Adipositas Grad III)";
        break;
    }
  }
};
