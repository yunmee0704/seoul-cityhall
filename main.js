const news_wrap = document.querySelector('.news_wrap')
const news_slider = document.querySelector('.news_wrap ul')
const news_sliders = document.querySelectorAll('.news_wrap ul li')
const area = document.querySelector('.inner1')
const parti_wrap = document.querySelector('.paricipation_wrap')
const parti_slider = document.querySelector('.paricipation_wrap ul')
const parti_sliders = document.querySelectorAll('.paricipation_wrap ul li')
const parti_area = document.querySelector('.parti')
const btn = document.querySelector('.head_line')
let i = 0;



const news_slideFirst = news_sliders[0];
const news_slideLast = news_sliders[news_sliders.length - 1];
const news_cloneFirst = news_slideFirst.cloneNode(true);
const news_cloneLast = news_slideLast.cloneNode(true);
news_slider.insertBefore(news_cloneLast, news_slideFirst);
news_slider.appendChild(news_cloneFirst);


    let idx = -1;
    news_slider.style.left = `${idx * 100}%`
window.addEventListener('load', event => {
    
setInterval(() => {

    
    
    news_slider.style.left = `${idx * 100}%`
    idx--;
    

    if (idx === -news_sliders.length -1) {

        idx = 0;
        news_slider.style.left = `${idx * 100}%`

    }

}, 2000)})


btn.addEventListener('click', e => {
    target = e.target;
    if (target.className === "next" && i < news_sliders.length - 1) {
        i += 1;
        news_slider.style.left = `-${100 * i}%`
    }
    if (target.className === "prev" && i > 0) {
        i -= 1;
        news_slider.style.left = `-${100 * i}%`

    }
    
});
area.addEventListener('click', e => {
    target = e.target;
   
    if (target.className === "news") {
        news_wrap.style.display = "flex"
        parti_wrap.style.display = "none"

    } else if (target.className === "pari") {
        news_wrap.style.display = "none"
        parti_wrap.style.display = "flex"

        let index =-1;
        parti_slider.style.left = `${index * 100}%`

       
        const parti_slideFirst = parti_sliders[0];
        const parti_slideLast = parti_sliders[parti_sliders.length - 1];
        const parti_cloneFirst = parti_slideFirst.cloneNode(true);
        const parti_cloneLast = parti_slideLast.cloneNode(true);
        parti_slider.insertBefore(parti_cloneLast, parti_slideFirst);
        parti_slider.appendChild(parti_cloneFirst);
        
        
       
        setInterval(() => {
            
            index--;
            
            parti_slider.style.left = `${index * 100}%`


            if (index === - parti_sliders.length - 1) {

                index = -1;
                parti_slider.style.left = `${index * 100}%`

            }
            console.log(index)
        }, 5000)

 
        
        btn.addEventListener('click', e => {
            target = e.target;
            if (target.className === "next" && i < parti_sliders.length - 1) {
                i += 1;
                parti_slider.style.left = `-${100 * i}%`
            }
            if (target.className === "prev" && i > 0) {
                i -= 1;
                parti_slider.style.left = `-${100 * i}%`

            }
            
            
        });
    }


})





const bottom_slider = document.querySelector('.bottom_sliders')
const bottom_sliders = document.querySelectorAll('.bottom_sliders li')

const bottom_slideFirst = bottom_sliders[0];
const bottom_slideLast = bottom_sliders[bottom_sliders.length - 1];
const bottom_cloneFirst = bottom_slideFirst.cloneNode(true);
const bottom_cloneLast = bottom_slideLast.cloneNode(true);
bottom_slider.insertBefore(bottom_cloneLast, bottom_slideFirst);
bottom_slider.appendChild(bottom_cloneFirst);

let num=-1;
bottom_slider.style.left = `${num * 100}%`

window.addEventListener('load', event => {
setInterval(() => {
 
    num--;
  
    bottom_slider.style.left = `${num * 100}%`


    if (num === -(bottom_sliders.length/3)) {

        num = -1;
        bottom_slider.style.left = `${num * 120}%`

    }

}, 2000)})


const dropdown = document.querySelector('.nav_menu')
const option=document.querySelectorAll('.option')
console.log(option[0])

dropdown.addEventListener("click", e => {
    target=e.target;
    console.log(target.textContent)
    if(target.textContent === "직속기관 사업소"){
        target.classList.toggle("active")
        option[0].style.display="block"
        if(target.classList.value !== "active"){
            option[0].style.display="none"
        }
    }
    else if(target.textContent === "공사 출연기관"){
        target.classList.toggle("active")
        option[1].style.display="block"
        if(target.classList.value !== "active"){
            option[1].style.display="none"
        }
    } else if(target.textContent === "자치구"){
        target.classList.toggle("active")
        option[2].style.display="block"
        if(target.classList.value !== "active"){
            option[2].style.display="none"
        }
    }
})