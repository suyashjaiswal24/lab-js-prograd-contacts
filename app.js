//Enter your code here..
const btn = document.querySelector('#btnGet');
btn.onclick = function () {
    var promise = new Promise((resolve, reject) => {
        var request = new XMLHttpRequest()
        request.open('GET', 'https://jsonplaceholder.typicode.com/users')
        request.onload = () => {
            if (request.status == 200) {
                resolve(request.response)
            }
            else {
                reject(Error(request.statusText))
            }
        }
        request.send();
    });
    promise.then((data) =>
    //promise.then specifies what event takes place after the success//
    {
        console.log(data)
        console.log('Got data! Promise fulfilled.');
        const result = JSON.parse(data)
        var player = '<h2>Lists of Users</h2>';
        result.forEach(function (user) {
            player +=
                `<div class="player">
                  <div class="strength">Name : ${user.name}</div>
                  <div>Email   : ${user.email}</div>
                  <div>Phone   : ${user.phone}</div>
                  <div>Website : ${user.website}</div>
                  <div>Company : ${user.company.name}</div>
                  <div>City    : ${user.address.city}</div>
                  <div>Zipcode : ${user.address.zipcode}</div>
                 </div>`
        });

        message.innerHTML = player; //creating the above layout for each and every user//
    }, (error) => {
        console.log('Promise rejected.');
        console.log(error.message);
    }
    
    )
};