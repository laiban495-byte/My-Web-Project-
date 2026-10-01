/* =====================================================
   NICE TAILORS
   COMPLETE JAVASCRIPT
===================================================== */


/* =====================================================
   FIRST PAGE → ENTER WEBSITE
===================================================== */

const enterButton =
    document.getElementById("enterButton");

const introScreen =
    document.getElementById("introScreen");

const website =
    document.getElementById("website");


enterButton.addEventListener("click", function () {

    /* First page exit animation */

    introScreen.classList.add("intro-exit");


    /* Wait for animation */

    setTimeout(function () {

        introScreen.style.display = "none";

        website.classList.add("website-show");

        /* Put user at top of website */

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 800);

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

});


/* Close menu after clicking a link */

const navigationLinks =
    document.querySelectorAll("#navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

    });

});



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* =====================================================
   AI TRY-ON — PHOTO UPLOAD
===================================================== */

// const photoUpload =
//     document.getElementById("photoUpload");

// const uploadedPhoto =
//     document.getElementById("uploadedPhoto");

// const photoPreview =
//     document.getElementById("photoPreview");


// photoUpload.addEventListener("change", function () {

//     const file =
//         this.files[0];


//     if (!file) {
//         return;
//     }


//     const reader =
//         new FileReader();


//     reader.onload = function (event) {

//         uploadedPhoto.src =
//             event.target.result;

//         uploadedPhoto.style.display =
//             "block";


//         const placeholder =
//             photoPreview.querySelector("span");


//         if (placeholder) {
//             placeholder.style.display =
//                 "none";
//         }


//         checkTryOnReady();

//     };


//     reader.readAsDataURL(file);

// });



/* =====================================================
   OUTFIT SELECTION
===================================================== */

// const outfitOptions =
//     document.querySelectorAll(".outfit-option");


// let selectedOutfit = null;


// outfitOptions.forEach(function (option) {

//     option.addEventListener("click", function () {

//         outfitOptions.forEach(function (item) {

//             item.classList.remove("selected");

//         });


//         this.classList.add("selected");


//         selectedOutfit =
//             this.dataset.outfit;


//         checkTryOnReady();

//     });

// });



/* =====================================================
   CHECK TRY-ON
===================================================== */

// const tryonButton =
//     document.getElementById("tryonButton");


// function checkTryOnReady() {

//     if (
//         photoUpload.files.length > 0 &&
//         selectedOutfit
//     ) {

//         tryonButton.disabled = false;

//     } else {

//         tryonButton.disabled = true;

//     }

// }



/* =====================================================
   TRY-ON PREVIEW
===================================================== */

// const resultPreview =
//     document.getElementById("resultPreview");

// const resultImage =
//     document.getElementById("resultImage");

// const resultMessage =
//     document.getElementById("resultMessage");


// tryonButton.addEventListener("click", function () {

//     if (
//         photoUpload.files.length === 0 ||
//         !selectedOutfit
//     ) {

//         return;

//     }


    /*
       FRONT-END DEMO

       A real AI virtual try-on requires
       an AI backend/API.

       For now we show the uploaded photo
       as the preview.
//     */


//     resultImage.src =
//         uploadedPhoto.src;

//     resultImage.style.display =
//         "block";


//     resultMessage.style.display =
//         "none";


//     resultPreview.style.borderColor =
//         "#d4af37";

// });



/* =====================================================
   REVIEWS
===================================================== */

const reviewForm =
    document.getElementById("reviewForm");

const reviewsGrid =
    document.getElementById("reviewsGrid");


reviewForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("reviewName").value;

    const rating =
        document.getElementById("reviewRating").value;

    const text =
        document.getElementById("reviewText").value;


    let stars = "";

    for (
        let i = 0;
        i < Number(rating);
        i++
    ) {

        stars += "★";

    }


    for (
        let i = Number(rating);
        i < 5;
        i++
    ) {

        stars += "☆";

    }


    const reviewCard =
        document.createElement("div");


    reviewCard.className =
        "review-card";


    reviewCard.innerHTML = `

        <div class="review-stars">
            ${stars}
        </div>

        <h4>
            ${escapeHTML(name)}
        </h4>

        <p>
            ${escapeHTML(text)}
        </p>

    `;


    reviewsGrid.appendChild(reviewCard);


    reviewForm.reset();


    alert(
        "Thank you for your review!"
    );

});



/* =====================================================
   SECURITY HELPER
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}



/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});