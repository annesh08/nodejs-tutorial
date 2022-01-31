setInterval(() => {
    console.log('hello World')
}, 2000)
console.log('I will run first')
//process stays alive unless
//kill process ctrl+c
//unexpected error


// Output
// I will run first
// hello World
// hello World
// hello World
// hello World
// hello World
// Ctrl+C