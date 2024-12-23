// this is a function based component
function Message() {
    // this syntax is called JSX - JavaScript XML
    // JSX gets converted to JavaScript code while rendering the component
    // too see how it looks upon conversion use babeljs.io/repl
    /* Babel is a JavaScript compiler​, it is a toolchain that is mainly used 
        to convert ECMAScript 2015+ code into a backwards compatible version of 
        JavaScript in current and older browsers or environments. 
    */
    const name = 'sk';
    if (name)
        return <h1>Hi there {name}, greetings from React app !</h1>
    return <h1>Hi there !</h1>
}

// export Message as a default object from this module
export default Message;