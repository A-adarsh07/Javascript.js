const array1 = [1,2,3,4,5];
const initialv=0;
const initialsum= array1.reduce(
    (accumulator,currentvalue)=> accumulator + currentvalue,initialv );

    console.log(initialsum);
    // accumulator is empty , and whatever value we gave to initialv , it'll get stored in accumulator at first
    // and as the funtion started the values get updated and assign to accumulator

    const array2=[1,2,3]
    const mytotal =array2.reduce (function (acc,curntval){
        console.log(`acc: ${acc}`);
        return acc+curntval;
    },0)
    console.log(mytotal);