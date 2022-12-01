const tabList = document.querySelectorAll('.tab_menu .menu li');
const contents = document.querySelectorAll('.cont_area .cont');
const area = document.querySelector('.cont_area');
const circleList = document.querySelectorAll('.tab_menu .menu li a');
const iconList = document.querySelectorAll('.tab_menu .menu li a i');

let activeCont = '';
// tabList[0].querySelector('.btn').addEventListener('click', function (e) {
//     e.preventDefault();
//     area.style.display = "none";
//     for (var j = 0; j < tabList.length; j++) {
//         circleList[j].style.backgroundColor = "#2E4623";
//         iconList[j].style.color = '#929292';
//         tabList[j].style.color = "#929292";
//     }
// });
for (var i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        if(this.parentNode.classList.contains('is_on')){
            area.style.display = 'none';
            for (var j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('is_on');
                contents[j].style.display = 'none';
                circleList[j].style.backgroundColor = "#2E4623";
                iconList[j].style.color = "#929292";
                tabList[j].style.color = '#929292';
            }
        }
        else{
            area.style.display = 'block';
            for (var j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('is_on');
                contents[j].style.display = 'none';
                circleList[j].style.backgroundColor = "#2E4623";
                iconList[j].style.color = "#929292";
                tabList[j].style.color = '#929292';
            }
            this.parentNode.classList.add('is_on');
            activeCont = this.getAttribute('href');
            this.style.color = "#ffffff";
            document.querySelector(activeCont).style.display = 'block';
            this.style.backgroundColor = "#728975";
            this.parentNode.style.color = "#ffffff";
            this.childNodes[0].style.color = "#fff";
        }
    });
}



// document.querySelector('#test').addEventListener('click', ()=>{
//     console.log( document.querySelector('#test').name)
// })