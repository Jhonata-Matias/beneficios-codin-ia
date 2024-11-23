# Analisador de Benefícios Fiscais do RJ

## Visão Geral

Uma aplicação web abrangente projetada para analisar e identificar benefícios fiscais disponíveis para empresas no estado do Rio de Janeiro. O sistema processa informações da empresa a partir dos cartões CNPJ e fornece recomendações detalhadas com base na legislação tributária atual.

## Funcionalidades

### 1. Upload de Documentos

- Aceita uploads de PDFs de cartões CNPJ
- Interface de arrastar e soltar
- Extração automática das informações da empresa
- Validação do formato PDF

### 2. Coleta de Informações da Empresa

- Processa dados básicos da empresa:
  - Número do CNPJ
  - Nome da empresa
  - Atividade principal
  - Atividades secundárias

### 3. Formulário de Informações Adicionais

- Coleta dados complementares:
  - Faixa de faturamento anual
  - Número de funcionários
  - Localização da empresa (município)
  - Status da licença ambiental
  - Status do plano de investimento

### 4. Análise de Benefícios Fiscais

- Integração com OpenAI GPT-4
- Analisa a elegibilidade da empresa para benefícios fiscais
- Fornece recomendações detalhadas
- Faz referência à legislação relevante

### 5. Geração de Relatórios

- Gera relatórios PDF abrangentes
- Formatação profissional com:
  - Cabeçalho da empresa
  - Alinhamento de texto justificado
  - Numeração de páginas
  - Rodapé corporativo
- Suporte a Markdown para formatação de texto enriquecido

### 6. Integração com CODIN

- Opção para gerar cartas de consulta à CODIN
- Processo seletivo de aplicação de benefícios
- Capacidade de selecionar múltiplos benefícios

## Stack Tecnológico

### Frontend

- React com TypeScript
- Tailwind CSS para estilização
- Lucide React para ícones
- React Markdown para formatação de texto

### Processamento de PDF

- PDF-Lib para geração de PDF
- PDFJS para parsing de PDF

### Integração de API

- API do OpenAI para análise
- Configuração de variáveis de ambiente

### Gerenciamento de Estado

- Hooks do React para estado local
- Prop drilling para comunicação entre componentes

## Segurança

- Proteção de variáveis de ambiente para chaves da API
- Processamento de PDF no lado do cliente
- Comunicação segura com API

## Funcionalidades de UI/UX

- Indicador de progresso
- Estados de carregamento
- Tratamento de erros
- Design responsivo
- Elementos de formulário interativos

## Estrutura de Arquivos

```
src/
├── components/
│   ├── FileUploader.tsx
│   ├── QuestionsForm.tsx
│   └── Report.tsx
├── services/
│   └── openai.ts
├── utils/
│   └── pdfGenerator.ts
└── App.tsx
```

## Configuração do Ambiente

Variáveis de ambiente necessárias:

```
VITE_OPENAI_API_KEY=sua_chave_de_api_aqui
```

## Desenvolvimento

Construído com Vite para uma experiência de desenvolvimento otimizada e builds rápidos.

## Implantação

Compatível com plataformas de hospedagem estática. Requer configuração de variáveis de ambiente para acesso à API do OpenAI.
