export const priceFormatter=(price:number)=>{
    return new Intl.NumberFormat('id-ID',{
        style:'currency',
        currency:'IDR'
    }).format(price)
}