function findItemsOver20(objects){
    const ItemsOver20 = [];
  
    for(let list of objects){
      if(list.qty > 20){
        ItemsOver20.push({name: list.name, qty: list.qty});
      }
    }
  
    return ItemsOver20;
  }