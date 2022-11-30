const timeList = document.querySelectorAll('.time');
let currentTime = null;

function addActiveTime(time) {
    time.parentNode.classList.add("activeTime");
}

function removeActiveTime(time) {
    time.parentNode.classList.remove("activeTime");
}
function filterDataByTime(data, time){
    let filteredData = [];
    
    for (const [key, value] of Object.entries(data)) {
        if (time == '이용시간확인'){
            if( !value.semester_time){
                filteredData.push(value);
            }
        }
        else if( time == "24시간" && value.semester_time === '24h'){
            filteredData.push(value);
        } 
        else if(time == "주말" && value.semester_time.indexOf('일'||'토')>-1){
            filteredData.push(value);
        } 
    }
    return filteredData;
}

function createTimeCard(filteredData, time){
    let timeCardList = [];
    filteredData.forEach(element => {
        
        let card = document.createElement("div");
        card.className = "card card-time";

        let img = document.createElement("img");
        img.className = "card-img-mid";
        img.src = element.img ? element.img : "https://firebasestorage.googleapis.com/v0/b/skku-map-b85b1.appspot.com/o/building%2Froom-studyroom.gif?alt=media&token=0e1464fd-d112-4a07-bc7e-3bcdb36274f6";
        img.alt = "Card image cap"

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let h5 = document.createElement("h5");
        h5.className = "card-title"
        h5.textContent = element.name;

        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = element.equipment ? element.equipment +"<br/>" : "";

        let pTime = document.createElement("p");
        pTime.className = "card-time";
        pTime.innerHTML = element.semester_time ? element.semester_time + "<br/>" + (element.etc? element.etc : "") : element.etc;

        let a = document.createElement("a");
        a.href = element.url ? element.url : "#";

        let t = document.createElement("p");
        if(time == "24시간"){
            t.className = "card-location";
            t.innerHTML = element.location ? element.location +"<br/>" : "";
        }

        cardBody.appendChild(h5);
        cardBody.appendChild(img);
        cardBody.appendChild(pTime);
        cardBody.appendChild(p);
        cardBody.appendChild(t);
        cardBody.appendChild(a);

        
        card.appendChild(cardBody);

        timeCardList.push(card);
    });
    return timeCardList;
}

