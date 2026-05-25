import React from "react"

import ReactDOM from "react-dom/client"


// const heading = React.createElement("h1", { id: "heading" }, "Namaste React")
// // console.log(heading)



// //JSX is not HTML IN javascript

// // react element

// const Heading = <h1 id="heading" className="head">Namaste React Using JSX</h1>
// // console.log(Heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))

// // root.render(Heading)

// // React Component

// // class Based components - oldWay
// // REact Functional Components - newWAy



// const Heading2 =()=>(

// <div id="container">
// <h1>hello i am bikash</h1>

// </div>

// )

// root.render(<Heading2/>
// const elem =(
//   <span>this is a span</span>
// )

// const element = (
  
//   <div>
//     {elem}
  
//   <h1>i am an element</h1>
//   </div>

// )

const root = ReactDOM.createRoot(document.getElementById('root'))



const Title = ()=>(
  
  <h1>This is a title</h1>

)



const Heading = ()=>( 

  
  <div id="container">
    {Title()}
  <h1>Welcome Everyone</h1>
  </div>
  
)

root.render(<Heading/>)