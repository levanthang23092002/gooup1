// Creatre Read Update Delete , getuser

const fs = require('fs');
const readline = require('readline');
const path = './user.json';

class User {
  constructor(id, name, role, gender, nationality) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.gender = gender;
    this.nationality = nationality;
  }
}

function getUsers(pageIndex, pageSize, callback) {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      callback(error, null);
      return;
    }
    const jsonData = JSON.parse(data);
    const startIndex = (pageIndex - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pagedUsers = jsonData.slice(startIndex, endIndex);
    const totalDocs = jsonData.length;
    const totalPage = Math.ceil(totalDocs / pageSize);
    const result = { 
        Data: pagedUsers,
        totalPage: totalPage,
        totalDocs: totalDocs
    }
    callback(null, result);
  });
}

function readUsers() {
  try {
    const users = fs.readFileSync('./user.json','utf8');
    return JSON.parse(users);
  } catch (error) {
    return [];
  }
}

  // Đọc danh sách người dùng từ tệp user.json
function writeUsers(user) {
  const users = JSON.stringify(user, null, 2);
  fs.writeFileSync(path, users, 'utf8');
}

function addUser(newUser){
  let users = readUsers();
  users = users.concat(newUser);
  writeUsers(users);
}

function createUser(){
  addUser(users);
  console.log(readUsers());
}



function updateUser(id, userUpdate) {
  let users = readUsers();
  const user = users.find((user) => user.id === id);
  if (user) {
    Object.assign(user, userUpdate[0]);
    writeUsers(users);
    console.log("update Thành Công");
    console.log(readUsers());
  }else
    console.log("Not found ID "+ id);
}




function deleteUser(userId){
  let users = readUsers();
  const index = users.findIndex((user) => user.id === userId);
  if(index != -1){
    users.splice(index,1);
    writeUsers(users);
    console.log("Delete Thành Công");
    console.log(readUsers());
  }else{
    console.log("Not found ID "+ userId);
  }
} 


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let users =[];
function promptUser() {
  console.log("Nhập 1 để nhập user vào danh sách");
  console.log("Nhập 2 để thêm user danh sách và json");
  console.log("Nhập 3 để cập nhật user danh sách và json");
  console.log("Nhập 4 để xóa user ra khỏi danh sách và json");
  console.log("Nhập 5 để xuất danh sách và json");
  console.log("Nhập 6 để lấy danh sách theo pageIndex và page size");
  rl.question('nhập 1 to 6 để chạy chương trình: ', (start) => {
   
      switch(start){
        case '1' :{
          rl.question('ID: ', (id) => {
            rl.question('Name: ', (name) => {
              rl.question('Role: ', (role) => {
                rl.question('Gender: ', (gender) => {
                  rl.question('Nationality: ', (nationality) => {
                    const user = new User(parseInt(id), name, role, gender, nationality);
                    users.push(user);
                    promptUser()
                  });
                });
              });
            });
          });
          break;
        }
        case '2' :{
          if(users[0] == null){
            console.log(" ");
            console.log("***************************************************");
            console.log(" ");
            console.log("Nhập 1 để nhập user trước khi thêm vào danh sách");
            console.log(" ");
            console.log("***************************************************");
            console.log(" ");
            
            promptUser();
          }else{
            createUser();
            users =[];
            promptUser()
          }
          break;
        }
        case '3':{
          if(users[0] == null){
            console.log(" ");
            console.log("***************************************************");
            console.log(" ");
            console.log("Nhập 1 để nhập user trước khi cập nhật vào danh sách");
            console.log(" ");
            console.log("***************************************************");
            console.log(" ");
            promptUser()
          }else{
            rl.question('ID: ', (id) => {
            updateUser(parseInt(id), users);
            promptUser()
            });
          }
          break;
        }
        case '4':{
          rl.question('ID: ', (id) => {
            deleteUser(parseInt(id));
            promptUser();
          });
          break;
        }
        case '5':{
          console.log(readUsers());
          promptUser();
        }
        case '6':{
          rl.question('PageIndex: ', (pageindex) => {
            rl.question('PageSize: ', (pageSize) => {
              getUsers(parseInt(pageindex), parseInt(pageSize), (error, result) => {
                if (error) {
                  console.log('Error:', error); 
                  return;
                }
              
                console.log('Result:', result);
                promptUser()
                
              });
            });
          });
          break;
        }
        default : rl.close();
      }
  });
}


promptUser();