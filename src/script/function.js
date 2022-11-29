// accordion
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("details").forEach(function (item) {
    item.addEventListener("toggle", (event) => {
      let toggled = event.target;
      if (toggled.attributes.open) {
        /* 열었으면 */
        /* 나머지 다른 열린 아이템을 닫음 */
        document.querySelectorAll("details[open]").forEach(function (opened) {
          if (toggled != opened)
            /* 현재 열려있는 요소가 아니면 */
            opened.removeAttribute("open"); /* 열림 속성 삭제 */
        });
      }
    });
  });
});

$(function () {
  /**
   * db 호출
   */
  var data;
  const dbRef = firebase.database().ref("/space");
  dbRef
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();

        console.log(data);
        floorList.forEach((element) => {
          let building =
            element.parentNode.parentNode.parentNode.firstChild.name;
          let floor = element.name;
          let cardList = createCard(
            filterDataByBuilding(data, building, floor)
          );
          cardList.forEach((card) => {
            element.parentNode.appendChild(card);
          });

          element.addEventListener("click", () => {
            console.log("clicked");
            if (element === currentFloor) {
              removeActiveFloor(element);
              currentFloor = null;
            } else {
              if (currentFloor) {
                removeActiveFloor(currentFloor);
              }
              addActiveFloor(element);
              currentFloor = element;
            }
          });
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

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
});
