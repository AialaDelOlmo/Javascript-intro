// Managing a Stack

let bookCart = [];

const ADD_TO_CART_ACTION = 'addToCart';
const REMOVE_FROM_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function viewCart() {
    console.log('Current cart of books: ', bookCart);
}

function performCartActions (action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;
        case REMOVE_FROM_CART_ACTION:
            if(bookCart.length === 0){
                console.log('Cart is empty. No books to remove.');
            }else {
                const removedBook = bookCart.pop();
                console.log(`Removed book from the cart: ${removedBook}`);
            }
            break;
        case VIEW_CART_ACTION:
            viewCart();
            break;
        default:
            console.log('Invalid action. Please choose a valid option.')
    }
}

performCartActions(ADD_TO_CART_ACTION,'Harry Potter');
performCartActions(VIEW_CART_ACTION);

performCartActions(ADD_TO_CART_ACTION,'Cien años de soledad');
performCartActions(VIEW_CART_ACTION);

performCartActions(ADD_TO_CART_ACTION,'La hermana perdida');
performCartActions(VIEW_CART_ACTION);

performCartActions(ADD_TO_CART_ACTION,'Siempre nos quedará el verano');
performCartActions(VIEW_CART_ACTION);

performCartActions(REMOVE_FROM_CART_ACTION);
performCartActions(VIEW_CART_ACTION);