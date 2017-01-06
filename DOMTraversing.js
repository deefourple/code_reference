// accessing the child node
  var child = document.getElementById("bodyChild");
    alert(child);
    console.log(child);

// insertBefore method using zero index
// var insert = document.body.getElementsByTagName("p");
//   document.body.insertBefore(paragraphs[2], paragraphs[0]);

var insert = document.getElementsByTagName("p");
  insert.insertBefore(insert[4], insert[2]);

//replace child method using zero index

var replace = document.getElementsByTagName("p");
  replace.replaceChild(replace[5], replace[1]);

  //innerHTML setting to a new element

document.getElementById("id01").innerHTML = document.getElementById("id02").innerHTML;

or

document.getElementById("id01").innerHTML = document.getElementById("id01").firstChild.nodeValue;

//creating new HTML elements (nodes)

var createP = document.createElement("p");
var createNode = document.createNode("I just inserted this with JavaScript!");
createp.appendChild(createNode);

var elementSelect = document.getElementById("div1");
element.appendChild(createp);

//or insert before ^^^^^^

var elementSelect = document.getElementById("div2");
var sibling = document.getElementById("div1");
elementSelect.insertBefore(createp, sibling);

//remove child ^^

createp.removeChild(sibling);

//styling through JS selection
  var styles = document.getElementById("para");
  console.log(para.style.color);
  para.style.color = "darkblue";




