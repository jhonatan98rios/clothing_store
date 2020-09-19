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
}