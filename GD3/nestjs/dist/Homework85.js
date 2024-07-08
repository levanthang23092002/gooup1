var ServiceA = /** @class */ (function () {
    function ServiceA(serviceB) {
        this.serviceB = serviceB;
    }
    ServiceA.prototype.doSomething = function () {
        console.log("Service A is doing something");
        this.serviceB.doSomethingElse();
    };
    return ServiceA;
}());
var ServiceB = /** @class */ (function () {
    function ServiceB(serviceA) {
        this.serviceA = serviceA;
    }
    ServiceB.prototype.doSomethingElse = function () {
        console.log("Service B is doing something else");
        this.serviceA.doSomething();
    };
    return ServiceB;
}());
var serviceB = new ServiceB();
var serviceA = new ServiceA(serviceB);
serviceA.doSomething();
