const CONTEUDOS = {
  "portugues": {
    titulo: "Língua Portuguesa",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      { t: "Análise e interpretação de texto: compreensão global; ponto de vista do autor; ideias centrais desenvolvidas em cada parágrafo; inferências.", arquivo: "resumos/por01.txt" },
      { t: "Comunicação, linguagem e variações linguísticas.", arquivo: "resumos/por02.txt" },
      { t: "Gêneros e tipologias textuais.", arquivo: "resumos/por03.txt" },
      { t: "Elementos de coesão e coerência textual.", arquivo: "resumos/por04.txt" },
      { t: "Ortografia oficial: acentuação gráfica, letra e fonema, sílaba, encontros vocálicos e consonantais, dígrafos.", arquivo: "resumos/por05.txt" },
      { t: "Emprego das classes de palavras.", arquivo: "resumos/por06.txt" },
      { t: "Semântica: sinônimos e antônimos, significação das palavras, sentido conotativo e denotativo.", arquivo: "resumos/por07.txt" },
      { t: "Funções sintáticas.", arquivo: "resumos/por08.txt" },
      { t: "Concordâncias nominal e verbal.", arquivo: "resumos/por09.txt" },
      { t: "Pontuação.", arquivo: "resumos/por10.txt" },
      { t: "Uso dos porquês.", arquivo: "resumos/por11.txt" },
      { t: "Literatura Brasileira: prosa e poesia, autores e obras, figuras de linguagem.", arquivo: "resumos/por12.txt" }
    ]
  },
  "raciocinio": {
    titulo: "Raciocínio Lógico",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      { t: "As quatro operações fundamentais.", arquivo: "resumos/rlm01.txt" },
      { t: "Comparações, arredondamentos, aproximações e estimativas.", arquivo: "resumos/rlm02.txt" },
      { t: "Teoremas de Tales.", arquivo: "resumos/rlm03.txt" },
      { t: "Comprimento da circunferência.", arquivo: "resumos/rlm04.txt" },
      { t: "Cálculo de área: triângulos, retângulos e círculos.", arquivo: "resumos/rlm05.txt" },
      { t: "Medidas de superfícies.", arquivo: "resumos/rlm06.txt" },
      { t: "Noções de direção: norte, sul, leste e oeste, esquerda e direita, para cima e para baixo.", arquivo: "resumos/rlm07.txt" },
      { t: "Estatística: média, moda e mediana.", arquivo: "resumos/rlm08.txt" },
      { t: "Dados, tabelas, gráficos e suas interpretações.", arquivo: "resumos/rlm09.txt" },
      { t: "Sequência de números, figuras e letras.", arquivo: "resumos/rlm10.txt" },
      { t: "Sequências lógicas.", arquivo: "resumos/rlm11.txt" },
      { t: "Probabilidade: certeza e impossibilidade, fenômenos aleatórios, espaço amostral e evento.", arquivo: "resumos/rlm12.txt" },
      { t: "Eventos dependentes e independentes.", arquivo: "resumos/rlm13.txt" },
      { t: "Probabilidades da união e interseção.", arquivo: "resumos/rlm14.txt" },
      { t: "Grandezas direta e inversamente proporcionais.", arquivo: "resumos/rlm15.txt" },
      { t: "Razão e proporção.", arquivo: "resumos/rlm16.txt" },
      { t: "Regra de três simples e composta.", arquivo: "resumos/rlm17.txt" },
      { t: "Matemática financeira: sistema monetário brasileiro, porcentagem, juros simples.", arquivo: "resumos/rlm18.txt" },
      { t: "Resolução de problemas.", arquivo: "resumos/rlm19.txt" }
    ]
  },
  "informatica": {
    titulo: "Noções de Informática",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      { t: "Conceitos de informática.", arquivo: "resumos/inf01.txt" },
      { t: "Hardware de entrada e saída.", arquivo: "resumos/inf02.txt" },
      { t: "Software.", arquivo: "resumos/inf03.txt" },
      { t: "Atalhos de teclado.", arquivo: "resumos/inf04.txt" },
      { t: "Gerenciamento de arquivos.", arquivo: "resumos/inf05.txt" },
      { t: "Segurança de dados.", arquivo: "resumos/inf06.txt" },
      { t: "Ambientes operacionais: Windows 10 e 11 e Linux Ubuntu.", arquivo: "resumos/inf07.txt" },
      { t: "Processador de texto: Word 2016.", arquivo: "resumos/inf08.txt" },
      { t: "Planilhas eletrônicas: Excel 2016.", arquivo: "resumos/inf09.txt" },
      { t: "Navegadores de Internet.", arquivo: "resumos/inf10.txt" },
      { t: "Armazenamento externo e ferramentas de gerenciamento e compartilhamento de arquivos em nuvem: Google Drive.", arquivo: "resumos/inf11.txt" },
      { t: "E-mails: Outlook, Gmail, Webmail (Zimbra).", arquivo: "resumos/inf12.txt" },
      { t: "Busca e pesquisa na Web.", arquivo: "resumos/inf13.txt" },
      { t: "Inteligência artificial e ferramentas generativas de texto: ChatGPT, Copilot, Gemini.", arquivo: "resumos/inf14.txt" }
    ]
  },
  "legislacao": {
    titulo: "Legislação",
    grupo: "1. Conteúdos Básicos",
    questoes: "5",
    topicos: [
      { t: "Lei Orgânica do Município de Curitiba (10/04/1990): organização político-administrativa do Município.", arquivo: "resumos/leg01.txt", pagina: "paginas/leg01.html"},
      { t: "Lei Municipal nº 1.656/1958: Estatuto dos Funcionários Públicos Municipais.", arquivo: "resumos/leg02.txt" },
      { t: "Lei Municipal nº 7.671/1991: Organização Administrativa do Poder Executivo do Município de Curitiba.", arquivo: "resumos/leg03.txt" },
      { t: "Constituição Federal de 1988: Título I (arts. 1º ao 4º); Título II (arts. 5º ao 17); Título III (arts. 18, 19, 29, 30, 37 ao 41); Título IV (arts. 44 ao 75).", arquivo: "resumos/leg04.txt" },
      { t: "Lei Federal nº 8.429/1992 e Lei Federal nº 14.230/2021: improbidade administrativa.", arquivo: "resumos/leg05.txt" },
      { t: "Lei Federal nº 12.527/2011: acesso à informação.", arquivo: "resumos/leg06.txt" },
      { t: "Lei Federal nº 10.048/2000: prioridade de atendimento às pessoas.", arquivo: "resumos/leg07.txt" },
      { t: "Lei Federal nº 8.069/1990: Estatuto da Criança e do Adolescente – Disposições Preliminares e Direitos Fundamentais.", arquivo: "resumos/leg08.txt" },
      { t: "Decreto-Lei Federal nº 4.657/1942: Lei de Introdução às Normas do Direito Brasileiro (arts. 20 ao 30).", arquivo: "resumos/leg09.txt" },
      { t: "Lei Federal nº 13.709/2018: Lei Geral de Proteção de Dados Pessoais (Capítulo IV).", arquivo: "resumos/leg10.txt" }
    ]
  },
  "adm-publica": {
    titulo: "Fundamentos da Administração Pública",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      { t: "Fundamentos da Administração Pública: conceitos, princípios e organização.", arquivo: "resumos/fap01.txt" },
      { t: "Planejamento, organização, direção e controle.", arquivo: "resumos/fap02.txt" },
      { t: "Processos administrativos: conceitos, princípios, fases e modalidades.", arquivo: "resumos/fap03.txt" },
      { t: "Organização do ambiente de trabalho.", arquivo: "resumos/fap04.txt" },
      { t: "Gestão de pessoas.", arquivo: "resumos/fap05.txt" },
      { t: "Orçamento público.", arquivo: "resumos/fap06.txt" }
    ]
  },
  "direito-adm": {
    titulo: "Direito Administrativo",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      { t: "Atos administrativos.", arquivo: "resumos/dad01.txt" },
      { t: "Bens públicos.", arquivo: "resumos/dad02.txt" },
      { t: "Serviços públicos.", arquivo: "resumos/dad03.txt" },
      { t: "Lei Federal nº 14.133/2021: licitações e contratos administrativos.", arquivo: "resumos/dad04.txt" },
      { t: "Lei Municipal nº 16.466/2024: processo administrativo no âmbito da Administração Pública Municipal de Curitiba.", arquivo: "resumos/dad05.txt" },
      { t: "Lei Municipal nº 1.656/1958: processo administrativo disciplinar no âmbito do Estatuto dos Funcionários Públicos Municipais de Curitiba.", arquivo: "resumos/dad06.txt" },
      { t: "Constituição Federal de 1988 e Lei Federal nº 8.429/1992: responsabilidade dos agentes públicos e improbidade administrativa.", arquivo: "resumos/dad07.txt" }
    ]
  },
  "direito-const": {
    titulo: "Direito Constitucional",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      { t: "Princípios fundamentais.", arquivo: "resumos/dco01.txt" },
      { t: "Direitos e garantias fundamentais.", arquivo: "resumos/dco02.txt" },
      { t: "Poder constituinte.", arquivo: "resumos/dco03.txt" },
      { t: "Normas constitucionais e hierarquia das normas.", arquivo: "resumos/dco04.txt" },
      { t: "Interpretação constitucional.", arquivo: "resumos/dco05.txt" },
      { t: "Administração Pública na Constituição Federal.", arquivo: "resumos/dco06.txt" }
    ]
  },
  "etica": {
    titulo: "Ética, Relacionamento e Atendimento",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      { t: "Ética, integridade, transparência e conflitos de interesses.", arquivo: "resumos/eti01.txt" },
      { t: "Relações interpessoais.", arquivo: "resumos/eti02.txt" },
      { t: "Lei Federal nº 13.460/2017: participação, proteção e defesa dos direitos do usuário dos serviços públicos da Administração Pública.", arquivo: "resumos/eti03.txt" },
      { t: "Comunicação.", arquivo: "resumos/eti04.txt" }
    ]
  },
  "arquivologia": {
    titulo: "Gestão da Informação e Arquivologia",
    grupo: "2. Conhecimentos Específicos",
    questoes: "20",
    topicos: [
      { t: "Sistemas de informação organizacional.", arquivo: "resumos/arq01.txt" },
      { t: "Arquivologia: conceitos, princípios e gestão documental. Lei Federal nº 8.159/1991: política nacional de arquivos públicos e privados.", arquivo: "resumos/arq02.txt" },
      { t: "Correspondência comercial.", arquivo: "resumos/arq03.txt" },
      { t: "Redação oficial.", arquivo: "resumos/arq04.txt" }
    ]
  },
  "pesquisa": {
    titulo: "Métodos e Técnicas de Pesquisa",
    grupo: "2. Conhecimentos Específicos",
    questoes: "Único",
    topicos: [
      { t: "Métodos e Técnicas de Pesquisa.", arquivo: "resumos/pes01.txt" }
    ]
  }
};