/* 
EXEMPLO 1 

let num = [5,8,9,3]
    //num[4] = 7 = Adiciona um elemento pra alguma posicao no indice 
    num.push(7)
    //num.length = Pra saber quantos elemtos existem no array num
    //num.sort() = Organiza eles em ordem numerica 
console.log(`Nosso vetor e o ${num}`)
*/



/* EXEMPLO 2 
let num = [5,8,2,9,3]
num.sort() //Organiza eles em ordem numerica 
num.push(1) //Coloca um elemento na ultima posicao do indice
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vator e ${num[0]}`)
*/

let valores = [8 , 1, 7, 4 ,2 ,9]

for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
console.log(`o de cima ou o de baixo`)

for (let pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

