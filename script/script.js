const date = new Date();
const today = date.getDay();

const foodList = ["Stängt", "Kroppkakor", "Hamburgare & Pommes", "Pizza", "Flygande Jakob", "Biff med Bea", "Stängt"];
const showMenu = document.getElementById("lunch");

switch (today) {
    case 0:
        showMenu.innerText = "Söndag: " + foodList[0];
        break;
    case 1:
        showMenu.innerText = "Måndag: " + foodList[1];
        console.log(foodList[1]);
    break;
    case 2:
        showMenu.innerText = "Tisdag: " + foodList[2];
        console.log(foodList[2]);
    break;
    case 3:
        showMenu.innerText = "Onsdag: " + foodList[3];
        console.log(foodList[3]);
        break;
    case 4:
        showMenu.innerText = "Torsdag: " + foodList[4];
        console.log(foodList[4]);
        break;
    case 5:
        showMenu.innerText = "Fredag: " + foodList[5];
        console.log(foodList[5]);
        break;
    case 6:
        showMenu.innerText = "Lördag: " + foodList[6];
    default: 
    console.log("Stängt!");
}

// function whatDay() {
//     let day;
//     switch (new Date().getDay())
//     {
//         case 0: "Kroppkakor";
//         break;
//         case 1: "Hamburgare & Pommes";
//         break;
//         case 2: "Pizza";
//         break;
//         case 3: "Flygande Jakob";
//         break;
//         case 4: "Biff med Bea";
//         break;
//         case 5: "Stängt";
//         break;
//         case 6: "Stängt";
//         break;
//         default:
//             day = "Unknown Day";
//     }
//     document.getElementById("lunch").innerHTML = day; + 
// }