export function getMenuItems(){
const menuItemsList = [
  {
    category: "Appetizers",
    items: [
      { item: "Bruschetta", description: "Grilled bread with tomato, basil & olive oil", cost: "$249" },
      { item: "Crispy Calamari", description: "Lightly fried, served with garlic aioli", cost: "$299" },
      { item: "Stuffed Mushrooms", description: "Baked mushrooms with cheese & herbs", cost: "$279" },
      { item: "Falafel Bites", description: "Chickpea fritters with tahini dip", cost: "$259" }
    ]
  },
  {
    category: "Signature Dishes",
    items: [
      { item: "Margherita Pizza", description: "Classic pizza with mozzarella & basil", cost: "$399" },
      { item: "Veg Alfredo Pasta", description: "Creamy pasta with seasonal vegetables", cost: "$349" },
      { item: "Grilled Chicken Steak", description: "Herb butter sauce & sautéed veggies", cost: "$499" },
      { item: "Paneer Tikka Wrap", description: "Spiced paneer with fresh veggies & sauce", cost: "$379" }
    ]
  },
  {
    category: "Sweet Endings",
    items: [
      { item: "Chocolate Lava Cake", description: "Warm cake with gooey chocolate center", cost: "$249" },
      { item: "New York Cheesecake", description: "Classic creamy cheesecake", cost: "$269" },
      { item: "Tiramisu", description: "Coffee-flavored Italian dessert", cost: "$279" },
      { item: "Mango Panna Cotta", description: "Smooth mango cream dessert", cost: "$259" }
    ]
  },
  {
    category: "Beverages",
    items: [
      { item: "Fresh Lemonade", description: "Classic refreshing lemonade", cost: "$149" },
      { item: "Cold Coffee", description: "Chilled coffee with milk & ice", cost: "$179" },
      { item: "Mango Smoothie", description: "Creamy mango drink", cost: "$199" },
      { item: "Mint Mojito", description: "Refreshing mint and lime drink", cost: "$199" }
    ]
  }
];
  return menuItemsList;
}