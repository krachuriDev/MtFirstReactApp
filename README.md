This is a sample React application.

/_
AppLayout
Header
-Logo
-Navigation Items.
Body
-Search Component
-Restro Component
-Restro Card
-Logo.
-Name.
-Cuisine.
-Rating.
-Delivery Time.
-Pagination
Footer
CopyRight
Various links like Socialmedia,Contact Us etc
_/

# 2 types of routing

- client side routing.
- server side routing.

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux.
- Build our store
  - configure the store.
  - create a slice store and pass it to the store object.
- Connect our store to our app.
- Slice (cartSlice)
- dispatch(action) & reducer.
- Selector

# Developer Testing Types

- Unit Testing -- Testing a small portion(a unit/component) of the application.
- Integration Testing -- Testing the interaction between multiple components.
- End to End(e2e) Testing -- It is basically the entire application flow from the time user enters the application and leaves the application.

# Setting up Testing in our app

- Install React Testing Library.
- Install Jest library.
- Install Babel dependencies.
- Configure Babel
- Configure Parcel config file to disable default Babel transpilation.
-- Jest configuration -- npx jest --init
-- Install JSDom library if you have Jest package with higher that version 28.
-- Install @babel/preset-react inside my babel config.
-- Install @testing-library/jest-dom