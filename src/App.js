import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import logo from './assets/logo2.png';

function App() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [tempo, setTempo] = useState('');
  const [plano, setPlano] = useState('');

  async function handleSubmit(opcao) {
    opcao.preventDefault();

    const data = new FormData();
    data.append('origem', origem);
    data.append('destino', destino);
    data.append('tempo', tempo);
    data.append('plano', plano);

    if (origem === "011" && destino === "016" ) {
      const valorSem = tempo * 1.90;
      var valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.90 * 0.10).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }

    if (origem === "011" && destino === "017" ) {
      const valorSem = tempo * 1.70;
      valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.10 * 1.70).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }

    if (origem === "016" && destino === "011" ) {
      const valorSem = tempo * 2.90;
      valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.10 * 2.90).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }

    if (origem === "017" && destino === "011" ) {
      const valorSem = tempo * 2.70;
      valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.10 * 2.70).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }

    if (origem === "011" && destino === "018" ) {
      const valorSem = tempo * 0.90;
      valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.10 * 0.90).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }

    if (origem === "018" && destino === "011" ) {
      const valorSem = tempo * 1.90;
      valorCom = tempo - plano;
      
      if (valorCom < 0) {
        valorCom = 0;
      } else {
        valorCom = parseFloat((valorCom * 1.10 * 1.90).toFixed(2));
      }

      toast.success(`Valor COM FaleMais: $${valorCom}. Valor SEM FaleMais: $${valorSem}`);
    }
  }

  return (
    <>
      <div className="App">
          <header>
            <img src={logo} alt="Logo FaleMais" />
            
            <a href="#">Adquirir um plano</a>
          </header>

        <main> 
          <h1>FaleMais da Telzir</h1>
          <p>
            Calcule o valor da sua ligação e perceba as inúmeras vantagens 
            disponíveis para você!
          </p>

          <form onSubmit={handleSubmit}>
              <input 
                name="origem"
                placeholder="Código DDD da cidade ORIGEM"
                value={origem}
                onChange={ opcao => setOrigem(opcao.target.value) }
              />

              <input 
                name="destino"
                placeholder="Código DDD da cidade DESTINO"
                value={destino}
                onChange={ opcao => setDestino(opcao.target.value) }
              />

            <input 
              name="tempo"
              type="number"
              placeholder="Duração da sua ligação"
              value={tempo}
              onChange={ opcao => setTempo(opcao.target.value) }
            />

            {/* <input 
              name="plano"
              placeholder="Informe o Plano FaleMais"
              value={plano}
              onChange={ opcao => setPlano(opcao.target.value) }
            /> */}

            <select 
              name="plano"
              value="plano"
              onChange={ opcao => setPlano(opcao.target.value)}
            >
              <option value="">Informe o Plano FaleMais</option>
              <option value="plano1">FaleMais 30</option>
              <option value="plano2">FaleMais 60</option>
              <option value="plano3">FaleMais 120</option>
            </select>

            <button type="submit" onClick={handleSubmit}>
              Calcular valor
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
