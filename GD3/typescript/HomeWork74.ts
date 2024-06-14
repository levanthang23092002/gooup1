function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}
function propertyDecorator(value:number){
    return function (target: any, propertyKey: string) {
       
    
        // Getter function
        const getter = function() {
           
            return value;
        };
    
        // Setter function
        const setter = function(newValue: any) {
          
            value = newValue;
        };
    
        
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function parameterDecorator(target: any, methodName: string, parameterIndex: number) {

       console.log("đây là paramater decorator");
};
function classDecorator(c:number){
    return function<T extends { new(...args: any[]): {} }>(constructor: T){
        return class T extends constructor{
            add(b : Number){
                return (this as any).a +b +c
            }
        }
        
        
    }
}


@classDecorator(7)
class Calculator {
    @propertyDecorator(9)
    a!: number;

    @methodDecorator
    add(@parameterDecorator b: number): number {
        return this.a + b; 
    }
}

const calc = new Calculator();

console.log(calc.add(4)); 
 
