import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```ENCERRAR atendimento``` \n*️⃣ - ```Cancelar atendimento```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return '🔴 atendimento *CANCELADO* com sucesso!.\n\n ```Obrigado```';
    } else if (message === '#') {
      storage[from].stage = 3;

      return (
        '🗺️ Agora digite o *nome do titular*. \n \n ' +
        '\n-----------------------------------\n*️⃣ - ```CANCEL order```'
      );
    } else {
      if (!menu[message]) {
        return `❌ *Invalid code, retype!* \n\n ${order}`;
      }
    }

    storage[from].itens.push(menu[message]);

    return (
      `✅ *${menu[message].description}* Adicionado com sucesso \n\n` +
       order
    );
  },
};
