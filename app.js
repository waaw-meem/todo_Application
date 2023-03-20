// Targeting DOM element
const userInput = document.getElementById('user_list');
const addListBtn = document.getElementById('submit_btn');
const listParent = document.getElementById('list-container');

// Event Listener
addListBtn.addEventListener("click", myFunction);

// Function for click Event
function myFunction() {
 
  // Create p Element and his attribute
  var listElement = document.createElement('p')
  listElement.setAttribute('class','itemName')


  var textNode = document.createTextNode(userInput.value);
  listElement.appendChild(textNode)

  // Append the text node to the item_list element
  var unorderedlistItem = document.createElement('li');
  unorderedlistItem.setAttribute('class','middle_item')

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (this.checked == true) {
      // Mark the list item as complete
      checkbox.style.textDecoration = 'line-through';
      removeButton.className += " active"
    } else {
      // Mark the list item as incomplete
      checkbox.style.textDecoration = 'none';
    }
  });

  // Delete button and his function to remove list item
  var removeButton = document.createElement('button');
  removeButton.innerText = "Delete"
  removeButton.setAttribute('class','removebtn')

  removeButton.addEventListener('click', removeItem)
  function removeItem(){
    unorderedlistItem.remove(removeButton)
  }

  unorderedlistItem.appendChild(checkbox);
  unorderedlistItem.appendChild(listElement);
  unorderedlistItem.appendChild(removeButton)


  unorderedList.appendChild(unorderedlistItem)
}

// Creating Element
var item_list = document.createElement('div');
var unorderedList = document.createElement('ul');


// Adding class to the div
item_list.className = "item";

// Append
listParent.appendChild(item_list);
item_list.appendChild(unorderedList)


