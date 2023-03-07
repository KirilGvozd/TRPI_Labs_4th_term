//Задание 1
interface IProduct {
    shoes: {
        boots: {
            id:number,
            size: number,
            color:string,
            price:number
        },
        sneakers: {
            id:number,
            size: number,
            color:string,
            price:number
        },
        sandals: {
            id:number,
            size: number,
            color:string,
            price:number
        },
    },
    [Symbol.iterator]()
}

let product: IProduct = {
    shoes: {
        boots: {
            id: 1,
            size: 42,
            color: 'Чёрный',
            price: 200

        },
        sneakers: {
            id: 2,
            size: 43,
            color: 'Белый',
            price: 250

        },
        sandals: {
            id: 3,
            size: 45,
            color: 'Бежевый',
            price: 100
        }
    },
    //Задание 2
    [Symbol.iterator]() {
        return {
            current: this.shoes.boots.id,
            last: this.shoes.sandals.id,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

for (let value of product) {
    alert(value);
}

//Задание 3

let choice:number = 1;
let found:boolean = false;
while (choice) {
    choice = Number(prompt('Выберите фильтр:\n1: Фильтр по цене' +
        '\n2: Фильтр по размеру \n3: Фильтр по цвету \n0: Выход.'));

    switch (choice) {
        case 1:
            let minPrice = prompt('Введите минимальную цену');
            let maxPrice = prompt('Введите максимальную цену');
            for (let key in product.shoes) {
                if (product.shoes[key].price >= minPrice && product.shoes[key].price <= maxPrice) {
                    alert(product.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 2:
            let size = prompt('Введите размер');
            for (let key in product.shoes) {
                if (product.shoes[key].size == size) {
                    alert(product.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 3:
            let color:string = prompt('Введите цвет');
            for (let key in product.shoes) {
                if (product.shoes[key].color == color) {
                    alert(product.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 0:
            choice = 0;
            break;
        default:
            alert('Неверный ввод');
    }
}


//Задание 4
class Product
{
    public readonly id : number;
    public readonly size : number;
    public readonly color : string;
    public price : number;
    public sale : number;
    private endPrice : number;

    //Задание 5
    public get EndPrice() : number {
        return this.endPrice;
    }

    public set EndPrice(v : number) {
        this.price = v;
        this.endPrice = (100 - this.sale) * this.price / 100;
    }

    constructor(
        ID : number,
        Size : number,
        Color : string,
        Price : number,
        Sale : number = 0
    )
    {
        this.id = ID;
        this.size = Size;
        this.color = Color;
        this.price = Price;
        this.sale = Sale;
        this.endPrice = (100 - Sale) * Price / 100;
    }
}

const boots1 = new Product(1, 41, "Белый", 150, 10);
const boots2 = new Product(2, 42, "Черный", 200, 20);
const boots3 = new Product(3, 43, "Жёлтый", 700, 30);
const boots4 = new Product(4, 44, "Сиреневый", 340, 40);

let warehouse : Product[] = [boots1, boots2, boots3, boots4];
for (let product of warehouse) {
    alert("ID продукта: " + product.id + "\nКонечная цена продукта: " + product.EndPrice)
}