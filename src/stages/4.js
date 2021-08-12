import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    return `🕒*Novo atendimento*: \n
    \n😀 Nome: *${message}*
     \n📞 telefone: +${phone[0]}
       \n📍 Address:*${address}*
        \n🚚 suporte em domicílio: *Aguardando confirmação*.
         \n💰 Valor: *${total * 6},00 reais*  *ainda não confirmado.
          \n⏳ Tempo de espera: + ou - : 30 minutos.`;
  },
};
