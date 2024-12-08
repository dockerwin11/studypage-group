export const cart = [];

export function addItem(id, typeClass, rentItems, setRentItems) {
    console.log(id);
    console.log(typeClass);
    console.log(rentItems);   // rentItem
    console.log(setRentItems);
    console.log(cart);
    const selectedItem = rentItems.find((item) => item.id === id);
    const cartItem = cart.find((item) => item.id === id && item.type === typeClass);
    const rentItemIndex = rentItems.findIndex((item) => item.id === id);

    console.log(selectedItem);
    console.log(cartItem);
    console.log(rentItemIndex);
    

    if (cartItem !== undefined) {
        console.log("here1");
        cart.forEach((item) => {
            if (item.id === id && item.type === typeClass) {
                // item.quantity += 1;
                rentItems[rentItemIndex].quantity += 1; // Update rentItem quantity
            }
        });
    } else {
        console.log("here2");
        cart.unshift(selectedItem);
        // selectedItem.quantity = 1;
        rentItems[rentItemIndex].quantity = 1; // Initialize rentItem quantity
    }

    setRentItems([...rentItems]); // Trigger re-render
    getTotal(cart);
    updateCart();
    
}

export function deleteItem(id, typeClass, rentItems, setRentItems) {
    const cartItem = cart.find((item) => item.id === id && item.type === typeClass);
    const rentItemIndex = rentItems.findIndex((item) => item.id === id);

    if (cartItem !== undefined) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id && cart[i].type === typeClass && cart[i].quantity > 1) {
                // cart[i].quantity -= 1;
                rentItems[rentItemIndex].quantity -= 1; // Update rentItem quantity
            } else if (cart[i].id === id && cart[i].type === typeClass && cart[i].quantity <= 1) {
                const removeProductById = (array, id) => {
                    return array.filter(item => item.id !== id || item.type !== typeClass);
                };

                const updateProduct = removeProductById(cart, id);
                cart.length = 0;
                cart.push(...updateProduct);
                rentItems[rentItemIndex].quantity = 0; // Reset rentItem quantity
            }
        }
    }

    console.log(cart);
    setRentItems([...rentItems]); // Trigger re-render
    getTotal(cart);
    updateCart();
}

export function getTotal(cart) {

    // console.log(cart);
    // Update totalItem (all item) and each item (total quantity and price)
    let { totalItem, cartTotal } = cart.reduce(
        (total, cartItem) => {
            console.log(total);
            console.log(cartItem);
            total.totalItem += cartItem.quantity;
            total.cartTotal += cartItem.price * cartItem.quantity;
            return total;
        },
        { totalItem: 0, cartTotal: 0 }
    );

    // console.log(totalItem);
    // console.log("noOfItem - " + `${totalItem} items`);

    // Update the totalItem and temporary store in the noOfItem variable for invoice HTML 
    localStorage.setItem('noOfItem', `${totalItem} items`);

    // Update the total and temporary store in the total variable for invoice HTML 
    localStorage.setItem('total', `$${cartTotal}`);

}

export function updateCart() {

    // console.log(cart.length);

    // sort the cart and group the same type together
    if (cart.length > 1) {
        cart.sort(function (type1, type2) {

            let temp1 = type1.type.toUpperCase();
            let temp2 = type2.type.toUpperCase();
            
            if (temp1 < temp2) {
                return -1;
            }
            if (temp1 > temp2) {
                return 1;
            }
            return 0;
        });
    }

    // Prepare the invoiced item for invoice HTML 
    const cartHTML = cart.map(
        (item) => `<div class="cart-item">
                    <h3>${item.name}</h3>                
                    <p class="qty">${item.quantity}</p>
                    <p class="amount">$${item.price * item.quantity}</p>                                
                    </div>`
    );

    // console.log("cartHTML - " + cartHTML);
    // Update the invoice item list and temporary store in the invoice-paid variable for invoice HTML 
    localStorage.setItem('invoice-paid', cartHTML);

    // Update the total item and temporary store in the totalCart variable for invoice HTML 
    // localStorage.setItem('totalCart', JSON.stringify(cart));
}