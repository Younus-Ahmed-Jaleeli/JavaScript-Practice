// let box = document.querySelector('.box');
// let boxChildren = box.children;
// console.log(boxChildren);



// let list = document.querySelector('ul');
// console.log(list.parentElement);



// let list = document.querySelector('ul');
// let firstItem = list.children[0]; 
// let secondItem = firstItem.nextElementSibling; 
// console.log(secondItem.innerText);



// let box = document.querySelector('.box');
// console.log(box.children[0]); 
// console.log(box.children[box.children.length ]);



// let heading1 = document.querySelector('#heading1');
// let nextEl = heading1.nextElementSibling; 
// let afterThat = nextEl.nextElementSibling; 
// console.log(afterThat.innerText); 



// let heading = document.createElement('h3');
// heading.innerText = "Welcome to Space!";
// let body = document.querySelector('body');
// body.prepend(heading);



// let heading = document.createElement('h3');
// heading.innerText = "Welcome to Space!";
// let body = document.querySelector('body');
// body.prepend(heading);



// let newPara = document.createElement('p');
// newPara.innerText = "The universe is vast and mysterious.";
// newPara.style.color = 'cyan';
// newPara.style.fontSize = '18px';
// let box = document.querySelector('.box');
// box.appendChild(newPara);



// let badge = document.createElement('span');
// badge.innerText = " 🌟 New!";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('beforeend', badge);



// let list = document.querySelector('ul');
// let item1 = document.createElement('li');
// item1.innerText = "Neptune: Ice Giant";
// let item2 = document.createElement('li');
// item2.innerText = "Uranus: Ice Giant";
// list.appendChild(item1);
// list.appendChild(item2);



// insertAdjacentElement Positions //

// let icon = document.createElement('span');
// icon.innerText = "🌍 ";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('afterbegin', icon);



// let arrow = document.createElement('span');
// arrow.innerText = " →";
// let heading = document.querySelector('h2');
// heading.insertAdjacentElement('beforeend', arrow);



// Removing Elements from the Page //

// let oldImg = document.querySelector('.oldImg');
// oldImg.remove();



// let oldImages = document.querySelectorAll('.oldImg');
// for (let img of oldImages) {
// img.remove();
// }



// let btn = document.querySelector('button');
// let box = document.querySelector('.box');
// btn.addEventListener('click', function() {
// box.remove(); 
// });



// let list = document.querySelector('ul');
// let firstItem = list.children[0];
// firstItem.remove();
