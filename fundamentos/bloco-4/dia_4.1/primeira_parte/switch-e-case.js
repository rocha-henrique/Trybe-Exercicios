var processoSeletivo = "reprovado";

switch (processoSeletivo) {
    case "reprovado":
        console.log("Infelizmente não foi dessa vez, mas não desanime sei que na proxima vez sera melhor.");
        break;
    
    case "lista":
        console.log("Volte mais tarde, ainda estamos montando a lista.");
        break;

    case "aprovado":
        console.log("Parabéns pela conquista, você foi aprovado.");
        break;

    default:
        console.log("Não se aplica.");
}