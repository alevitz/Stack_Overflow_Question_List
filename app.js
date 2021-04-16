
let table = $('#table');

let questionData = async function(){
  
  let data = await axios.get("https://api.stackexchange.com/2.2/questions?page=1&order=desc&sort=activity&site=stackoverflow");

  data.data.items
    
  console.log(data);
}

questionData();