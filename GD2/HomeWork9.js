const axios = require('axios');
const fs = require('fs');
const url = 'https://dummyjson.com/carts';

function padNumber(number) {
    return number.toString().padStart(2, '0');
}
function getdate(){
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    
    const date = `Cart-${padNumber(day)}-${padNumber(month)}-${year}`;
    return date;
}

axios.get(url).then(function (response) {
    
    const date = getdate();
    const fileName = `${date}.js`;
    const fileContent =JSON.stringify(response.data.carts);

    fs.writeFile(fileName, fileContent, (err) => {
        if (err) {
            console.error('Đã xảy ra lỗi khi tạo tệp:', err);
        } else {
            console.log('Tạo tệp thành công:', fileName);
        }
        });
    
});


// function myFunction() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET','https://dummyjson.com/carts', true);

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             var responseData = JSON.stringify(xhr.responseText);
          
//             const date = getdate();
//             const fileName = `${date}.js`;
//             const fileContent = responseData;

//             const blob = new Blob([fileContent], { type: 'text/javascript' });
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = fileName;
//             link.click();
//         } else {
//             // Xử lý lỗi
//             console.error('Yêu cầu không thành công. Mã lỗi: ' + xhr.status);
//         }
//     };

//     xhr.onerror = function () {
//         // Xử lý lỗi
//         console.error('Đã xảy ra lỗi trong quá trình gửi yêu cầu.');
//     };

//     xhr.send();
// }

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         const date = getdate();
//         const fileName = `${date}.js`;
//         const fileContent =JSON.stringify(data.carts);

//         fs.writeFile(fileName, fileContent, (err) => {
//             if (err) {
//                 console.error('Đã xảy ra lỗi khi tạo tệp:', err);
//             } else {
//                 console.log('Tạo tệp thành công:', fileName);
//             }
//         });
// });
