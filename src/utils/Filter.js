export default class Filter{

    static favoredFilter(showcases, favoredList){

        let newShowcases = []

        showcases.forEach(store => {
            store.products.forEach(prod => {
                favoredList.forEach(favored => {

                    if ( store.id === favored.store && prod.id === favored.product){
                    newShowcases.push(store)
                    }
                })
            })        

        })

        console.log(newShowcases)
    }
}