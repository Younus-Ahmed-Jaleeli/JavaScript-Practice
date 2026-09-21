// let data;

// async function getData() {
//   const response = await fetch("https://dummyjson.com/todos");
//   data = await response.json(); // body retreave and parse

//   const h1 = document.querySelector("h1");
//   h1.innerText = data.todos[1].todo;
//   console.log(data.todos[1].todo);
// }

// getData();



// let data;

// async function getData() {
//     const response = await fetch("https://dummyjson.com/quotes");
//     data = await response.json();
//     console.log(data);



//     console.log(data.quotes[1]);
//     console.log(data.quotes[15]);
//     console.log(data.quotes[15].quote);
//     console.log(data.quotes[10].id);
//     console.log(data.quotes[20].author);
//     console.log(data.quotes[17].author);

// }

// getData();



let data;

async function recieveData() {
    const response = await fetch("https://dummyjson.com/comments");
    data = await response.json();
    console.log(data);




    console.log(data.comments);
    console.log(data.comments[1]);
    console.log(data.comments[1].likes);
    console.log(data.comments[0].id);
    console.log(data.comments[0].postId);
    console.log(data.comments[0].body);

}

recieveData();




// .then() .await()



fetch("https://dummyjson.com/comments")


  .then((resolveMsg) => {
    return resolveMsg.text();
  })
  .then((body) => {
    let result = JSON.parse(body);
    console.log(result);
  })
  .catch((rejectMsg) => {
    console.log(rejectMsg);
  });




  
fetch("https://dummyjson.com/quotes")


  .then((resolveMsg) => {
    return resolveMsg.text();
  })
  .then((body) => {
    let result = JSON.parse(body);
    console.log(result);
  })
  .catch((rejectMsg) => {
    console.log(rejectMsg);
  });



fetch("https://dummyjson.com/todos")
  .then((resolveMsg) => {
    return resolveMsg.text();
  })
  .then((body) => {
    let result = JSON.parse(body);
    console.log(result);
    console.log(result.todos[1]);
    console.log(result.todos[1].todo);
  })
  .catch((rejectMsg) => {
    console.log(rejectMsg);
  });




 async function fetchData() {
  const response = await fetch ("https://dummyjson.com/todos");
  const body = await response.text();
  const object = JSON.parse(body);
  console.log(object);
 } 

fetchData(); 