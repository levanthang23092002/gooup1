class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be positive.");
        }
    }

    get area(): number {
        return this._width * this._height;
    }

    get perimeter(): number {
        return 2 * (this._width + this._height);
    }
}

class Warehouse {
    private _name: string;
    private _storage: number;
    private _address: string;
    private _owner: string;

    constructor(name: string, storage: number, address: string, owner: string) {
        this._name = name;
        this._storage = storage;
        this._address = address;
        this._owner = owner;
    }

    // Getter và setter cho thuộc tính name
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // Getter và setter cho thuộc tính storage
    get storage(): number {
        return this._storage;
    }

    set storage(value: number) {
        this._storage = value;
    }

    // Getter và setter cho thuộc tính address
    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    // Getter cho thuộc tính owner (không cần setter)
    get owner(): string {
        return this._owner;
    }
   
}

// Khởi tạo một đối tượng thuộc lớp Warehouse
const warehouse = new Warehouse("GooUp1 House", 173, "173 Nguyễn Lương Bằng", "Khánh");

// Truy xuất và thay đổi các thuộc tính name, storage và address
console.log("Initial name:", warehouse.name);  // Output: Warehouse A
console.log("Initial storage:", warehouse.storage);  // Output: 1000
console.log("Initial address:", warehouse.address);  // Output: 123 Main Street

// Thay đổi các thuộc tính
warehouse.name = "GooUp1 House Floor 6";
warehouse.storage = 601;
warehouse.address = "173 Nguyễn Lương Bằng 1";

// Truy xuất lại các thuộc tính sau khi thay đổi
console.log("Updated name:", warehouse.name);  // Output: New Warehouse
console.log("Updated storage:", warehouse.storage);  // Output: 2000
console.log("Updated address:", warehouse.address);  // Output: 456 Elm Street
