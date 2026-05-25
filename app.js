




/*

<div id="parent">
<div id="child">
<h1>I am H1 Tag </h1>
<h2>I am H2 Tag</h2>

</div>
<div id="child2">
<h1>I am H1 Tag </h1>
<h2>I am H2 Tag</h2>

</div>


</div>

*/

const parent =React.createElement("div", {id:"parent"},[React.createElement("div", {id:"child"},[React.createElement("h1", {},"i am a h1 tag"),React.createElement("h2", {},"i am a h2 tag")])],

React.createElement("div", {id:"child2"},[React.createElement("h1", {},"i am a h1 tag"),React.createElement("h2", {},"i am a h2 tag")]))


// root.render(parent)


  const heading=React.createElement("h1",{id:"heading"},"Bikash")
  const root = ReactDOM.createRoot(document.getElementById("root"))

  root.render(parent)
  console.log(parent)