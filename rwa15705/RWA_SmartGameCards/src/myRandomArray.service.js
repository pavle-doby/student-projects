export function randomArray(length, numberFromZeroTo)
{
    var array = []
    while(array.length < length){
        var randomnumber = Math.floor(Math.random()*numberFromZeroTo) +1;
        if(array.indexOf(randomnumber) > -1) continue;
        array[array.length] = randomnumber ;
    }
    return array.map(x => x-1);
}