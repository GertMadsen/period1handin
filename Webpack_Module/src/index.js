import f from './module';


function component() {
    let element = document.createElement('div');
    
    
    let output = `Module import of function f:
    
    f(5,2,true,2,"hello World",[1,2,3],new Date(),{}) 
    
    =>

    ${f(5,2,true,2,"hello World",[1,2,3],new Date(),{})}`;
    element.innerText = output;

    return element;
  }
  
  document.body.appendChild(component());