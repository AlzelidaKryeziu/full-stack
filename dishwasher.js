let items = {
    water: true,
    soap:2,
    electricity: false
}

function Dishwasher(){
    return new Promise((resolve,reject)=>{
        if(items.water && items.soap && items.electricity > 0){
            resolve ('Clean dishes')}
        else{
            reject('Error')
        }
    })
}

async function start(){
    try {
        const result = await Dishwasher
    } catch (error) {
        
    }
}
Dishwasher(); 

module.exports = {Dishwasher}