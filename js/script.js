const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: true,
};
cat.complain = function () {
    return 'Meow!'
};
console.log(cat.complain());

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "updatedheading";

// Question 3 

heading.style.fontSize = "2em";

// Question 4 

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New pargraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

function NamesList(list) {
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

NamesList(cats);

// Question 8

function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let catAge = "Unknown year";

        if(cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div class="cats">
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;
    }

    return html;
}
createCats(cats);

const newHTML = createCats(cats);

const gameContainer = document.querySelector(".cat-container");
gameContainer.innerHTML = newHTML;