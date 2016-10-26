Deloitte Digital Development Test:

This project involved the development of website for a clothing retailer.

To do this I have used the framework React, along with:
Node
Express
Mocha (testing framework)
classnames

If cloning from GitHub you will need to npm install from within the top level folder and within the client folder. To do this type:
$ npm install

Tests for the models can be run from the terminal. From within the client folder type the command:
$ npm test

The components use shopping basket and stock checker models which are in src -> models and have associated tests in src -> specs.
The top-level component is ShopBox which is in src -> components.


The prioritised list of user stories is as follows:
As a User I can view the products and their category, price and availability
information.
1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping
cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart
with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping
cart.
7. As a User I am unable to add Out of Stock products to the shopping cart.


Further extension:
With further time I would do further work to make the CSS responsive to changing screen size. I would also have a menu along the top for different categories of clothing so the user doesn't see the whole list at one time.
Currently you can only use any particular voucher once (if it is valid for your basket) but if your basket meets the overall spend and item requirements you can use more than one different voucher - this can be easily updated depending on what the retailers rules are.