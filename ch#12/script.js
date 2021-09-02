let userInput = [
  {
    "id": "0175 d1f0 - a8c6 - 41 bf - 8 d02 - df5734d829a4 ",
    "title": "ocean at dusk",
    "color": "#00c4e2",
    "rating": 5
  },
  {
    "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
    "title": "lawn",
    "color": "#26ac56",
    "rating": 3
  },
  {
    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
    "title": "bright red",
    "color": "#ff0000",
    "rating": 0
  }
];

let stringifiedObject = JSON.stringify(userInput);
let parsedObject = JSON.parse(stringifiedObject);

let words = ["First", "Second", "Third", "forth", "fifth"];
let i = 0;

for (let item in parsedObject) {
  console.log(words[i++] + " item => [" + Object.values(parsedObject[item]) + "]");
}