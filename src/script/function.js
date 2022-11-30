// 기능별 분류
const functionList = document.querySelectorAll(".function");
let currentFunction = null;

// function addActiveFunction(func) {
//   building.parentNode.classList.add("activeBuilding");
// }

// function removeActiveFunction(func) {
//   building.parentNode.classList.remove("activeBuilding");
// }

function filterDataByFunction(data, func) {
  let filteredData = [];
  for (const [key, value] of Object.entries(data)) {
    dbFunct = value.funct;
    if (dbFunct && dbFunct.includes(func)) {
      filteredData.push(value);
    }
  }
  console.log("filteredData", filteredData);
  return filteredData;
}

function createFunctCard(filteredData) {
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

/**
 * 버튼 토글 기능
 */
let check_arr = [0, 0, 0, 0, 0];
const toggleBtn = (num, event) => {
  check_arr[num]++;
  if (check_arr[num] % 2 === 1) {
    $(event.target).css("background-color", "#2E4623");
    $(event.target).css("color", "#d9d9d9");
    $(event.target).attr("class", "on-btn");
  } else {
    $(event.target).css("background-color", "#d9d9d9");
    $(event.target).css("color", "#2E4623");
    $(event.target).attr("class", "off-btn");
  }
};
$("#silence-btn").click((event) => {
  toggleBtn(0, event);
});

$("#natural-noise-btn").click((event) => {
  toggleBtn(1, event);
});

$("#cafe-btn").click((event) => {
  toggleBtn(2, event);
});

$("#comfort-btn").click((event) => {
  toggleBtn(3, event);
});

$("#individual_btn").click((event) => {
  toggleBtn(4, event);
});

// accordion
// window.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll("details").forEach(function (item) {
//     item.addEventListener("toggle", (event) => {
//       let toggled = event.target;
//       if (toggled.attributes.open) {
//         /* 열었으면 */
//         /* 나머지 다른 열린 아이템을 닫음 */
//         document.querySelectorAll("details[open]").forEach(function (opened) {
//           if (toggled != opened)
//             /* 현재 열려있는 요소가 아니면 */
//             opened.removeAttribute("open"); /* 열림 속성 삭제 */
//         });
//       }
//     });
//   });
// });
