
let table = $('#table');

let questionData = async function () {

  let data = await axios.get("https://api.stackexchange.com/2.2/questions?page=1&order=desc&sort=activity&site=stackoverflow");

  for (let item = 0; item < data.data.items.length; item++) {
    let author = data.data.items[item].owner.display_name;
    let title = data.data.items[item].title;
    let creation_date = data.data.items[item].creation_date;

    let row = $("<tr>");

    row.append($(`<td>${author}</td>`))
      .append($(`<td>${title}</td>`))
      .append($(`<td>${creation_date}</td>`));

    table.append(row);

  }

  console.log(data);
}

questionData();