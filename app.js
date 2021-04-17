
let table = document.querySelector('#table');

let getQuestionData = async function () {

  let data = await axios.get("https://api.stackexchange.com/2.2/questions?page=1&order=desc&sort=activity&site=stackoverflow");

  for (let item = 0; item < data.data.items.length; item++) {
    let author = data.data.items[item].owner.display_name;
    let title = data.data.items[item].title;
    let creation_date = data.data.items[item].creation_date;

    let row = document.createElement("TR");

    let authorCell = document.createElement("TD");
    let titleCell = document.createElement("TD");
    let creation_dateCell = document.createElement("TD");

    authorCell.innerHTML = author;
    titleCell.innerHTML = title;
    creation_dateCell.innerHTML = creation_date;

    row.appendChild(authorCell);
    row.appendChild(titleCell);
    row.appendChild(creation_dateCell);

    table.appendChild(row);

  }
}

getQuestionData();