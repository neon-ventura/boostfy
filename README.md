# BoostFy - Onboarding de Clientes

Bem-vindo ao repositório do **BoostFy**, uma aplicação voltada para automatizar o cadastro de clientes na plataforma ClickUp, auxiliando empresas a crescerem de maneira organizada e eficiente.

## 🚀 Como iniciar o projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as constantes no backend:**
   - Navegue até o arquivo `src/app/api/route.js`.
   - Modifique as seguintes constantes:
     - **`listId`**: Substitua pelo ID da lista desejada no ClickUp.
     - **`authorization`**: Substitua pelo token de acesso correspondente à conta do ClickUp.

4. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

6. **Teste o formulário:**
   - Após enviar os dados pelo formulário, confira se um novo card/task foi criado na lista configurada no ClickUp.

---

## 🛠 Tecnologias Utilizadas

A aplicação utiliza as seguintes tecnologias:

- **Next.js**: Framework React para construção de aplicações web rápidas, com suporte nativo a renderização no lado do servidor (SSR) e rotas simplificadas.
- **React**: Biblioteca JavaScript para criação de interfaces de usuário dinâmicas e reutilizáveis.
- **React-dom**: Responsável por conectar os componentes React ao DOM da aplicação.
- **Sweetalert2**: Biblioteca para criar alertas estilizados e interativos no front-end, garantindo uma melhor experiência do usuário.

---

## 🎯 Propósito da Aplicação

A **BoostFy** tem como objetivo ajudar empresas a crescerem, oferecendo serviços como marketing, organização e visualização. Esta aplicação automatiza o processo de cadastro de clientes ao criar automaticamente um card (ou "task") em uma lista configurada no ClickUp.

Os dados enviados pelo formulário, incluindo um arquivo anexo, são registrados na API ClickUp, ajudando na organização e gestão dos clientes.

---

## 🎨 Front-end

- **Tecnologias Utilizadas:** JSX e CSS puro.
- **Responsividade:** Implementada com media-queries no CSS para garantir uma boa experiência em dispositivos móveis e desktops.

---

## 🔧 Back-end

- **Tecnologia Principal:** Next.js.
  - O Next.js foi escolhido por sua simplicidade e por eliminar a necessidade de bibliotecas externas como Express, sendo ideal para aplicações pequenas.
  
- **Estrutura:**
  - O endpoint `/api` está localizado em `src/app/api/route.js`.
  - Foi utilizado o método **POST** para realizar requisições à API do ClickUp.
  - A biblioteca **NextResponse** é usada para retornar mensagens para o front-end, indicando o sucesso ou falha da operação.

---

## 🤔 Por que usar Next.js?

O Next.js foi escolhido por ser uma solução completa para aplicações modernas, oferecendo:
- Renderização no lado do servidor (SSR), melhorando a performance e o SEO.
- Roteamento simplificado, facilitando o desenvolvimento.
- APIs integradas, reduzindo a dependência de bibliotecas externas.
- Excelente integração com React e ecossistema JavaScript.

---

## 🌟 Conclusão

O BoostFy é uma aplicação prática e eficiente para automatizar o onboarding de clientes, oferecendo uma solução robusta e organizada com o suporte da API ClickUp.

Se você tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou entrar em contato com o desenvolvedor.

Obrigado por usar a BoostFy! 🚀

