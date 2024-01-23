const uni = document.querySelector("*");
uni.style.boxSizing = "border-box";

const div = document.createElement("div");
div.textContent = "This DIV element appended into BODY element";
div.setAttribute("class", "container");
div.setAttribute("id", "unique");
div.style.padding = "40px";
div.style.backgroundColor = "cyan";
div.style.maxWidth = "max-content";
const body = document.querySelector("body");
body.style.fontFamily = "sans-serif";
body.style.fontSize = "25px";
body.appendChild(div);

const table = document.createElement("table");
const tr = document.createElement("tr");
const th = document.createElement("th");

table.style.border = "1px solid black";
table.style.padding = "5px";
table.style.border = "1px solid black";
tr.style.border = "1px solid black";
th.style.border = "1px solid black";
th.style.padding = "15px";
tr.setAttribute("class", "table-row");

body.appendChild(table);
table.appendChild(tr);
tr.appendChild(th);

const tr2 = document.createElement("tr");

const ul = document.createElement("ul");
const li = document.createElement("li");

ul.style.maxWidth = "20rem";
ul.style.width = "100%";
ul.style.listStyleType = "none";
ul.style.paddingLeft = "0";
li.style.padding = "10px 5px 10px 5px";
body.appendChild(ul);

// const list_item = document.querySelector(".list-item");

const users = [
  "Adam",
  "Brian",
  "Sedrick",
  "John",
  "Levi",
  "Martin",
  "Jake",
  "Fin",
];

for (let i = 0; i < users.length; i++) {
  li.style.backgroundColor = "cyan";
  li.style.marginBottom = "5px";
  let clone = li.cloneNode(true);
  ul.appendChild(clone);
  clone.innerText = users[i];
}
