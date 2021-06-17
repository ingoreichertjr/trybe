function ex1(a, b) {
  let arithmetics = {
    soma: a+b,
    subtracao: a-b,
    multiplicacao: a*b,
    divisao: a/b,
    resto: a%b,
  }
  return arithmetics
};

function ex2(a, b) {
  if (a > b) {
    return (a)
  }
  else {
    return (b)
  }
};

function ex3(a, b, c) {
  if (a > b && a > c) {
    return a
  }
  else if (b > a && b > c) {
    return b
  }
  return c
};

function ex4(a) {
  if (a > 0) {
    return 'Positive'
  }
  else if (a < 0) {
    return 'Negative'
  }
  return 'zero'
};

function ex5(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    let somatorio = a + b + c
    if (somatorio === 180) {
      return true;
    } else {
      return false;
    }
  }
  return 'Erro: angulos inválidos';
};

function ex6(peça) {
  peça = peça.toLowerCase();

  switch (peça) {
    case 'rei':
      return 'Pode mover-se em qualquer direção, porém apenas uma casa por vez.';

    case 'rainha':
      return 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
    
    case 'torre':
      return 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';

    case 'bispo':
      return 'Move-se na diagonal, quantas casas quiser.';

    case 'cavalo':
      return 'O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.';

    case 'peão':
      return 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';

    default:
      return 'Erro: peça inválida';
  }
};
