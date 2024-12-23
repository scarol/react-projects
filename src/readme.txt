Project

1. node_modules contains all the thrid party node_modules
2. index.html is our landing page contains the root div which is our container for the UI it references a script 
the main.tsx to render our root component App
3. package.json contains the dependencies like react and react-dom for our project and also some development dependencies
which will not be deployed to production and are only dev specific
4. tsconfig.json specifies the compiler options on how to compile our code to JavaScript
5. create your first React Component named Message.tsx, tsx is for React components and ts for plain TypeScript
6. Message.tsx is a function based component: function Message(){} and it uses PascalCasing to name the component
7. now use Message as a regular HTML component within the root App component
8. Our app Component Tree now looks like this: App -> Message and when the application starts React will construct a corresponding 
Virtual DOM tree in which each node represents a UI Component and its properties, in this case <div> -> <h1>. This Virtual DOM is 
different from the actual DOM in the browser and is a light-weight in-memory representation of the React Component Tree
9. When the state or data of a UI Component in the Component Tree changes React will update the corresponding node in the Virtual 
DOM to reflect the new state, then it compares the current version of Virtual DOM with the previous version to identify the nodes 
which should be updated. It will then update those nodes in the actual DOM.
10. The actual DOM update is not done by react library itself but by another library called react-dom, both of which are present in 
the package.json "dependencies" property
11. react-dom is for web applications, react-native is for mobile applications



