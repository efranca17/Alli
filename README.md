# Alli — Assistente Virtual da Mancha de Café

> Assistente virtual com Inteligência Artificial desenvolvido para facilitar a escolha de produtos na cafeteria Mancha de Café.

## Sobre o projeto

A Alli é uma assistente virtual criada para ajudar clientes da Mancha de Café a escolher bebidas, lanches e doces de acordo com suas preferências.

A proposta é transformar a escolha de um produto em uma conversa simples e natural.

## Objetivo

Facilitar a decisão do cliente por meio de recomendações personalizadas, considerando preferências como:

- bebida quente ou gelada;
- opções com ou sem café;
- sabores mais doces;
- tipos de lanches e doces;
- produtos disponíveis no cardápio.

## Problema

Nem sempre o cliente conhece as opções de café disponíveis ou sabe exatamente o que escolher.

A Alli busca solucionar esse problema conversando com o cliente e entendendo o que ele procura antes de apresentar uma recomendação.

## Como a Alli funciona

O funcionamento pode ser resumido em três etapas:

1. Conhecer — identifica o que o cliente está procurando.
2. Entender — considera suas preferências.
3. Recomendar — apresenta uma opção disponível no cardápio.

A comunicação foi desenvolvida para ser natural, objetiva e em português brasileiro.

## Funcionamento técnico

```text
Cliente
   ↓
Site
   ↓
Alli
   ↓
FastAPI
   ↓
OpenAI + Cardápio
   ↓
Resposta para o cliente
O backend utiliza FastAPI para receber as mensagens do frontend e se comunicar com a API da OpenAI.

O cardápio oficial é utilizado como referência para as recomendações, evitando a criação de produtos ou preços que não estejam cadastrados.

## MVP

O projeto atualmente possui:

- Interface web da Alli;
- Site da cafeteria;
- Chat funcional;
- Backend desenvolvido em FastAPI;
- Integração com a API da OpenAI;
- Cardápio estruturado em JSON;
- Recomendações baseadas nas opções disponíveis no cardápio.

## Tecnologias

- HTML
- CSS
- JavaScript
- Python
- FastAPI
- Uvicorn
- OpenAI API
- JSON

## Estrutura do projeto

```text
Alli/
├── Frontend/
│   ├── index.html
│   ├── script.js
│   └── estilo.css
│
├── assets/
│   ├── icon-Alli.png
│   ├── logo-mancha.png
│   └── mancha fundo.png
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── data/
│   └── cardapio.json
│
└── site/
    ├── index.html
    ├── scripts.js
    └── estilo.css
## Cardápio

O projeto utiliza um cardápio estruturado em JSON, contendo categorias como:

- Bebidas quentes;
- Bebidas geladas;
- Lanches rápidos;
- Doces;
- Opções sem café.

As recomendações da Alli são baseadas nos produtos disponíveis nesse cardápio.

## Como executar

### 1. Instalar as dependências

No diretório `backend`, instale as dependências:

```bash
pip install -r requirements.txt
```

### 2. Configurar a chave da OpenAI

A chave da API deve ser configurada como variável de ambiente.

```text
OPENAI_API_KEY=sua_chave_aqui
```

A chave não deve ser publicada no repositório.

### 3. Executar o backend

Dentro da pasta `backend`:

```bash
uvicorn main:app --reload
```

O servidor será executado localmente.

### 4. Executar o frontend

Abra o site pelo VS Code utilizando um servidor local, como o Live Server.

## Exemplo de interação

Cliente:

> Quero uma bebida quente e doce.

Alli:

> Uma opção que combina com isso é o Cappuccino de Baunilha.

A recomendação considera as opções cadastradas no cardápio.

## Segurança

Informações sensíveis, como chaves de API e variáveis de ambiente, não devem ser publicadas no repositório.

## Próximos passos

Como evolução do projeto, podem ser adicionados:

- Histórico de preferências do cliente;
- Recomendações ainda mais personalizadas;
- Integração com pedidos;
- Melhorias na interface;
- Expansão do cardápio;
- Integração com sistemas da cafeteria.

## Resumo

A Alli combina uma interface web, um backend em FastAPI, inteligência artificial e um cardápio estruturado para criar uma experiência de recomendação personalizada para clientes da Mancha de Café.

> Transformar a escolha em uma conversa.
