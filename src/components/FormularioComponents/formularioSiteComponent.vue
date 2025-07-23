<script setup>
import { ref, onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const mostrarCursor = ref(true)
const etapa = ref(0)

const h1Text = ref(null)
const subtitle = ref(null)

const nome = ref('')
const email = ref('')
const telefone = ref('')
const tipoSite = ref('')
const objetivos = ref('')
const referencias = ref('')

function escreverTexto(elemento, texto, delay = 150, etapaAtual = 0) {
  etapa.value = etapaAtual
  let i = 0;
  const escrever = () => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, delay);
    } else {
      mostrarCursor.value = false;
    }
  };
  escrever();
}


async function enviarFormulario() {
  const response = await fetch(import.meta.env.VITE_URL_API + '/forms', {
    method:'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
      tipo_site: tipoSite.value,
      objetivos: objetivos.value,
      referencias: referencias.value
    })
    
  })

  const data = await response.json()

  if(response.ok){
     Toastify({
      text: "Formulário enviado com sucesso! Aguarde uma resposta",
      close:true,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)"
      }
  }).showToast();

    nome.value = ''
    email.value = ''
    telefone.value = ''
    tipoSite.value = ''
    objetivos.value = ''
    referencias.value = ''

  }else{
  Toastify({
      text: "Erro ao enviar formulário, tente novamente",
      close:true,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
          background: "linear-gradient(to right, #ff0000, #ec5353)"
      }
  }).showToast();
}

}


onMounted(() => {
    ScrollReveal().reveal('.area-form', {
    origin: 'right',
    duration: 3000,
    distance: '100px',
  });

  setTimeout(() => {
    if (h1Text.value) {
      escreverTexto(h1Text.value, 'Preencha o formulário para construirmos o seu site!', 50, 1);
    }

    setTimeout(() => {
      if (subtitle.value) {
        escreverTexto(subtitle.value, 'Me fale suas ideias! Em poucos cliques, seu projeto começa a ganhar forma.', 50, 2);
      }
    }, 3000); 

  }, 1000); 

})

</script>

<template>
  <section class="formulario-section">
    <div class="divContent">
        <h1>
            <span ref="h1Text"></span><span class="cursor" v-if="mostrarCursor && etapa === 1">|</span>
        </h1>

        <p>
            <span ref="subtitle"></span><span class="cursor" v-if="mostrarCursor && etapa === 2">|</span>
        </p>

    </div>

    <div class="area-form">
      <form id="form-site" @submit.prevent="enviarFormulario">
        <div>
          <label for="nome">Nome completo</label>
          <input v-model="nome" type="text" id="nome" required />
        </div>

        <div>
          <label for="email">E-mail</label>
          <input v-model="email" type="email" id="email" required />
        </div>

        <div>
          <label for="telefone">Telefone/WhatsApp</label>
          <input v-model="telefone" type="tel" id="telefone" required/>
        </div>

        <div>
          <label for="tipo-site">Que tipo de site você quer?</label>
          <select v-model="tipoSite" id="tipo-site">
            <option disabled>Selecione</option>
            <option value="institucional">Institucional</option>
            <option value="loja_virtual">Loja virtual</option>
            <option value="landing_page">Landing page</option>
            <option value="sistema_web">Sistema Web</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label for="objetivos">Qual o objetivo do site?</label>
          <textarea v-model="objetivos" id="objetivos" rows="3"></textarea>
        </div>

        <div>
          <label for="referencias">Tem algum site de referência ou inspiração?</label>
          <textarea v-model="referencias" id="referencias" rows="2"></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.formulario-section {
  margin: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.divContent {
  color: var(--cor-principal-texto);
  text-align: center;
  max-width: 500px;
}

.area-form {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
  background-color: var(--cor-fundo);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--cor-secundaria);
  border-radius: 14px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cor-secundaria);
  margin-bottom: 4px;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.65rem 0.75rem;
  font-size: 0.95rem;
  background-color: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--cor-principal);
  box-shadow: 0 0 0 2px rgba(14, 116, 144, 0.15);
}

textarea{
    resize: none;
    height: 100px;
}

button {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--cor-principal);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color:var(--cor-secundaria);
  transform: translateY(-1px);
}


</style>

