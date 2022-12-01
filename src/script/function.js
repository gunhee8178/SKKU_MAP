// 기능별 분류
const functionList = document.querySelectorAll(".function");
let currentFunction = null;

function filterDataByFunction(data, func) {
  let filteredData = [];
  for (const [key, value] of Object.entries(data)) {
    dbFunct = value.funct;
    if (dbFunct && dbFunct.includes(func)) {
      filteredData.push(value);
    }
  }
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

let deleteFunctCard = () => {
  $(".accordion-body-study").empty();
};

let filterDataByAtm = (data, filArray) => {
  let filteredData = [];
  for (const [key, value] of Object.entries(data)) {
    dbAtmosphere = value.atmosphere;
    console.log("dbAtmostphere:", dbAtmosphere);
    console.log("filArray:", filArray);
    if (
      filArray[0] == "" &&
      filArray[1] == "" &&
      filArray[2] == "" &&
      filArray[3] == "" &&
      filArray[4] == ""
    ) {
      filteredData.push(value);
    } else if (dbAtmosphere) {
      if (
        dbAtmosphere.includes(filArray[0]) &&
        dbAtmosphere.includes(filArray[1]) &&
        dbAtmosphere.includes(filArray[2]) &&
        dbAtmosphere.includes(filArray[3]) &&
        dbAtmosphere.includes(filArray[4])
      ) {
        filteredData.push(value);
      }
    }
    console.log("filteredData", filteredData);
  }
  return filteredData;
};

/**
 * 버튼 토글 기능
 */

let toggleEvent = (chArr, filArr) => {
  if (chArr[0] % 2 === 1) {
    filArr[0] = "조용";
  } else {
    filArr[0] = "";
  }

  if (chArr[1] % 2 === 1) {
    filArr[1] = "생활소음";
  } else {
    filArr[1] = "";
  }

  if (chArr[2] % 2 === 1) {
    filArr[2] = "카페";
  } else {
    filArr[2] = "";
  }

  if (chArr[3] % 2 === 1) {
    filArr[3] = "편안";
  } else {
    filArr[3] = "";
  }

  if (chArr[4] % 2 === 1) {
    filArr[4] = "공간";
  } else {
    filArr[4] = "";
  }
};

let checkArr = [0, 0, 0, 0, 0];
let filterArr = ["", "", "", "", ""];

const toggleBtn = (num, event) => {
  checkArr[num]++;
  if (checkArr[num] % 2 === 1) {
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
  deleteFunctCard();
  toggleEvent(checkArr, filterArr);

  functionList.forEach((element) => {
    let funct = element.childNodes[1].childNodes[1].value;
    console.log("filterArr:", filterArr);
    console.log("checkArr:", checkArr);
    if (funct === "공부") {
      let cardList = createFunctCard(filterDataByAtm(data, filterArr));
      cardList.forEach((card) => {
        element.childNodes[3].childNodes[1].childNodes[5].appendChild(card);
      });
    }
  });
});

$("#natural-noise-btn").click((event) => {
  toggleBtn(1, event);
  deleteFunctCard();
  toggleEvent(checkArr, filterArr);

  functionList.forEach((element) => {
    let funct = element.childNodes[1].childNodes[1].value;

    if (funct === "공부") {
      let cardList = createFunctCard(filterDataByAtm(data, filterArr));
      cardList.forEach((card) => {
        element.childNodes[3].childNodes[1].childNodes[5].appendChild(card);
      });
    }
  });
});

$("#cafe-btn").click((event) => {
  toggleBtn(2, event);
  deleteFunctCard();
  toggleEvent(checkArr, filterArr);

  functionList.forEach((element) => {
    let funct = element.childNodes[1].childNodes[1].value;

    if (funct === "공부") {
      let cardList = createFunctCard(filterDataByAtm(data, filterArr));
      cardList.forEach((card) => {
        element.childNodes[3].childNodes[1].childNodes[5].appendChild(card);
      });
    }
  });
});

$("#comfort-btn").click((event) => {
  toggleBtn(3, event);
  deleteFunctCard();
  toggleEvent(checkArr, filterArr);

  functionList.forEach((element) => {
    let funct = element.childNodes[1].childNodes[1].value;

    if (funct === "공부") {
      let cardList = createFunctCard(filterDataByAtm(data, filterArr));
      cardList.forEach((card) => {
        element.childNodes[3].childNodes[1].childNodes[5].appendChild(card);
      });
    }
  });
});

$("#individual_btn").click((event) => {
  toggleBtn(4, event);
  deleteFunctCard();
  toggleEvent(checkArr, filterArr);

  functionList.forEach((element) => {
    let funct = element.childNodes[1].childNodes[1].value;

    if (funct === "공부") {
      let cardList = createFunctCard(filterDataByAtm(data, filterArr));
      cardList.forEach((card) => {
        element.childNodes[3].childNodes[1].childNodes[5].appendChild(card);
      });
    }
  });
});
