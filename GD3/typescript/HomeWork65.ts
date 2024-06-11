interface User {
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
}
interface Healthy extends User {
  strong: string;
}
let no: unknown = 4;
no = "maybe a string instead"