class Car {
    private brand: string;
    private model: string;
    private speed: number;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    accelerate(speedChange: number): void {
        this.speed += speedChange;
        console.log(`Accelerated to ${this.speed} km/h`);
    }

    brake(speedChange: number): void {
        this.speed -= speedChange;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Braked to ${this.speed} km/h`);
    }

    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }

    getSpeed(): number {
        return this.speed;
    }
}
// kế thừa
class ElectricCar extends Car {
    private batteryCapacity: number;

    constructor(brand: string, model: string, batteryCapacity: number) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    chargeBattery(chargeAmount: number): void {
        console.log(`Charging battery with ${chargeAmount} kWh`);
    }

    // Override phương thức từ lớp cha
    accelerate(speedChange: number): void {
        super.accelerate(speedChange * 2); 
    }
}
 // đa hình
let car1: Car = new Car("Toyota", "Camry");
let car2: Car = new ElectricCar("Tesla", "Model S", 100);

car1.accelerate(50); // Accelerated to 50 km/h
car2.accelerate(50); // Accelerated to 100 km/h (được gọi từ ElectricCar)
// trưu tượng
abstract class Vehicle {
    protected brand: string;
    protected model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    abstract accelerate(speedChange: number): void;
    abstract brake(speedChange: number): void;

    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }
}


class User {
    getRole(): any {
        throw new Error("Method not implemented.");
    }
    private username: string;
    private emails: string;
    private password: string;

    constructor(username: string, emails: string, password: string) {
        this.username = username;
        this.emails = emails;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    getemails(): string {
        return this.emails;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    // Các phương thức khác để quản lý thông tin người dùng
}
class Admin extends User {
    private role: string;

    constructor(username: string, email: string, password: string) {
        super(username, email, password);
        this.role = "admin";
    }

    getRole(): string {
        return this.role;
    }

    // Các phương thức riêng của admin
}

let user1: User = new User("john_doe", "john@example.com", "password123");
let user2: User = new Admin("admin_user", "admin@example.com", "adminpassword");

console.log(user1.getUsername()); // john_doe
console.log(user2.getUsername()); // admin_user
console.log(user2.getRole()); // admin

abstract class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract introduce(): void;
    abstract greet(): void;

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

