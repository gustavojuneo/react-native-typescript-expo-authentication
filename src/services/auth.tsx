interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '1io243u180431hp28hy1383421uj239qjk23092829i43jp2q83hj91p832ui19043u12',
        user: {
          name: 'Gustavo',
          email: 'gustavo@randomcode.com.br'
        }
      })
    }, 2000);
  });
}