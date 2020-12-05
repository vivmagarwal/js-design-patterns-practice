console.log('facade works!!');

/**
 * Easy to change code
 */

// function getUsers (){
//   return fetch('https://jsonplaceholder.typicode.com/users', {
//     method: "GET",
//     headers: { "Content-Type": "application/json" }
//   }).then(res => res.json())
// } 

function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users', {})
} 

// function getUserPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" }
//   }).then(res => res.json());
// }

function getUserPosts(userId) {
  return getFetch(`https://jsonplaceholder.typicode.com/posts`, {'userId': userId})
}

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    })
  });
})

function getFetch(url, params = {}) {
  const queryString = Object.keys(params).map((param) => {
    return `${param}=${params[param]}`
  }).join('&');

  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
}