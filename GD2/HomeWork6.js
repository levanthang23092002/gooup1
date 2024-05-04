// Date validation 

function dateValidation(date) {
    let elementDate = date.split("-");
    let day = parseInt(elementDate[0]);
    let month = parseInt(elementDate[1]);
    let year = parseInt(elementDate[2]);
  
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day > 0 && day <= 31) {
          return true;
        } else {
          return false;
        }
      case 4:
      case 6:
      case 9:
      case 11:
        if (day > 0 && day <= 30) {
          return true;
        } else {
          return false;
        }
      case 2:
        if (year % 4 === 0) {
          if (day > 0 && day <= 29) {
            return true;
          } else {
            return false;
          }
        } else {
          if (day > 0 && day <= 28) {
            return true;
          } else {
            return false;
          }
        }
      default:
        return false;
    }
  }
module.exports = { dateValidation };