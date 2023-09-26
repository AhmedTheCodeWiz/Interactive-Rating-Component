const ratings = document.querySelectorAll(".num-rating span");
const submit = document.querySelector(".submit");
const ratingSection = document.querySelector(".rating-section")
const thankSection = document.querySelector(".thank-section")
const userRating = document.querySelector(".user-rating")

let rate = null;

thankSection.style.display = 'none';
ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active){
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

submit.addEventListener("click", function (event){
    if(rate!=null){
        ratingSection.style.display= "none";
        thankSection.style.display = 'block';
        userRating.innerText = rate;
    }
    else{
        console.log("choose a rating to continue")
    }
})