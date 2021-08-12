import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Request *CANCELED* successfully. \n Times Always!';
    }

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
    let msg = '🚀*conecta maraba internet*🚀\n\n';
    await client.sendText(
      message.from,
      `🗒️ *ORDER SUMMARY*: \n
      \n🧁 Flavors: *${desserts}*
       \n🚚 Delivery fee: *to be confirmed*.
        \n📍 Address:*${message}*
         \n💰 Value of cakes: *${total * 6},00 reais*.
          \n⏳ Delivery time: *50 minutes*. \n\n` +
        '🔊 ```Now, inform the method of payment and if you will need change, please.```'
    );
    msg += storage[from].stage = 4;

    return msg;
  },
};
