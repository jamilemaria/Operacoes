// Função que classifica a temperatura
function classificandoTemperatura(temp) {
    if (temp < 0) {
        return "Temperatura negativa (congelante)";
    } else if (temp >= 0 && temp < 15) {
        return "Temperatura baixa";
    } else if (temp >= 16 && temp < 25) {
        return "Temperatura agradável (ok)";
    } else if (temp >= 26 && temp < 32) {
        return "Temperatura alta (calor)";
    } else {
        return "Temperatura muito alta (deserto)";
    }
}

console.log(classificandoTemperatura(14));
console.log(classificandoTemperatura(30));
console.log(classificandoTemperatura(-12));
console.log(classificandoTemperatura(41));
console.log(classificandoTemperatura(18));
