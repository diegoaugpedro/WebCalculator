function iniciar()
{
    window.location.href = 'calc.html'
}
function sair()
{
    window.alert(`${nome}, obrigado por usar a WEBCalculator. Até breve!`)
    window.location.href = 'index.html'
}
function somar()
{
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var soma = x + y
    window.alert(`${nome}, a soma de ${x} e ${y} é igual a ${soma}!`)
}
function subtrair()
{
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var subtrair = x - y
    window.alert(`${nome}, a subtração de ${x} e ${y} é igual a ${subtrair}!`)
}
function multiplicar()
{
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var multiplicar = x * y
    window.alert(`${nome}, a multiplicação de ${x} e ${y} é igual a ${multiplicar}!`)
}
function dividir()
{
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var dividir = x / y
    window.alert(`${nome}, a divisão de ${x} e ${y} é igual a ${dividir}!`)
}
function media()
{
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var media = (x + y)/2
    window.alert(`${nome}, a média de ${x} e ${y} é igual a ${media}!`)
}
function multiplos3() {
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var xi = x
    var yi = y
    var m3
    var multi3 = []

    /*Para X >= Y*/
    while (xi <= y)
    {
            m3 = (xi % 3)
            if(m3 == 0){
                multi3.push(xi)
            }
            xi ++ 
    }
    /*Para Y >= X*/
    while (yi <= x)
    {
            m3 = (yi % 3)
            if(m3 == 0){
                multi3.push(yi)
            }
            yi ++ 
    }
    window.alert(`${nome}, o(s) multiplo(s) de 3 entre ${x} e ${y} é igual (são iguais) a ${multi3}!`)
}
function multiplos5() {
    var x = Number(document.getElementById('valor01').value)
    var y = Number(document.getElementById('valor02').value)
    var xi = x
    var yi = y
    var m5
    var multi5 = []

    /* Para X >= Y */
    while (xi <= y)
    {
            m5 = (xi % 5)
            if(m5 == 0){
                multi5.push(xi)
            }
            xi ++ 
    }
    /*Para Y >= X */
    while (yi <= x)
    {
            m5 = (yi % 5)
            if(m5 == 0){
                multi5.push(yi)
            }
            yi ++ 
    }
    window.alert(`${nome}, o(s) multiplo(s) de 3 entre ${x} e ${y} é igual (são iguais) a ${multi5}!`)
}
