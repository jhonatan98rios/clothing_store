export default class Filter{

    static favoredFilter(showcases, favoredList){
        
        let copyShowcases = JSON.parse(JSON.stringify(showcases))

        let newShowcases = copyShowcases.map(sc => {
            sc.products = []
            return sc
        })

        favoredList.forEach(f => {
            
            newShowcases[f.store-1].products.push( showcases[f.store-1].products[f.product-1] )
        })

        newShowcases = newShowcases.filter(ns => {
            return ns.products.length > 0
        })

        return newShowcases
    }


    static searchFilter(showcases, text){

        let copyShowcases = JSON.parse(JSON.stringify(showcases))

        let newShowcases = copyShowcases.map(sc => {
            sc.products = []
            return sc
        })

        showcases.forEach(stores => {
            stores.products.forEach(product => {
                if(product.name.includes(text)){
                    newShowcases[stores.id-1].products.push( showcases[stores.id-1].products[product.id-1] )
                }
            })
        })

        newShowcases = copyShowcases.filter(ns => {
            return ns.products.length > 0
        })

        return newShowcases

    }
}