function input(user) {
    let { name , age, born } = user;
    console.log(name);
    console.log(age);
    console.log(born);
}
const user = {
    name: 'Thắng',
    age: 22,
    born: 'Đà Nẵng'
};
input(user);

function logger(...arr) {
    const result = arr.join(' | ');
    console.log(result);
}
// logger('a', 'b', 'c','d');



async function fetchData() {
    try {
        let url = "https://dummyjson.com/products";
        const response = await fetch(url);
        setTimeout(function () {
            console.log("Fetch data successfully");
        }, 3000);
    } catch (error) {
        console.log("Error occurred:", error);
    }
}

fetchData();