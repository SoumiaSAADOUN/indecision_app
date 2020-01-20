console.log ("Application is running!");

// JSX: Javascript XML code 
var app ={
    title: 'Indecision Application',
    subtitle: 'Let me help you taking a good decision :)'
};
var template = (
    <div>
         <h1> {app.title}</h1>
         <p>  {app.subtitle}</p>
    </div>
);


var appRoot = Document.getElementById('app');
ReactDom.render(template,appRoot); // the element that we render and where we want to render it