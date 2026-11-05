const CONTEUDOS = {
  "portugues": {
    titulo: "Língua Portuguesa",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      "Análise e interpretação de texto: compreensão global; ponto de vista do autor; ideias centrais desenvolvidas em cada parágrafo; inferências.",
      "Comunicação, linguagem e variações linguísticas.",
      "Gêneros e tipologias textuais.",
      "Elementos de coesão e coerência textual.",
      "Ortografia oficial: acentuação gráfica, letra e fonema, sílaba, encontros vocálicos e consonantais, dígrafos.",
      "Emprego das classes de palavras.",
      "Semântica: sinônimos e antônimos, significação das palavras, sentido conotativo e denotativo.",
      "Funções sintáticas.",
      "Concordâncias nominal e verbal.",
      "Pontuação.",
      { t: "Uso dos porquês.", arquivo: "resumos/porques.txt" }, // 👈 Exemplo
      "Literatura Brasileira: prosa e poesia, autores e obras, figuras de linguagem."
    ]
  },
  "raciocinio": {
    titulo: "Raciocínio Lógico",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      "As quatro operações fundamentais.",
      "Comparações, arredondamentos, aproximações e estimativas.",
      "Teoremas de Tales.",
      "Comprimento da circunferência.",
      "Cálculo de área: triângulos, retângulos e círculos.",
      "Medidas de superfícies.",
      "Noções de direção: norte, sul, leste e oeste, esquerda e direita, para cima e para baixo.",
      { t: "Estatística: média, moda e mediana.", arquivo: "resumos/estatistica.txt" }, // 👈 Exemplo
      "Dados, tabelas, gráficos e suas interpretações.",
      "Sequência de números, figuras e letras.",
      "Sequências lógicas.",
      "Probabilidade: certeza e impossibilidade, fenômenos aleatórios, espaço amostral e evento.",
      "Eventos dependentes e independentes.",
      "Probabilidades da união e interseção.",
      "Grandezas direta e inversamente proporcionais.",
      "Razão e proporção.",
      "Regra de três simples e composta.",
      "Matemática financeira: sistema monetário brasileiro, porcentagem, juros simples.",
      "Resolução de problemas."
    ]
  },
  "informatica": {
    titulo: "Noções de Informática",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      "Conceitos de informática.",
      "Hardware de entrada e saída.",
      "Software.",
      "Atalhos de teclado.",
      "Gerenciamento de arquivos.",
      "Segurança de dados.",
      "Ambientes operacionais: Windows 10 e 11 e Linux Ubuntu.",
      "Processador de texto: Word 2016.",
      "Planilhas eletrônicas: Excel 2016.",
      "Navegadores de Internet.",
      "Armazenamento externo e ferramentas de gerenciamento e compartilhamento de arquivos em nuvem: Google Drive.",
      "E-mails: Outlook, Gmail, Webmail (Zimbra).",
      "Busca e pesquisa na Web.",
      "Inteligência artificial e ferramentas generativas de texto: ChatGPT, Copilot, Gemini."
    ]
  },
  "legislacao": {
    titulo: "Legislação",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      "Lei Orgânica do Município de Curitiba (10/04/1990): organização político-administrativa do Município.",
      "Lei Municipal nº 1.656/1958: Estatuto dos Funcionários Públicos Municipais.",
      "Lei Municipal nº 7.671/1991: Organização Administrativa do Poder Executivo do Município de Curitiba.",
      "Constituição Federal de 1988: Título I (arts. 1º ao 4º); Título II (arts. 5º ao 17); Título III (arts. 18, 19, 29, 30, 37 ao 41); Título IV (arts. 44 ao 75).",
      "Lei Federal nº 8.429/1992 e Lei Federal nº 14.230/2021: improbidade administrativa.",
      { t: "Lei Federal nº 12.527/2011: acesso à informação.", arquivo: "resumos/lei-acesso.txt" }, // 👈 Exemplo
      "Lei Federal nº 10.048/2000: prioridade de atendimento às pessoas.",
      "Lei Federal nº 8.069/1990: Estatuto da Criança e do Adolescente – Disposições Preliminares e Direitos Fundamentais.",
      "Decreto-Lei Federal nº 4.657/1942: Lei de Introdução às Normas do Direito Brasileiro (arts. 20 ao 30).",
      "Lei Federal nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais (Capítulo IV)."
    ]
  },
  "adm-publica": {
    titulo: "Fundamentos da Administração Pública",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      "Fundamentos da Administração Pública: conceitos, princípios e organização.",
      "Planejamento, organização, direção e controle.",
      "Processos administrativos: conceitos, princípios, fases e modalidades.",
      "Organização do ambiente de trabalho.",
      "Gestão de pessoas.",
      "Orçamento público."
    ]
  },
  "direito-adm": {
    titulo: "Direito Administrativo",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      "Atos administrativos.",
      "Bens públicos.",
      "Serviços públicos.",
      "Lei Federal nº 14.133/2021: licitações e contratos administrativos.",
      "Lei Municipal nº 16.466/2024: processo administrativo no âmbito da Administração Pública Municipal de Curitiba.",
      "Lei Municipal nº 1.656/1958: processo administrativo disciplinar no âmbito do Estatuto dos Funcionários Públicos Municipais de Curitiba.",
      "Constituição Federal de 1988 e Lei Federal nº 8.429/1992: responsabilidade dos agentes públicos e improbidade administrativa."
    ]
  },
  "direito-const": {
    titulo: "Direito Constitucional",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      "Princípios fundamentais.",
      "Direitos e garantias fundamentais.",
      "Poder constituinte.",
      "Normas constitucionais e hierarquia das normas.",
      "Interpretação constitucional.",
      "Administração Pública na Constituição Federal."
    ]
  },
  "etica": {
    titulo: "Ética, Relacionamento e Atendimento",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      "Ética, integridade, transparência e conflitos de interesses.",
      "Relações interpessoais.",
      "Lei Federal nº 13.460/2017: participação, proteção e defesa dos direitos do usuário dos serviços públicos da Administração Pública.",
      "Comunicação."
    ]
  },
  "arquivologia": {
    titulo: "Gestão da Informação e Arquivologia",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      "Sistemas de informação organizacional.",
      "Arquivologia: conceitos, princípios e gestão documental. Lei Federal nº 8.159/1991: política nacional de arquivos públicos e privados.",
      "Correspondência comercial.",
      "Redação oficial."
    ]
  },
  "pesquisa": {
    titulo: "Métodos e Técnicas de Pesquisa",
    grupo: "2. Conhecimentos Específicos",
    questoes: "Único",
    topicos: [
      "Métodos e Técnicas de Pesquisa."
    ]
  }
};