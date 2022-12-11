// learn how data can be shared across multiple components,
// and how each can interact with the data like reading and writing to it.
// To do that we wrap the data in a function that
// can calculate the data dynamically as circumstances change over time.
const hello = () => ({message: 'Hello World'});

export default hello;