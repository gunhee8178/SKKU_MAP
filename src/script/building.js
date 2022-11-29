const buildingList = document.querySelectorAll(".building");
let currentActive = null;

const floorList = document.querySelectorAll(".floor");
let currentFloor = null;

function addActiveBuilding(building) {
  building.parentNode.classList.add("activeBuilding");
}

function removeActiveBuilding(building) {
  building.parentNode.classList.remove("activeBuilding");
}

function addActiveFloor(floor) {
  floor.parentNode.classList.add("activeFloor");
}

function removeActiveFloor(floor) {
  floor.parentNode.classList.remove("activeFloor");
}

function filterDataByBuilding(data, building, floor) {
  let filteredData = [];

  for (const [key, value] of Object.entries(data)) {
    if (value.location == building && value.floor == parseInt(floor)) {
      filteredData.push(value);
    }
  }
  return filteredData;
}

function createCard(filteredData) {
  let cardList = [];
  filteredData.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = element.img
      ? element.img
      : "https://firebasestorage.googleapis.com/v0/b/skku-map-b85b1.appspot.com/o/building%2Fno-image-icon-6.png?alt=media&token=973e7766-366f-4ffb-bf20-0827534a4227";
    img.alt = "Card image cap";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.textContent = element.name;

    let p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML =
      (element.purpose ? element.purpose + "<br/>" : "") +
      (element.semester_time ? element.semester_time + "<br/>" : "") +
      (element.equipment ? element.equipment + "<br/>" : "") +
      (element.etc ? element.etc : "");

    let a = document.createElement("a");
    a.href = element.url ? element.url : "#";

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardList.push(card);
  });
  return cardList;
}

// buildingList.forEach(building => {
//     building.addEventListener('click', ()=>{
//         if( building === currentActive ){
//             removeActiveBuilding(building);
//             currentActive = null;
//         }else{
//             if(currentActive){
//                 removeActiveBuilding(currentActive);
//             }
//             if(currentFloor){
//                 removeActiveFloor(currentFloor);
//             }
//             addActiveBuilding(building);
//             currentActive = building;
//         }
//     });
// });
