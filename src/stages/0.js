import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\n eu sou o GIGA, seu *assistente virtual* da *Conecta Marabá*🚀.\n \n*como posso te ajudar?* 🙋‍♂️ \n\n'
    +'----------digite uma opção----------\n\n'
    +'1️⃣ - ```alterar senha do wi-fi``` \n'
    +'2️⃣ - ```testar velocidade da conexão```\n'
    +'3️⃣ - ```instabilidade de conexão```\n'
    +'4️⃣ - ```sem conexão```\n'
    +'0️⃣ - ```Outros assuntos```';
  },
};
 