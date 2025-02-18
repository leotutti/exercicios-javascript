// Exercício 01
let numeroSorteado = parseInt(Math.random()*101);
console.log(`O numero sortado é = ${numeroSorteado}`);
numeroSorteado++
console.log(`O seu sucessor é = ${numeroSorteado}`);
numeroSorteado-=2
console.log(`O seu antecessor é = ${numeroSorteado}`);
numeroSorteado = numeroSorteado * 2
console.log(`O dobro do número sorteado é = ${numeroSorteado}`);
numeroSorteado = numeroSorteado / 2
console.log(`A metade do número sorteado é = ${numeroSorteado}`);
// Exercício 02
let nota1 = parseInt(Math.random()*11);
let nota2 = parseInt(Math.random()*11);
let nota3 = parseInt(Math.random()*11);
let nota4 = parseInt(Math.random()*11);
let media = 0
console.log(`Estas são as notas, da primeira até a quarta = ${nota1}, ${nota2}, ${nota3}, ${nota4} e sua média é = ${media = (nota1 + nota2 +nota3 + nota4) / 4}`);
// Exercicio 03
let temperaturaC = parseInt(Math.random()*101);
let fahrenheitF = 0
console.log(`A temperatura em celsius é = ${temperaturaC} e em fahrenheit a temperatura é = ${fahrenheitF = 9/5 * temperaturaC + 32}`);
// Exercício 04
let salario = 1500
let calcas = parseInt(Math.random()*201);
console.log(`O número de calças vendidas neste mês é = ${calcas}, portanto o salário do vendendor neste mês é = ${salario + 35*calcas}`);
// Exercício 05
let base = parseInt(Math.random()*51);
let altura = parseInt(Math.random()*51);
let area = 0
console.log(`Sua base é = ${base}, sua altura é = ${altura}, portanto, a área do triângulo é = ${area = (base * altura) / 2}`);
// Exercício 06
let horasMes = parseInt(Math.random()*251);
let dependentes = parseInt(Math.random()*7);
let salarioFuncionario = 0
let inss = 0
let ir = 0
console.log(`O funcionário trabalhou por ${horasMes} horas neste mês e teve ${dependentes} dependentes, seu salário neste mês é = ${salarioFuncionario = horasMes * 168 + dependentes * 80} reais`);
console.log(`O desconto de 8,5% do INSS é = ${inss = salarioFuncionario * 0.085} e o desconto de 5% do IR é = ${ir = salarioFuncionario * 0.05}`);
console.log(`Seu salário com os descontos é = ${salarioFuncionario = salarioFuncionario - inss - ir}`);
// Exercício 07
let peso = parseInt(Math.random()*201);
console.log(`O peso sorteado é = ${peso}`);
console.log(`O peso depois da pessoa emagrecer 20% é = ${peso - (peso*0.2)}`);
console.log(`O peso depois da pessoa engordar 20% é = ${peso + (peso*0.2)}`);
// Exercício 08
let a = parseInt(Math.random()*51);
let b = parseInt(Math.random()*51);
let c = parseInt(Math.random()*51);
let x = parseInt(Math.random()*51);
let resultadoX = 0
console.log(`A é = ${a}, B é = ${b}, C é = ${c}, X é = ${x} e o resultado da equação é = ${resultadoX = a*(x*x) + b*x + c}`);
// Exercício 09
let numeroAleatório = parseInt(Math.random()*101);
console.log(`O número sorteado é = ${numeroAleatório}`);
if(numeroAleatório % 2 === 0){
  console.log(`O número é par, portanto, ${numeroAleatório*numeroAleatório}`);
} else {
  console.log(`O número é impar, portanto, ${numeroAleatório*numeroAleatório*numeroAleatório}`);
}
// Exercício 10
let numero1 = parseInt(Math.random()*101);
let numero2 = parseInt(Math.random()*101);
let variacao = 0
console.log(`Os números sorteados foram ${numero1} e ${numero2}`);

if(numero1 + numero2 <= 100){
  variacao = (numero1 + numero2) * 3
  console.log(`${numero1} + ${numero2} em seguida * 3 = ${variacao}`);
} else {
  variacao = (numero1 + numero2) * 5
  console.log(`${numero1} + ${numero2} em seguida * 5 = ${variacao}`);
}