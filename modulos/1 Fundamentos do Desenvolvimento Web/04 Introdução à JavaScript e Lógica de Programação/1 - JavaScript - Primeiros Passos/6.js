let peça = 'Rei';
peça = peça.toLowerCase();

switch (peça) {
  case 'rei':
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.');
    break;

  case 'rainha':
    console.log('Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
    break;
  
  case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
    break;

  case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser.');
    break;

  case 'cavalo':
    console.log('O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.');
    break;

  case 'peão':
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');
    break;

  default:
    console.log('Erro: peça inválida');
    break;
}