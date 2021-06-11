//Filter given data to get item with required text

var aptData = [
  {
    petName: "Pepe",
    ownerName: "Reggie Toup",
    aptNotes: "It's time for this rabbit's post spaying surgery checkup",
  },
  {
    petName: "Rio",
    ownerName: "Philip Ransu",
    aptNotes: "Rio is up for his next round of vaccinations",
  },
];

//Using regular programming
var searchFor = "rabbit";
var resultArr = [];
for (var i = 0; i < aptData.length; i++) {
  let item = aptData[i].aptNotes.match(searchFor);
  if (item) {
    resultArr.push(aptData[i]);
  }
}
console.log(resultArr);

//Using Functional Programming ie filter higher order function
var searchText = "for";
function dataFilter(item) {
  return item.aptNotes.toLowerCase().match(searchText.toLowerCase());
}

var displayData = aptData.filter(dataFilter);
console.log(displayData);
