// Criar um programa que receba duas notas, calcule a média e:
// - Mostre "Aprovado" se a média for 7 ou mais
// - Mostre "Reprovado" se a média for abaixo de 7

let nota1 = 10
let nota2 = 10
let media = (nota1 + nota2) / 2

if(media >= 7){
    //console.log('Sua nota1 foi ' + nota1 + ' e sua nota2 foi ' + nota2 + ', sua média foi ' + media + ', você foi Aprovado!!')

    console.log(`Sua nota1 foi ${nota1}, sua nota2 foi ${nota2}, a media ficou em ${media}, voce foi aprovado!!`)
}else{
    console.log(`Sua nota1 foi ${nota1}, sua nota2 foi ${nota2}, a media ficou em ${media}, voce foi reprovado!!`)
}




