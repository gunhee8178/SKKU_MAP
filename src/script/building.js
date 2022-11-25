const buildingList = document.querySelectorAll('.building');

function addActive(building) {
    building.parentNode.classList.add("active");
}

function removeActive(building) {
    building.parentNode.classList.remove("active");
}

function removeActives(buildingList) {
    buildingList.forEach(building => {
        building.parentNode.classList.remove("active");
    });   
}

buildingList.forEach(building => {
    building.addEventListener('click', ()=>{
        if(building.parentNode.classList.contains("active")){
            removeActive(building);
        }else{
            removeActives(buildingList);
            addActive(building);
        }
        
    });
});