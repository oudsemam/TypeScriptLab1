//TALLEST MOUNTAIN
interface Mountain {

    name: string;
    height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

function findNameOfTallestMountain (mountains: Mountain[]){
    let tallest = null;

    for (let mountain of mountains){
        if (!tallest) {
            tallest = mountain
        }
        if (mountain.height > tallest.height) {
        tallest = mountain;
        }   
    } 
    return tallest?.name;  
} 

console.log(findNameOfTallestMountain(mountains));

//PRODUCTS
interface Product {

  name: string;
  price: number;
}

const products: Product[] = [
  {
  name: 'nail polish',
  price: 3.99,
  },
  {
    name: 'earbuds',
    price: 9.99,
  },
  {
    name: 'frame',
    price: 16.00,
  },
];

function calcAverageProductPrice (products: Product[]):number {
  let averagePrice = 0;
  let total = 0

  for (let product of products){
    if (!averagePrice){
      averagePrice = 0
    }
    if (product.price > 0) {
      total = product.price + total;
      averagePrice = total/products.length;
    }
  }
  return averagePrice;
}

console.log (calcAverageProductPrice(products));

//INVENTORY
interface InventoryItem {

  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: {
      name: 'motor',
      price: 10.00,
    },
    quantity: 10,
  },
  {
    product: {
      name: 'sensor',
      price: 12.50,
    },
    quantity: 4,
  },
  {
    product: {
      name:'LED',
      price: 1.00,
    },
    quantity: 20,
  },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let total = 0;

  for (let item of inventory) {
    if (!item.quantity) {
      total = 0;
    }
    if (item.quantity > 0) {
      total += item.quantity * item.product.price;
    }
  }
  return total;
}

console.log (calcInventoryValue (inventory));