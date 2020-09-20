export default class LocalStorage{

  static getData(key){
    let data = localStorage.getItem(key);
    if(!data) return []
    return JSON.parse(data)
  }

  static setData(store, product, key){
    /* If havent localstorage, return empty array */
    let data = LocalStorage.getData(key)
    if(!data){
      data = []
    }

    let repeated = NaN // Index of repeated product

    data.forEach((d, id) => {
      /* Remove the current product of array, if present  */
      if( d.store === store && d.product === product ){
        repeated = id
        data.splice(repeated, 1); 
      }
    })

    /* if not present, add of array and save */
    if(isNaN(repeated)){
      data.push({
        store,
        product
      })
    }

    let newData = JSON.stringify(data)
    localStorage.setItem(key, newData)
  }
}