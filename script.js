function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

var product = [
  {
    names: "wooden",
    price: "10,000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    names: "custon chair",
    price: "15,000",
    image:
      "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    names: "whitechair",
    price: "12,000",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    names: "wooden",
    price: "10,000",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    names: "custon chair",
    price: "15,000",
    image:
      "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    names: "whitechair",
    price: "12,000",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
];

function addproduct() {
  var clutter = "";

  product.forEach(function (product, idx) {
    clutter += `<div class="card1">
    <img src="${product.image}" alt="">
    <h3>${product.names}</h3>
    <h4>${product.price}</h4>
</div>`;
  });

  document.querySelector(".cards").innerHTML = clutter;
}
addproduct();

// Data for card-1 elements
const cardData = [
  {
    iconClass: "ri-truck-line",
    title: "Fast & Free Shopping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.",
  },
  {
    iconClass: "ri-shopping-bag-2-line",
    title: "Easy to Shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.",
  },
  {
    iconClass: "ri-stack-line",
    title: "24/7 support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.",
  },
  {
    iconClass: "ri-infinity-fill",
    title: "Hassels free return",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, inventore.",
  },
];

var page5_cards = [
  {
    image: "/imagesss/product-1.png",
    heading: "Nordic Chair",
    data: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btn: "Read more",
  },
  {
    image: "/imagesss/product-2.png",
    heading: "Kruze Aero Chair",
    data: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btn: "Read more",
  },
  {
    image: "/imagesss/product-3.png",
    heading: "Ergonomic Chair",
    data: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btn: "Read more",
  },
];

function card() {
  var clutter = "";

  page5_cards.forEach(function (product, idx) {
    clutter += ` <div class="first">
    <img src="${product.image}">
    <div class="data">
        <h2>Nordic Chair</h2>
        <h4>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</h4>
        <button>Read more</button>
    </div>
</div>`;
  });

  document.querySelector(".page5-cards").innerHTML = clutter;
}

card();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperdata = [
  {
    image: "/imagesss/person-1.jpg",
    names: "Liza",
    title: "CEO, Co-Founder, XYZ Inc.",
  },
  {
    image: "/imagesss/person_2.jpg",
    names: "Marco",
    title: "CEO, Co-Founder, XYZ Inc.",
  },
  {
    image: "/imagesss/person_3.jpg",
    names: "Jorden",
    title: "CEO, Co-Founder, XYZ Inc.",
  },
];

function swipercontent() {
  var clutter = "";

  swiperdata.forEach(function (product, idx) {
    clutter += `  <div class="swiper-slide">

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint temporibus, laudantium sed consectetur, mollitia explicabo atque quos vero praesentium tempora est, tempore tenetur. A quod eos quasi blanditiis ipsam nesciunt fugiat tempora est dolores nulla, maiores provident, quibusdam explicabo accusamus illo accusantium exercitationem voluptatibus magnam laudantium asperiores? Eligendi, magnam atque.
    </p>

    <div class="user">
        <img src="${product.image}" alt="">
        <h2>${product.names}</h2>
        <h3>${product.title}</h3>

        
    </div>

  </div>`;
  });

  document.querySelector(".swiper-wrapper").innerHTML = clutter;
}

swipercontent();

var blog = [
  {
    images: "/imagesss/post-1.jpg",
    heading: "First Time Home Owner Ideas",
    date: "by Robert Fox on Dec 15, 2021",
  },
  {
    images: "/imagesss/post-2.jpg",
    heading: "How To Keep Your Furniture Clean",
    date: "by Robert Fox on Dec 15, 2021",
  },
  {
    images: "/imagesss/post-3.jpg",
    heading: "Small Space Furniture Apartment Ideas",
    date: "by Robert Fox on Dec 12, 2021",
  },
];

function blogs() {
  var clutter = "";

  blog.forEach(function (product, idx) {
    clutter += `  <div class="blog1">
    <img src="${product.images}" alt="">
    <h1>First Time Home Owner Ideas</h1>
    <h2>by Kristin Watson on Dec 19, 2021</h2>
</div>`;
  });

  document.querySelector(".blogssss").innerHTML = clutter;
}

blogs();

// ----------------------------------animation

var tl = gsap.timeline();

tl.from(".page1 .furni", {
  y: -100,
  opacity: 0,
});

tl.from(".page1 h5", {
  y: -100,
  opacity: 0,
  stagger: 1,
  duration: 0.5,
});

tl.from(".page1 img", {
  x: 100,
  opacity: 0,
  duration: 1,
  duration: 0.5,
});

tl.from(".page1 .left-content1>.h1,.p,#btn1,#btn2", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    // markers:"true",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

tl2.from(".page2 .content-page2>h1,.p222,.btn-page2", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});

tl2.from(".page2 .cards", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    // markers:"true",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

tl3.from(".page3 .card-1", {
  y: 100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});

tl3.from(".page3 img", {
  x: 200,
  y: 100,
  opacity: 0,
  duration: 1,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    // markers:"true",
    start: "top 30%",
    end: "top 10%",
    scrub: 4,
  },
});

tl4.from(".page4 .img1", {
  y: 200,
  opacity: 0,
});

tl4.from(".page4 .img2", {
  y: -200,
  opacity: 0,
});

tl4.from(".page4 .img3", {
  x: 200,
  opacity: 0,
});

tl4.from(".page4 .right-page4", {
  x: 200,
  opacity: 0,
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    // markers:"true",
    start: "top 30%",
    end: "top 10%",
    scrub: 4,
  },
});

tl5.from(".page5 .page5-cards", {
  y: 100,
  opacity: 0,
});

tl5.from(".page5 .swiper-page5", {
  y: 100,
  opacity: 0,
});

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    // markers:"true",
    start: "40% 30%",
    end: "40% 10%",
    scrub: 4,
  },
});

tl6.from(".page5 .blog1", {
  y: 100,
  opacity: 0,
  stagger: 1,
});

tl6.from(".page5 .sofa", {
  // y:100,
  opacity: 0,
  stagger: 1,
});

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    scroller: ".main",
    // markers:"true",
    start: "-50% 30%",
    end: "-50% 10%",
    scrub: 4,
  },
});

tl7.from("footer", {
  opacity: 0,
});
