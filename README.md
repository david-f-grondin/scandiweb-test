# Scandiweb New Junior React developer TEST

Hi! The goal of this project is to implement a minimalist store front, using React.

The application should be implemented as per [design](https://www.figma.com/file/MSyCAqVy1UgNap0pvqH6H3/Junior-Frontend-Test-Designs-%28Public%29?node-id=0:1) and communicate with a GraphQL [API](https://github.com/scandiweb/junior-react-endpoint).

Full Instructions can be found [here.](https://www.notion.so/New-Junior-React-developer-TEST-39f601f8aa3f48ac88c4a8fefda304c1)

This project can only be used for candidate assessment purposes.

# Start the project

The endpoint needs to be running in order for this application to work as intended.

(https://github.com/scandiweb/junior-react-endpoint)

To start this application, follow these steps:

1. Define the endpoint address in the file **"./src/settings.json"**

2. Install dependencies- `yarn install`

3. Start the application- `yarn start`

# Dependencies

This project has been created with create-react-app.

It uses the following dependencies (non-exhaustive list):

-   React Redux Toolkit, for state management.

-   React Router Dom, for navigation.

-   Opus GraphQL client, for communication with the Back End.

-   Node Sass, to be able to use the css preprocessor, Sass.

-   Html React Parser, to display the description of products as HTML.

# Files structure

The source code of the project is contained inside the folder **./src**

-   **components:** contains all the presentational components of the application and their respective style files.

-   **containers** containers are stored there, they use the components and connect them to the Redux store.

-   **images** store the few images of the project (logo, cart icon, arrows, etc).

-   **slices** contains the actions and reducers of the application.

-   **store** contains the react store configuration and all the selectors of the application.

-   **util** contains function to communicate with the API and utility functions for the application.

-   _index.js_ - is the entry point of the application.

-   _settings.json_ - is an object that contains the API endpoint under the key 'api_endpoint'.

# Notes

## Design

This application has been implemented while trying to respect the design as much as possible.

However, personal decisions had to be made on points that were not specified in the design.

-   The application is designed to fit on a screen with a width of exactly 1440px (as seen on the design), and can somewhat adjust itself to fit on relatively smaller/larger screens. But rules for responsiveness where not given in the assignment, so it may differ from the design if the width is not exactly the same.

-   Animations and interactions with elements are not given in the design, so they were kept to a minimum (on product card on hover: underline the product name, shadow for the cart circle button etc)

-   Attributes are can be changed on the PDP, in the cart and in the mini cart as well. If two products in the cart become similar, they will fuse into one and the count will be updated.

-   Swatch attributes are represented by rectangles/squares of color. If they are selected then they get a black border and padding.

-   Products attributes description is added to mini cart if the attribute value doesn't make sense by itself ('yes/no' attributes for example).

-   On product cards, swatch attributes are required according to the online instructions, however I've been specifically asked by email to remove them, so they are no longer present.

-   For navigation here is what main buttons do:
    -   Logo in header, redirects to the PLP.
    -   Product card image/product name, redirects to PDP.
    -   Product card circle button (appear only if product is not out of stock), redirects to PDP. Or, if no attributes are required, add the product to cart and stay on PLP.
    -   Add to cart button on PDP, add the product to cart but stay on current page.
    -   Cart, clicking on the product name/brand redirects to the PDP.
    -   Mini cart, view cart button, redirects to the cart page.
    -   Mini cart, check out button, do nothing.
    -   Mini cart and currency menu can be toggled by clicking on their respective buttons. Mini cart can be closed by clicking on the overlay. And currency menu can be closed by clicking outside of the component.

## Data Fetching

The currencies and categories are retrieved at the start of the application.
Also if no products have been retrieved yet, a query is made to retrieve all products for the current category.

When a category button is clicked a query is made to retrieve products for this category.

If the application access the PDP but the product has not already been retrieved previously. A query is made to retrieve this product by ID.
