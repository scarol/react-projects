This is a React (UI Components) + Nodejs (backend JS runtime) + TypeScript (types checking) + Vite project (dev server) + Bootstrap (comprehensive CSS library for styling the app)

Vite is a build tool and development server for JavaScript applications. Provides HMR capabilities - monitors our app for changes and refreshes the browser automatically when changes are detected.
command to create vite project using React and TS: npm create vite@latest
command to install packages once project is created: npm install
command to run the dev server: npm run dev
with this the local server is ready at: http://localhost:5173/

Nodejs is a backend JavaScript runtime environment.

TypeScript is a superset of JavaScript and can add syntax on top of JavaScript to add 'types'. JavaScript is loosely typed, TypeScript allows types - in JavaScript data that is passed around does not have information reg type, devs must look at the implementation/documentation to figure it out. But with TypeScript devs can specify the type of data being passed around and will show errors if the types don't match. Ex. TypeScript will report an error when passing a string to a function that expects a number. JavaScript will not, it will simply use automatic conversion (coercion), coz JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type and the result is not always what you expect!! TypeScript prevents this as it uses compile time type checking and checks if the specified types match before running the code, not while running the code.

React is a JS Framework that allows to create a UI using small reusable Components and avoids the hassle of working with the DOM. It updates the actual DOM as and when necessary and works with a virtual in-memory DOM to help with performance issues when loading heavy in-memory DOM tree. In React everything is a component linked to a root called the 'App'.

\*\*\* Note: EXTJS was also built using reusable components and a page that was properly divided into sections like top panel, side bar, centre, etc but a major drawback was when trying to load heavy data the resultant DOM tree became huge and caused performance issues as it was all loaded into the memory all-at-once. Querying the DOM used to be a challenge with such a heavy DOM and responses were extremely slow.

React is a library providing a specific functionality and Angular and Vue are frameworks providing a set of tools and guidelines. A library is like a tool and frameworks are like toolsets. React is a tool for building UI, it creates dynamic and interactive UI. But for modern apps we need other tools for HTTP requests, routing, i18n, form validation, navigation, etc and React integrates extremely well with almost all such tools that provide these features. One such library we are using is Bootstrap for styling our app with CSS classes.

Whats done:
// 1. used the items list markup from the getbootstrap.com\docs\ListGroup
// 2. used Prettier to Format Document (CTRL + Shift + P). The parenthesis inside the return are automatically added by Prettier
// code formatter to break the JSX markup into multiple lines
// 3. React components can only return a single element as a JSX markup but in this case we have a h1 and a ul like below:
// 4. h1 gets converted to something like JS React.createElement('h1'); and similarly ul to another element
// 5. two ways to fix this - wrapping the 2 eles in a div so React only has to return a single element, but this is adding an extra
// element in the DOM and is really not needed
// 6. second way - use Fragments as it does not add an extra element in the DOM when the page is rendered using a component returning
// multiple elements
// 7. a shorthand syntax for Fragment is just using an empty angular brackets like <> without the <Fragment> tag, in this case no
// import is needed
// 1. use map function to convert each item to a list item or the <li> element, used arrow function
// 2. use curly braces for dynamically rendering the item
// 3. cannot use expressions such as items.map within a JSX block, can only use HTML elements or other React Components.
// 4. therefore to render data dynamically wrap the expression within braces {}
// 5. compiler gives Warning: Each child in a list should have a unique "key" prop if a unique key is not defined for each rendered item
// usually id is used as a key we will use the item itself
// 6. React needs this unique key to keep track of the items so that whenever its data or state changes like adding or removing items,
// React knows what part of the page has changed
// 7. When items are null, length is 0, return the JSX conditionally, use the curly braces - using the && operator if condition eval to true
// the whole expression evals to true and <p> is returned. if condition evals to false the whole expression evals to false and <p> is not
// rendered
// item onClick returns item name and index
