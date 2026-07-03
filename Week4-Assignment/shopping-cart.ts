/*
A shopping-cart system with features:
- add to cart
- remove from cart
- get the total of price in the cart
- sort by price
- search by name of the item
*/

interface Product {
    id: number;
    name: string;
    price: number
}

interface CartItem {
    product: Product;
    quantity: number
}

class ShoppingCart {
    private cart: CartItem[] = []

    // Add to cart
    public addToCart(product: Product, quantity: number): void {
        const newItem: CartItem = { product, quantity }
        const index = this.cart.findIndex(item => item.product.id === product.id)
        if (index !== -1) {
            console.log('Item already exists')
            if (quantity <= 0) {
                console.log('Quantity should not be Negative')
            } else {
                this.cart[index].quantity += quantity
            }
        } else {
            this.cart.push(newItem)
            console.log(`Added: ${product.name}`)
        }
    }

    public removeFromCart(id: number): void {
        const removeItem = this.cart.findIndex(t => t.product.id === id)
        if (removeItem !== -1) {

            this.cart.splice(removeItem, 1)
        } else {
            console.log('Item does not exist')
        }
        // console.log(`Item to remove: ${removeItem}`)
    }

    public getTotalPrice(): void {
        let total = 0;
        this.cart.forEach((item) => total += (item.product.price * item.quantity))
        console.log(`Total price: ${total}`)
        // console.log(`Total price is: ${totalPrice}`)
        // const totalPrice = this.cart.reduce((num, total) => num + total, 0)
    }

    public searchByName(name: string): CartItem | null {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].product.name === name) {
                return this.cart[i]
            }
        }
        return null;
    }

    public shortSearchByName(name: string): CartItem | null {
        return this.cart.find(item => item.product.name === name) ?? null
    }

    //sort by price 
    public sortByPrice(): void {
        this.cart.sort((a, b) => a.product.price - b.product.price)
    }

    public getAllItems(): void {
        console.log("\n--- Current Products Available ---")
        this.cart.forEach(p => console.log(`[ID: ${p.product.id}] ${p.product.name} Quantity: ${p.quantity} - Price: ${p.product.price}`))
        console.log("================================================================================\n")
    }
}

const addBread = new ShoppingCart()
addBread.addToCart({ id: 1, name: 'rice', price: 800 }, 3)
addBread.addToCart({ id: 2, name: 'bread', price: 600 }, 2)
// addBread.getTotalPrice()
// addBread.FastSearchByName(1, 'bread')
// addBread.sortByPrice()
// addBread.removeFromCart(1)
addBread.getAllItems()