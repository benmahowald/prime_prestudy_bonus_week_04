console.log( 'inventory.js sourced' );
// global vars
var inventory=[];
var selectedColor ='none';
var selectedSize ='none';
var selectedName = 'none';

var addItem = function( color, name, size ){
  console.log( 'adding item: ' + name + ' ' + color + ' ' + size );
  var newItem = {
    color: color,
    name: name,
    size: size
  }; // end newItem
  inventory.push( newItem );
  console.log( inventory );
} // end addItem

var searchInventory = function(){
  console.log( 'in searchInventory' );
  // get size from user
  selectedSize = document.getElementById( 'sizeIn' ).value;
  // get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  // get name from user
  selectedName = document.getElementById( 'nameIn' ).value;
  //get created item from user field


  // array for our results
  var results = [];

  // loop through the inventory array and see if any item matches
  for( var i = 0; i < inventory.length; i++ ){
    //check for just size matches
    if(inventory[ i ].size == selectedSize && selectedColor == 'Choose Color' ){
      results.push( inventory[ i ] );
    }
    //check for just color matches
    if( inventory[ i ].color == selectedColor && selectedSize == 'Choose Size' ) {
      results.push( inventory[ i ] );
    }
      // does selection match size and color?
    if( inventory[ i ].color == selectedColor && inventory[ i ].size == selectedSize ){
      results.push( inventory[ i ] );
    }
    // check if the user's input is a match for an item name
    if( inventory [ i ].name === selectedName) {
      results.push ( inventory [ i ] );
    }
    if( results.length === 0) {
      inventory.push(addItem(selectedColor, selectedName, selectedSize ));
      results.push ( inventory [ i ]);
    }
  }; // end for

  // add user created item to inventory array


  console.log( results.length + ' matches found' );
  console.log( results );

} // end searchInventory


///////// ADD ITEMS /////////
addItem( 'blue', 'Smurf', 'small');
addItem( 'blue', 'blueberry', 'small');
addItem( 'mermaid treasure', 'Prime Academy', 'large');
addItem( 'bus seat green', 'Baby Banner', 'medium');
addItem( 'purple', 'Eggplant', 'small');
addItem( 'purple', 'Prince', 'medium');
