// generate a new color
export const generateColor = () => {
  // https://www.horadecodar.com.br/2022/01/16/gerar-cor-aleatoria-com-javascript/

  const letters = '0123456789ABCDEF';
  let color = '#';

  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
};