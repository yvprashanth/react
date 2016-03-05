var React = require('react/addons');

console.log('inside main jsx file');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initialItems = [
    {
        name: "Ice Cream"
    },
    {
        name: "Waffles"
    },
    {
        name: "Candy",
        purchased : true
    },
    {
        name: "Snarks"
    },
]

React.render(<GroceryItemList items={initialItems}/>, app);
