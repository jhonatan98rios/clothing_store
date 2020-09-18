export default class Utils{

    static classifier(text){
        /* Convert the name of product in a product class */
        return text.split(' ')[0]+'s'
    }

    static moneyToFloat(text){
        return parseFloat(text.replace('R$', '').replace(',','.'))
    }

    static getInstallments(value, numberInstallments){
         return (value / numberInstallments).toFixed(2)
    }
}