function LogClass(constructor: Function) {
    console.log(`Class ${constructor.name} được khởi tạo.`);
}

@LogClass
class Box<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;
    }

    display(): void {
        console.log(`Giá trị trong Box: ${this._value}`);
    }
}

const numberBox = new Box<number>(10);
numberBox.display();

const stringBox = new Box<string>("Hello TypeScript");
stringBox.display();
