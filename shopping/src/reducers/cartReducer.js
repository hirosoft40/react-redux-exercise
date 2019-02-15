function cartReducer(state, action){
    if(state === undefined){
        return{
            totalCost:0,
            productCart:[
                {
                    productName:'Oranges',
                    productPrice:1
                }
            ]
        }
    }

}