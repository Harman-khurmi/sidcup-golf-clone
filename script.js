var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var card = document.querySelectorAll("#card-container .card");
var cardcontain = document.querySelectorAll("#card-container");
var overlay = document.querySelectorAll("#card-container .card .overlay");
var img = document.querySelectorAll("#card-container .card .card-image")
var box = document.querySelectorAll("#box");
var arrow=document.querySelector("#page1 #arrow");
// var boximg=document.querySelectorAll("#box img");
document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x - 6 + "px";
  crsr.style.top = dets.y - 6 + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";

});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    // crsr.style.scale = 3.5;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transform = 'scale(3.5)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  })
  elem.addEventListener("mouseleave", () => {
    // crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transform = 'scale(1)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  });
});

var allbtn=document.querySelectorAll("button");
allbtn.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    // crsr.style.scale = 3.5;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transform = 'scale(3.5)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  
  })
  elem.addEventListener("mouseleave", () => {
    // crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transform = 'scale(1)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
   
  });
});
card.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    // crsr.style.scale = 3.5;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transform = 'scale(3.5)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  
  })
  elem.addEventListener("mouseleave", () => {
    // crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transform = 'scale(1)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
   
  });
});
var boxcrsr=document.querySelectorAll("#box .boxes");
boxcrsr.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    // crsr.style.scale = 3.5;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transform = 'scale(3.5)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  
  })
  elem.addEventListener("mouseleave", () => {
    // crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transform = 'scale(1)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
   
  });
});

  arrow.addEventListener("mouseenter", () => {
    // crsr.style.scale = 3.5;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transform = 'scale(3.5)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
  
  })
  arrow.addEventListener("mouseleave", () => {
    // crsr.style.scale = 1;
    crsr.style.border = "0px solid white";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.transform = 'scale(1)';
    crsr.style.transition = 'transform 0.3s ease-in-out';
   
  });

  function scrollToNextSection() {
    const currentSection = document.getElementById('section1');
    const nextSection = document.getElementById('scroller');
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

arrow.addEventListener("mouseenter", () => {
  var icon=arrow.querySelector("i");
  arrow.style.border="none";
  arrow.style.scale="0.5";
  arrow.style.backgroundColor="#AEE123";
  icon.style.scale="1";
  icon.style.fontSize="40px";
  
})
arrow.addEventListener("mouseleave", () => {
  arrow.style.border="2px solid #AEE123";
  arrow.style.scale="1";
  arrow.style.backgroundColor="transparent";
  icon.style.scale="1";
  icon.style.fontSize="40px";
})


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: false,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    onEnter: () => document.getElementById("nav").classList.add("active"),
    onLeave: () => document.getElementById("nav").classList.remove("active"),
    onEnterBack: () => document.getElementById("nav").classList.add("active"),
    onLeaveBack: () => document.getElementById("nav").classList.remove("active")
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger:
  {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -75%",
    scrub: 2
  }
});

gsap.from("#about-us img , #about-us-content", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 75%",
    end: "top 55%",
    scrub: 3
  }
});
gsap.from(card, {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger:0.1,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: "body",
    start: "top 85%",
    end: "top 55%",
    scrub: 3
  }
});


card.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.3,
      ease: 'power1.inOut',
      rotateX: 15,
      rotateY: -15,
      rotateZ: -1.5
    });
  });

  // Create the hover-out animation
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.3,
      ease: 'power1.inOut',
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    });
  });
});

// overlay.forEach(overlay => {
//   overlay.addEventListener("mouseenter", ()=>
//   {
//     gsap.to(overlay,{
//         duration:0.5,
//         ease: 'power1.inOut',
//         opacity:1
//     });
//   });
//   overlay.addEventListener("mouseleave", ()=>
//   {
//     gsap.to(overlay,{
//         duration:0.5,
//         ease: 'power1.inOut',
//         opacity:0
//     });
//   });
// });

// img.forEach(img => {
//     img.addEventListener("mouseenter", ()=>
//     {
//         gsap.to(img, {
//             duration: 0.5,
//             opacity: 0
//           });

//     });

//     img.addEventListener("mouseleave",()=>
//     {
//         gsap.to(img, {
//             duration:0,
//             opacity: 1,
//             scale: 1.2,
//           ease: 'power1.inOut',
//           onComplete: () => {
//             gsap.to(img, {
//               duration: 0.4,
//               scale: 1,
//               ease: 'power1.inOut'
//             });
//         }
//     });
//     });
// });
card.forEach(cards => {
  const pic = cards.querySelector("img");
  const over = cards.querySelector(".overlay");
  cards.addEventListener('mouseenter', () => {
    gsap.to(pic, {
      duration: 0.3,
      opacity: 0
    });
    gsap.to(over, {
      duration: 0.3,
      opacity: 1
    });
  });

  cards.addEventListener('mouseleave', () => {
    gsap.to(pic, {
      duration: 0,
      opacity: 1,
      scale: 1.1,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(pic, {
          duration: 0.4,
          opacity: 1,
          scale: 1,
          ease: 'power1.inOut'
        });
      }
    });
    gsap.to(over, {
      duration: 0.5,
      opacity: 0
    });
  });
});

gsap.from("#colon1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 75%",
    end: "top 55%",
    scrub: 3,
  }
})
gsap.from("#colon2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 115%",
    end: "top 95%",
    scrub: 3,
  }
});


const boxes = document.querySelectorAll('.boxes');

var heading= document.querySelector("#box h1");

boxes.forEach(box => {
  const boxpic = box.querySelector('img');
  const boxtext = box.querySelector('h2');
  box.addEventListener('mouseenter', () => {
    boxpic.style.opacity = "1";
    boxpic.style.scale="1";
    boxtext.style.color="#fff";
    heading.style.webkitTextStroke = '1px #95C11E';
  });
  box.addEventListener('mouseleave', () => {
    boxpic.style.opacity = "0";
    boxpic.style.scale="1.5";
    boxtext.style.color="#000";
    heading.style.webkitTextStroke = '1px white';
  });
});

gsap.from("#box h1",{
  // duration:0.4,
  y:50,
  scrollTrigger:{
    trigger:"#box h1",
    scroller:"body",
    start:"top 95%",
    end:"top 80%",
    // markers:true,
    scrub:2
  }
})