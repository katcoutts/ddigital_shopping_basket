#Deloitte Digital Development Test:

This project involved the development of a website for a clothing retailer.

To do this I have used the framework React, along with:
Node
Express
Mocha (testing framework)
classnames

##Running

If cloning from GitHub you will need to npm install from within the top level folder and within the client folder. To do this type:

$ npm install

To run this from within the top level folder in the terminal type:

$ node server.js

And from within the client folder in the terminal also run:

$ webpack -w

The app runs on localhost:3000

### Running tests

Tests for the models can be run from the terminal. From within the client folder type the command:

$ npm test

###Models and Components

The components use shopping basket and stock checker models which are in src -> models and have associated tests in src -> specs.

The top-level component is ShopBox which is in src -> components.

##User Stories

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

###Vouchers
Note - for the use of vouchers there is currently one valid voucher code:
5-OFF (gives the shopper £5 off their basket)
10-OFF (gives the shopper £10 off if their basket is worth more than £50)
15-OFF (gives the shopper £15 off if their basket is worth more than £75 and they have bought some footwear.)


###Further extension:
With further time I would do further work to make the CSS responsive to changing screen size. I would also have a menu along the top for different categories of clothing so the user doesn't see the whole list at one time.
Currently you can only use any particular voucher once (if it is valid for your basket) but if your basket meets the overall spend and item requirements you can use more than one different voucher - this can be easily updated depending on what the retailers rules are.


<img width="1180" alt="screen shot 2016-10-26 at 14 41 12" src="https://cloud.githubusercontent.com/assets/17859815/19728212/78acf536-9b8a-11e6-99dd-6685fcdba646.png">

<img width="1209" alt="screen shot 2016-10-26 at 14 41 30" src="https://cloud.githubusercontent.com/assets/17859815/19728249/94bfb59c-9b8a-11e6-96db-292702f94d41.png">

<img width="1188" alt="screen shot 2016-10-26 at 14 41 43" src="https://cloud.githubusercontent.com/assets/17859815/19728291/c77af4d8-9b8a-11e6-886e-af4a2a40ee8c.png">
