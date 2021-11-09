import React from 'react'

export default function ContactForm() {
  return (
    <div className="form-container">
      <div className="form-text-container">
        <h3>Pronto para deixar de lado as planilhas e ter dados que funcionam para você?</h3>
      </div>
      <div className="form-inputs-container">
        <form>
          <div className="form-inputs">
            <label>
              Nome
              <br />
              <input type="text" placeholder="Insira seu nome" />
            </label>
            <br />
            <label>
              Cargo
              <br />
              <input type="text" placeholder="Insira seu Cargo" />
            </label>
            <br />
            <label>
              E-mail profissional
              <br />
              <input type="text" placeholder="Insira seu E-mail profissional" />
            </label>
            <br />
            <label>
              Telefone
              <br />
              <input type="text" placeholder="(XX) XXXX-XXXX" />
            </label>
            </div>
            <br />
            <label>
            <br />
              Quantidade de pontos monitorados:
              <br />
              10 a 20
              <input type="checkbox"  />
              21 a 30
              <input type="checkbox"  />
              31 a 50
              <input type="checkbox"  />
              Mais de 50
              <input type="checkbox"  />
            </label>
            <br />
            <br />
            <button>Enviar</button>
        </form>
      </div>
    </div>
  )
}
