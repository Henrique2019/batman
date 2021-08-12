import { menu } from '../menu.js';
import { storage } from '../storage.js';
import { neighborhoods } from './neighborhoods.js';
import { semConex } from './semConex.js';

export const stageOne = {
  exec({ from, message, client }) {
    if (message === '1') {
      let msg = '🚀*conecta maraba internet*🚀\n\n';

      Object.keys(menu).map((value) => {
        const element = menu[value];
        if (value === '1') {
          msg += `1️⃣ - _${element.description}_ \n`;
        }
      });
 
      msg += storage[from].stage = 4;

      return msg;
    } else if (message === '2') {
      return (
        '🚀*conecta maraba internet*🚀\n\n' +
        neighborhoods +
        '\n-------------------------------\n \n0️⃣ - ```Iniciar atendimento``` '
      );
      

    } else if (message === '3') {
      return (
        '🚀*conecta maraba internet*🚀\n\n' +
        semConex +
        '\n-------------------------------\n \n0️⃣ - ```Iniciar atendimento``` '
      );
    } else if (message === '4') {
      return (
        '🚀*conecta maraba internet*🚀\n\n' +
        semConex +
        '\n---------------------------\n \n0️⃣ - ```Iniciar atendimento``` '
      );
    }else if (message === '0') {
      let msg = '';
      
      msg += storage[from].stage = 4;

      return (' Digite o nome do titular por favor \n\n' +
      msg )
    }

    return  '❌ *por favor digite a opção valida.*';
  },
};
