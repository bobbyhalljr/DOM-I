const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// HEADER
const header = document.querySelector('header');


// NAV

// header - nav
const nav = document.querySelector('nav');
console.log(nav);
header.prepend(nav);

nav.style.color = 'green';

// select navigation
const navItem = document.querySelectorAll('a');

// turn all nav items green
const links = document.querySelectorAll('a');
links.forEach((green) => {
  green.style.color = 'green';
})


// create new nav item in begining of nav
const newNavItem = document.createElement('a');
newNavItem.textContent = 'Blog';
nav.prepend(newNavItem);
newNavItem.style.color = 'green';

// create nav item at the end of nav
const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Photos';
nav.append(newNavItem2);
newNavItem2.style.color = 'green';

// select navigation items (anchor tags)
const navItem1 = navItem[0].textContent = siteContent['nav']['nav-item-1'];
const navItem2 = navItem[1].textContent = siteContent['nav']['nav-item-2'];
const navItem3 = navItem[2].textContent = siteContent['nav']['nav-item-3'];
const navItem4 = navItem[3].textContent = siteContent['nav']['nav-item-4'];
const navItem5 = navItem[4].textContent = siteContent['nav']['nav-item-5'];
const navItem6 = navItem[5].textContent = siteContent['nav']['nav-item-6'];

// Header - Img
const headerImg = document.querySelector('#header-img');

// CTA
const ctaText = document.querySelector('.cta-text');
// select cta-text h1
const ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent.cta.h1;

// select cta button
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// select cta
const cta = document.querySelector('.cta');
console.log(cta)

// select cta image
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
console.log(ctaImg);

// Main Content
// select all h4 tags
const h4 = document.querySelectorAll('.text-content h4')

h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

// select all p tags
const p = document.querySelectorAll('.text-content p');

p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

// select middle img
const middleImg = document.querySelector('#middle-img');

middleImg.src = siteContent['main-content']['middle-img-src'];

// select contact section
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// select footer
const footer = document.querySelector('footer');
footer.textContent = siteContent.footer.copyright;

// stretch problem
const eventButton = document.createElement('button');
eventButton.textContent = 'Click Me';
eventButton.style.marginTop = '30px';
button.append(eventButton);

const imgContainer = document.createElement('div');
imgContainer.style.width = '100px';
button.append(imgContainer);


const catImg = document.createElement('img');
catImg.src = 'img/cat.jpg';

eventButton.addEventListener('click', (event) => {
  imgContainer.append(catImg);
  catImg.style.marginTop = '30px';
  eventButton.remove();
  // catImg.add();
  catImg.style.width = '100px';
});




//This also works without JSON data

// navItem[1].textContent = 'Product';
// navItem[2].textContent = 'Vision';
// navItem[3].textContent = 'Features';
// navItem[4].textContent = 'About';
// navItem[5].textContent = 'Contact';

// // select cta-text class
// const ctaText = document.querySelector('.cta-text h1');

// ctaText.textContent = 'DOM is Awesome';

// // select img and change src path
// const ctaImg = document.querySelector('#cta-img');

// ctaImg.src = 'img/header-img.png';

// // add text to button 
// const button = document.querySelector('button');

// button.textContent = 'Get Started';

// // adding top content class
// // select all h4 tags
// const h4 = document.querySelectorAll('h4');
// // select all p tags
// const p = document.querySelectorAll('p');

// // assign content to all h4 tags
// h4[0].textContent = 'features';
// h4[1].textContent = 'about';
// h4[2].textContent = 'services';
// h4[3].textContent = 'product';
// h4[4].textContent = 'vision';

// // assign content to all p tags 
// p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// p[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// p[4].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// p[5].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// // select middle img
// const middleImg = document.querySelector('.middle-img');

// middleImg.src = 'img/mid-page-accent.jpg';

// // select contact section
// const contact = document.querySelector('.contact h4');

// contact.textContent = 'contact';

// const contactPara = document.querySelectorAll('.contact p');

// contactPara[0].textContent = '123 Way 456 Street Somewhere, USA';
// contactPara[1].textContent = '1 (888) 888-8888';
// contactPara[2].textContent = 'sales@greatidea.io';

// // select footer text
// const footerText = document.querySelector('footer p');

// footerText.textContent = 'Copyright Great Idea! 2018';

