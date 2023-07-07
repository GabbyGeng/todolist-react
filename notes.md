# todo-list-react

## Steps

## 1. State Variable

In App.jsx, set up a state variable called items using the useState hook.
The initialState is an empty array.

## 2. Form component

Create a form component that contains an input filed and a submit button. When the user submits the form, the handleSubmit function is called.
In the handleSubmit function, prevent the default form submission behavior using
event.preventDefault().
set up a state variable called newItemName using the useState hook
bind the input field value to newItemName
if the form is submitted with an empty value (!newItemName), return.
when the input value is changed, the setNewItemName function is called.

## 3. Add Item

If the form is submitted with a value, create a newItem object that includes a name (taken from the from input), a completed property (default value false), and a unique id (generated using a library like uuid or nanoid).
In App.jsx, Add the new item to the items state varible using the setItems function setItems([...items, newItem])
when the input feild value is changed, the addItem function is called, using addItem(newItemName)
clean the input feild, using the setNewItemName('') function

## 4. Render Item List

Create two new components: Items and SingleItem. In Items, iterate over the list of items and render each one in a SingleItem component.

## 5. SingleItem

In singleItem, set up a state variable called isChecked with a default value of the item's completed property: const [isChecked, setIsChecked] = useState(item.completed)
create a input field (type: checkbox), p field {item.name} and a delete button.
Render a checkbox and add inline styles to add or remove the text-dectation: line-through property based on the isChecked value.
set up functionality to toggle the isChecked state variable when the checkbox is clicked

## 6. Remove Item

In App.jsx, create a removeItem function(using array filter function) and pass it down to the SingleItem component. In SingleItem, add a button that, when clicked, removes the item from the list.
const removeItem = (itemId) => {
const newItems = items.filter((item) => item.id !== itemId);
setItems(newItems);
};

## 7. Local Storage

local storage is a built in object in the browsers that allows us to save key value pairs locally
