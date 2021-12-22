
// --------------------------------------------------------------- PROJECT No. 2_JAVASCRIPT BOOKS. ----------------------------------------------------------------

//   On this project, we will be developing a website using only javascript.      
//   All the elements that I crete are placed in the javas cript folder.     
//   For more information, you can send me an email o contact me by message.     

// ortiz.mata.jorge@gmail.com 
// (444) 576 3034  

// --------------------------------------------------------------------- JAVASCRIPT CODE. ------------------------------------------------------------------------

// ---------------------------------------------------------------------- HEADER SECTION -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS -------------------------

const headerSection = document.createElement ('header');
const navSection = document.createElement ('nav');

const partSuperior = document.createElement ('div');

const logoSection = document.createElement ('div');
const logoImage = document.createElement ('img');
const logoName = document.createElement ('p');

const menuSection = document.createElement ('div');
const unorderList = document.createElement ('ul');
const homeObject = document.createElement ('li');
const aboutObject = document.createElement ('li');
const contactObject = document.createElement ('li');

const partInferior = document.createElement ('div');

const exploreSection = document.createElement ('div');
const exploreImage = document.createElement ('img');
const exploreTitle = document.createElement ('h1');
const exploreDescription = document.createElement ('p');
const exploreLink = document.createElement ('p');
const exploreButton = document.createElement ('button');

// ------------------------- APPEND OBJECTS -------------------------

document.body.appendChild (headerSection);
headerSection.appendChild (navSection);

navSection.appendChild (partSuperior);
navSection.appendChild (partInferior);

partSuperior.appendChild (logoSection);
logoSection.appendChild (logoImage);
logoSection.appendChild (logoName);

partSuperior.appendChild (menuSection);
menuSection.appendChild (unorderList);
unorderList.appendChild (homeObject);
unorderList.appendChild (aboutObject);
unorderList.appendChild (contactObject);

partInferior.appendChild (exploreSection);
exploreSection.appendChild (exploreImage);
exploreSection.appendChild (exploreTitle);
exploreSection.appendChild (exploreDescription);
exploreSection.appendChild (exploreLink);
exploreSection.appendChild (exploreButton);


// ------------------------- CREATING CLASSES. -------------------------

navSection.classList.add ('navSection');

partSuperior.classList.add ('partSuperior');
partInferior.classList.add ('partInferior');

logoSection.classList.add ('logoSection');
logoImage.classList.add ('logoImage');
logoName.classList.add ('logoName');
menuSection.classList.add ('menuSection');
unorderList.classList.add ('unorderList');

exploreSection.classList.add ('exploreSection');

exploreImage.classList.add ('exploreImage');
exploreTitle.classList.add ('exploreTitle');
exploreDescription.classList.add ('exploreDescription');
exploreLink.classList.add ('exploreLink');
exploreButton.classList.add ('exploreButton');

// ------------------------- ADDING IMAGES. -------------------------

logoImage.src = "images/Yorch-Black-books.png";
exploreImage.src = 'images/Yorch-Black-books.png';

// ------------------------- ADDING TEXT. -------------------------

logoName.textContent = `Yorch Books`;

// ------------------------- LINKS MENU. -------------------------

homeObject.innerHTML = `<a href="#" class="linkMenu"><i class="fas fa-home"></i>Home</a>`;
aboutObject.innerHTML = `<a href="#" class="linkMenu"><i class="fas fa-user-friends"></i>About us</a>`;
contactObject.innerHTML = `<a href="#" class="linkMenu"><i class="fas fa-envelope-square"></i>Contact</a>`;
exploreButton.innerHTML = `Explore more.`;


// ------------------------- EXPLORE SECTION. -------------------------

exploreTitle.innerHTML = 'Yorch Books';
exploreDescription.innerHTML = `On this website you will find a lot of reviews from many books. Since novels, science fiction, dramas, fantasy and more. <br> So, what are you waiting for?`;
exploreLink.innerHTML = 'yorch-edu.com';

// ----------------------------------------------------------------------- FIRST SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS -------------------------

const firstSection = document.createElement ('section');
const firstTitle = document.createElement ('h2');

// ------------------------- APPEND OBJECTS -------------------------

document.body.appendChild (firstSection);
firstSection.appendChild (firstTitle);

// ------------------------- SET ATRIBUTES. -------------------------

firstSection.setAttribute ('id', 'exploreMore');

// ------------------------- CREATING CLASSES. -------------------------

firstSection.classList.add ('firstSection');
firstTitle.classList.add ('firstTitle');


// ------------------------- ADDING TEXT. -------------------------

firstTitle.innerHTML = `¡The best sellers around all over the world! <br> <br>  See more about on the sections below.`;

// ----------------------------------------------------------------------- SECOND SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS. -------------------------

const secondSection = document.createElement ('section');
const secondTitle = document.createElement ('h2');
const booksSection = document.createElement ('div');

const bookSection1 = document.createElement ('div');
const bookContent1 = document.createElement ('div');
const bookTitle1 = document.createElement ('h3');
const bookSinopsis1 = document.createElement ('p');
const bookImg1 = document.createElement ('img');
const bookButton1 = document.createElement ('button');

const bookSection2 = document.createElement ('div');
const bookContent2 = document.createElement ('div');
const bookTitle2 = document.createElement ('h3');
const bookSinopsis2 = document.createElement ('p');
const bookImg2 = document.createElement ('img');
const bookButton2 = document.createElement ('button');

const bookSection3 = document.createElement ('div');
const bookContent3 = document.createElement ('div');
const bookTitle3 = document.createElement ('h3');
const bookSinopsis3 = document.createElement ('p');
const bookImg3 = document.createElement ('img');
const bookButton3 = document.createElement ('button');

// ------------------------- APPEND OBJECTS. -------------------------

document.body.appendChild (secondSection);
secondSection.appendChild (secondTitle);
secondSection.appendChild (booksSection);

booksSection.appendChild (bookSection1);
booksSection.appendChild (bookSection2);
booksSection.appendChild (bookSection3);

bookSection1.appendChild (bookContent1);
bookContent1.appendChild (bookTitle1)
bookContent1.appendChild (bookSinopsis1);
bookContent1.appendChild (bookButton1);
bookSection1.appendChild (bookImg1);

bookSection2.appendChild (bookContent2);
bookContent2.appendChild (bookTitle2);
bookContent2.appendChild (bookSinopsis2);
bookContent2.appendChild (bookButton2);
bookSection2.appendChild (bookImg2);

bookSection3.appendChild (bookContent3);
bookContent3.appendChild (bookTitle3);
bookContent3.appendChild (bookSinopsis3);
bookContent3.appendChild (bookButton3);
bookSection3.appendChild (bookImg3);

// ------------------------- ADDING OBJECTS. -------------------------

secondSection.classList.add ('secondSection');
secondTitle.classList.add ('secondTitle');
booksSection.classList.add ('booksSection');

bookContent1.classList.add ('bookContent1');
bookContent2.classList.add ('bookContent2');
bookContent3.classList.add ('bookContent3');

bookSection1.classList.add ('bookSection1');
bookTitle1.classList.add ('bookTitle1');
bookImg1.classList.add ('bookImg1');
bookSinopsis1.classList.add ('bookSinopsis1');
bookButton1.classList.add ('bookButton');

bookSection2.classList.add ('bookSection2');
bookTitle2.classList.add ('bookTitle2');
bookImg2.classList.add ('bookImg2');
bookSinopsis2.classList.add ('bookSinopsis2');
bookButton2.classList.add ('bookButton');

bookSection3.classList.add ('bookSection3');
bookTitle3.classList.add ('bookTitle3');
bookImg3.classList.add ('bookImg3');
bookSinopsis3.classList.add ('bookSinopsis3');
bookButton3.classList.add ('bookButton');

// ------------------------- ADDING IMAGES. -------------------------

bookImg1.src = "images/Padrerico.jpg";
bookImg2.src = "images/outliers.jpg";
bookImg3.src = "images/perks.jpg"

// ------------------------- ADDING TEXTS. -------------------------

secondTitle.textContent = `¡Top sellers 2021!`;

bookTitle1.textContent = `Rich Dad, Poor Dad.`;
bookTitle2.textContent = `The Outliers.`;
bookTitle3.textContent = `The Perks of Being a Wallflower.`;

bookSinopsis1.innerHTML = `Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.`;
bookSinopsis2.innerHTML = `Gladwell's latest book, “Outliers,” is a passionate argument for taking the second version of the story more seriously than we now do. “It is not the brightest who succeed,” Gladwell writes. “Nor is success simply the sum of the decisions and efforts we make on our own behalf. It is, rather, a gift. Outliers are those who have been given opportunities — and who have had the strength and presence of mind to seize them.” ADVERTISEM.`;
bookSinopsis3.innerHTML = `The Perks of Being a Wallflower by Stephen Chbosky is narrated by Charlie, the titular 'wallflower', in a series of letters that he writes to a stranger, beginning the night before he starts his freshman year of high school in 1991. These letters catalogue Charlie’s attempts to “participate”, as he wanders wide eyed through a series of house parties and Rocky Horror Picture Show productions with his new, older friends. Along the way, Chbosky intelligently explores stock YA themes such as mental health, substance abuse and sexuality, whilst simultaneously reminding the reader about how exciting it is to be young and idealistic.`;

bookButton1.innerHTML = `Show more.`;
bookButton2.innerHTML = `Show more.`;
bookButton3.innerHTML = `Show more.`;

// ----------------------------------------------------------------------- THIRD SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS. -------------------------

const thirdSection = document.createElement ('section');
const thirdTitle = document.createElement ('h2');

// ------------------------- APPEND OBJECTS. -------------------------

document.body.appendChild (thirdSection);
thirdSection.appendChild (thirdTitle);

// ------------------------- ADDING CLASSES. -------------------------

thirdSection.classList.add ('thirdSection');
thirdTitle.classList.add ('thirdTitle');

// ------------------------- ADDING TEXTS. -------------------------

thirdTitle.innerHTML = `¡Follow us on social media!`;

// ----------------------------------------------------------------------- FORTH SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS. -------------------------

const forthSection = document.createElement ('section');
const forthLeft = document.createElement ('div');
const forthRight = document.createElement ('div');
const forthTitle = document.createElement ('h2');
const forthParragph = document.createElement ('p');
const forthImages = document.createElement ('div');
const forthImg1 = document.createElement ('img');
const forthImg2 = document.createElement ('img');
const forthImg3 = document.createElement ('img');

// ------------------------- APPEND OBJECTS. -------------------------

document.body.appendChild (forthSection);
forthSection.appendChild (forthLeft);
forthSection.appendChild (forthRight);

forthLeft.appendChild (forthTitle);

forthRight.appendChild (forthParragph);
forthRight.appendChild (forthImages);
forthImages.appendChild (forthImg1);
forthImages.appendChild (forthImg2);
forthImages.appendChild (forthImg3);

// ------------------------- ADDING CLASSES. -------------------------

forthSection.classList.add ('forthSection');
forthLeft.classList.add ('forthLeft');
forthRight.classList.add ('forthRight');
forthTitle.classList.add ('forthTitle');
forthParragph.classList.add ('forthParragph');
forthImages.classList.add ('forthImages');
forthImg1.classList.add ('forthImg');
forthImg2.classList.add ('forthImg');
forthImg3.classList.add ('forthImg');

// ------------------------- ADDING TEXTS. -------------------------

forthImg1.src = 'images/face.png';
forthImg2.src = 'images/WhatsApp.png';
forthImg3.src = 'images/Maps.png';

forthTitle.innerHTML = `¡Subscribe to our social media!`;
forthParragph.innerHTML = `Don't think anymore. Follow us to see our new content we post. We always came with more books.`;

// ----------------------------------------------------------------------- FIFTH SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS. -------------------------

const fifthSection = document.createElement ('section');
const fifthParragph1 = document.createElement ('p');
const fifthParragph2 = document.createElement ('p');

// ------------------------- APPEND OBJECTS. -------------------------

document.body.appendChild (fifthSection);
fifthSection.appendChild (fifthParragph1);
fifthSection.appendChild (fifthParragph2);

// ------------------------- ADDING CLASSES. -------------------------

fifthSection.classList.add ('fifthSection');
fifthParragph1.classList.add ('fifthParragph1');
fifthParragph2.classList.add ('fifthParragph2');

// ------------------------- ADDING TEXTS. -------------------------

fifthParragph1.innerHTML = `"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learnig stays young."`;
fifthParragph2.innerHTML = `-Henry Ford.`;

// ----------------------------------------------------------------------- RETURN SECTION. -------------------------------------------------------------------------

// ------------------------- CREATING OBJECTS. -------------------------

const returnSection = document.createElement ('div');
const returndivButton = document.createElement ('div');
const returnButton = document.createElement ('button');

// ------------------------- APPEND OBJECTS. -------------------------

document.body.appendChild (returnSection);
returnSection.appendChild (returndivButton);
returndivButton.appendChild (returnButton);

// ------------------------- ADDING CLASSES. -------------------------

returnSection.classList.add ('returnSection');
returndivButton.classList.add ('returndivButton');
returnButton.classList.add ('returnButton');

// ------------------------- ADDING TEXTS. -------------------------

returnButton.innerHTML = `Regresar`;

returnButton.addEventListener ('click', function () {
    window.scrollTo ({
        top: 0,
    }); 
})

// ----------------------------------------------------------------------- FOOTER SECTION. -------------------------------------------------------------------------

const footerSection = document.createElement ('footer');
const footerText = document.createElement ('p');

document.body.appendChild (footerSection);
footerSection.appendChild (footerText);

footerSection.classList.add ('footerSection');
footerText.classList.add ('footerText');

footerText.innerHTML = `Copyrights @ 2021 | Yorch Books. Place of the best books. | Jorge. | All rights reserved. `;

// ----------------------------------------------------------------------- SCROLL FUNCTIONALITY. -------------------------------------------------------------------------

// ------------------------- FIX MENU. -------------------------

window.addEventListener ('scroll', function () {

    const partSuperiorValue = partSuperior.getBoundingClientRect().height;

    let scrollValue = window.pageYOffset;

    if (partSuperiorValue < scrollValue) {
        partSuperior.classList.add ('partSuperiorScoll');
        returnSection.classList.remove ('returnSectionStart');
    }
    else {
        partSuperior.classList.remove ('partSuperiorScoll');
        returnSection.classList.add ('returnSectionStart');
    }

    exploreButton.addEventListener ('click', function () {
        window.scrollTo ({
            top: 780,
        });   
    });

});

// ----------------------------------------------------------------------- HELP SECTION. -------------------------------------------------------------------------

/* 

"COLOCAR UN OBJETO CON TEXTO EN EL BODY DEL SITIO WEB."

const x = document.createElement ('div');
const y = document.createTextNode ('Hello, I am Y in X.');
x.appendChild(y);
document.body.appendChild (x);

const z = document.createElement ('div');
z.textContent = 'Hi, I am Z.';
document.body.appendChild (z); 

*/