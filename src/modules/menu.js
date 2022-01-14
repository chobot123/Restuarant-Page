const menu = document.createElement("div");
menu.className = "menu";

const makeMenu = () => {

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    const makeTitle = () => {

        const menuTitle = document.createElement("div");
        menuTitle.id = "menu-title";
        menuTitle.innerHTML = "Menu";
        
        menu.appendChild(menuTitle);
        menu.appendChild(menuContainer);
    }

    const appendFood = (item_Name, item_Price, item_Description) => {
        const food = document.createElement("div");
        food.id = "food";

        const itemAndPrice = document.createElement("div");
        itemAndPrice.id = "item-price";

        const item = document.createElement("div");
        item.id = "item";
        item.innerHTML = item_Name;

        const price = document.createElement("div");
        price.id = "price";
        price.innerHTML = item_Price;

        const description = document.createElement("div");
        description.id = "description";
        description.innerHTML = item_Description;

        itemAndPrice.appendChild(item);
        itemAndPrice.appendChild(price);

        food.appendChild(itemAndPrice);
        food.appendChild(description);

        return food;

    }
    
    const makeAppetizers = () => {
        const appetizers = document.createElement("div");
        appetizers.className = "appetizers";
        appetizers.innerHTML = "Appetizers";

        //first appetizer
        appetizers.appendChild(appendFood("Sweet Potato Fries",
                                               "15",
                                               `Basket of tasty strips of sweet potatoes <br>
                                                deep fried and served with a side of honey <br>
                                                mustard`));

        //second appetizer
        appetizers.appendChild(appendFood("Smoked Nachos Grande",
                                               "25",
                                               `Tortilla chips heaped with Kobe steak <br> strips,
                                               cheddar cheese, lettuce, tomatoes, <br> japapenoes,
                                               salsa and sour cream`));

        //third appetizer
        appetizers.appendChild(appendFood("Buffalo Shrimp Servers",
                                               "17",
                                               `Two skewers of grilled BBQ marinated <br>
                                               shrimp`));

        //fourth appetizer
        appetizers.appendChild(appendFood("House Seafood Special",
                                               "100",
                                               `For a limited time, unlimited King Crab legs <br>
                                               and lobster tails with a side of our house <br>
                                               hollandaise sauce`));

        menuContainer.appendChild(appetizers);
        
    }

    const makePlatters = () => {
        const platters = document.createElement("div");
        platters.className = "platters";
        platters.innerHTML = "Platters";

        //first platter
        platters.appendChild(appendFood("Whiskey Wagyu Ribs",
                                        "65",
                                        `A5 Wagyu rib bones, slow smoked over <br>
                                        hickory and glazed in a whisky BBQ
                                        sauce`));

        //second platter
        platters.appendChild(appendFood("24 oz. House Special Steak",
                                        "150",
                                        `From cows bred meticulously by our founder <br> himself, this steak
                                        is the pinnacle of all <br>steaks, topped with Almas caviar, and served <br>
                                        with a simple side of fries and asparagus`));

        //third platter
        platters.appendChild(appendFood("Beef Wellington",
                                        "80",
                                        `Made with an A5 Wagyu tenderloin 
                                        served <br>with a black truffle brie 
                                        mashed potato <br> and red wine Jus.
                                        Hollandaise sauce`));

        //fourth platter
        platters.appendChild(appendFood("Ham Special",
                                        "60",
                                        `For a limited time, we are serving <br>
                                        slow-roast tomatoes with Iberco Jamon <br>
                                        and Almas caviar in our house black <br>
                                        truffle vinaigrette`));
        
        menuContainer.appendChild(platters);

    }

    makeTitle();
    makeAppetizers();
    makePlatters();

    //hide display default
    menu.style.display = "none";

}

export  {menu, makeMenu}
