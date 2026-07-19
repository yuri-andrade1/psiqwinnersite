import { Specialty, Review, Credential, Article } from './types';

export const DOCTOR_INFO = {
  name: 'Winner Furtado',
  fullTitle: 'Winner Furtado (CRP 04/62611)',
  shortBio: 'Psicoterapia baseada em evidências para quem deseja compreender a própria mente, fortalecer seus relacionamentos e construir uma vida com mais autonomia.',
  longBio: 'Olá! Sou psicólogo clínico (CRP 04/62611), com atuação fundamentada na Psicologia Baseada em Evidências e na Terapia Cognitivo-Comportamental (TCC). Acredito que compreender a forma como pensamos, sentimos e nos comportamos é o primeiro passo para promover mudanças reais e duradouras, sempre adaptando o conhecimento científico à realidade de cada pessoa. Vejo a psicoterapia como uma parceria: eu contribuo com o conhecimento técnico da TCC e você com a sua própria história, valores e objetivos. Meu objetivo é oferecer um espaço seguro de acolhimento, escuta e reflexão, ajudando você a desenvolver estratégias para lidar com a ansiedade, fortalecer a autoestima, construir relacionamentos mais saudáveis e enfrentar os desafios da vida com mais segurança e autonomia. Porque, no fim das contas, acredito que uma boa terapia não é aquela que diz como você deve viver, mas aquela que oferece ferramentas para que você possa construir a vida que deseja viver.',
  whatsappNumber: '5535984434572',
  whatsappMessage: 'Olá, Winner! Vi seu site e gostaria de tirar dúvidas sobre o agendamento de consultas de psicoterapia.',
  address: 'Atendimento Online (para todo o Brasil e brasileiros no exterior)',
  googleMapsEmbedUrl: '', // Online only
  email: 'psicologowinnerfurtado@gmail.com',
  phone: '(35) 98443-4572',
  instagram: '@psiwinner',
  tiktok: '@psiwinner',
  googleProfile: 'https://share.google/8skUFoDyCMOscHj4J',
  onlineConsultationAvailable: true,
  presentialConsultationAvailable: false,
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ansiedade',
    title: 'Ansiedade e Estresse',
    description: 'Tratamento especializado para crises, pânico, fobias e preocupação excessiva, ajudando a regular a mente e o corpo através de abordagens cognitivo-comportamentais.',
    iconName: 'Brain',
    symptoms: [
      'Preocupação constante e pensamentos acelerados',
      'Taquicardia ou aperto no peito frequente',
      'Medo irracional ou crises de pânico',
      'Dificuldade de relaxar e insônia'
    ]
  },
  {
    id: 'relacionamentos',
    title: 'Conflitos e Relacionamentos',
    description: 'Auxílio na mediação de conflitos amorosos, familiares ou interpessoais, desenvolvendo uma comunicação saudável, inteligência emocional e assertividade.',
    iconName: 'Users',
    symptoms: [
      'Discussões repetitivas ou distanciamento afetivo',
      'Dificuldade de expor sentimentos e impor limites',
      'Conflitos recorrentes de convivência',
      'Sentimento de incompreensão mútua nas relações'
    ]
  },
  {
    id: 'dependencia-emocional',
    title: 'Dependência Emocional',
    description: 'Fortalecimento da autonomia afetiva, ajudando a romper ciclos de relacionamentos tóxicos, dependência ou submissão emocional extrema.',
    iconName: 'HeartCrack',
    symptoms: [
      'Medo extremo de rejeição ou abandono',
      'Colocar as necessidades do outro sempre acima das suas',
      'Dificuldade extrema em terminar relações prejudiciais',
      'Sensação de incompletude sem a validação do parceiro'
    ]
  },
  {
    id: 'autoestima',
    title: 'Autoestima e Autocuidado',
    description: 'Construção de uma autoconfiança sólida, superando a autocrítica destrutiva, a comparação social e a necessidade excessiva de aprovação externa.',
    iconName: 'Sparkles',
    symptoms: [
      'Comparação constante com terceiros nas redes sociais',
      'Insegurança crônica nas decisões pessoais ou profissionais',
      'Dificuldade em aceitar elogios ou reconhecer qualidades',
      'Sensação crônica de não ser bom o suficiente'
    ]
  },
  {
    id: 'regulacao-emocional',
    title: 'Regulação Emocional',
    description: 'Estratégias práticas para compreender, acolher e modular emoções intensas como raiva, medo, frustração ou choro fácil no cotidiano.',
    iconName: 'Compass',
    symptoms: [
      'Explosões de raiva ou reações impulsivas frequentes',
      'Sensação de ser facilmente engolido pelas emoções',
      'Choro fácil ou oscilações rápidas de humor',
      'Dificuldade em se acalmar após um gatilho de estresse'
    ]
  },
  {
    id: 'desenvolvimento-pessoal',
    title: 'Desenvolvimento Pessoal',
    description: 'Acompanhamento focado em clareza de metas, tomada de decisões, transições de carreira e construção de um projeto de vida autônomo.',
    iconName: 'Target',
    symptoms: [
      'Sensação de estar estagnado profissional ou pessoalmente',
      'Dificuldade em tomar decisões de transição importantes',
      'Procrastinação recorrente e falta de disciplina',
      'Desejo de mudança de hábitos ou reestruturação profissional'
    ]
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento e Hábitos',
    description: 'Foco na psicologia da saúde, trabalhando a relação com a comida, compulsão alimentar e desenvolvimento de rotinas saudáveis e sustentáveis.',
    iconName: 'Flame',
    symptoms: [
      'Compulsão por comer emocional (ansiedade, tédio)',
      'Dificuldade em manter rotinas consistentes de autocuidado',
      'Efeito sanfona e frustração acumulada com dietas',
      'Dificuldade em mudar comportamentos arraigados na rotina'
    ]
  },
  {
    id: 'transtornos-mentais',
    title: 'Transtornos Mentais',
    description: 'Tratamento clínico especializado fundamentado em evidências para depressão, transtorno bipolar, TOC e outras condições psicopatológicas.',
    iconName: 'Activity',
    symptoms: [
      'Tristeza profunda ou apatia constante por semanas',
      'Pensamentos obsessivos ou rituais repetitivos',
      'Mudanças extremas e inexplicáveis de energia e humor',
      'Comprometimento significativo do trabalho ou relações'
    ]
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'c1',
    degree: 'Graduação em Psicologia',
    institution: 'Universidade José do Rosário Vellano',
    year: 'Graduação',
    category: 'graduacao',
    description: 'Formação superior em Psicologia, com estudos direcionados ao atendimento clínico e comportamento humano.'
  },
  {
    id: 'c2',
    degree: 'Pós-graduação em Terapia Cognitivo-Comportamental',
    institution: 'Instituto Cognitivo',
    year: 'Pós-graduação',
    category: 'pos',
    description: 'Especialização em TCC, focada em intervenções terapêuticas baseadas em evidências científicas sólidas.'
  },
  {
    id: 'c3',
    degree: 'Pós-graduação em Neuropsicologia',
    institution: 'Faculdade Líbano',
    year: 'Pós-graduação',
    category: 'pos',
    description: 'Estudo do funcionamento cerebral e suas correlações com os processos cognitivos e comportamentais.'
  },
  {
    id: 'c4',
    degree: 'Pós-graduação em Psicologia Baseada em Evidências',
    institution: 'Faculdade Líbano (Cursando)',
    year: 'Pós-graduação',
    category: 'pos',
    description: 'Aprofundamento na integração da melhor pesquisa científica disponível com a perícia clínica e valores do paciente.'
  },
  {
    id: 'c5',
    degree: 'Pós-graduação em Avaliação Psicológica',
    institution: 'Faculdade Líbano',
    year: 'Pós-graduação',
    category: 'pos',
    description: 'Habilitação técnica para aplicação, correção e interpretação de testes psicológicos e elaboração de laudos.'
  },
  {
    id: 'c6',
    degree: 'Pós-graduação em Psicologia Jurídica',
    institution: 'Faculdade Líbano',
    year: 'Pós-graduação',
    category: 'pos',
    description: 'Estudo do comportamento no contexto judicial, perícias psicológicas e assessoria técnica em tribunais.'
  },
  {
    id: 'c7',
    degree: 'Formação em Psicopatologia',
    institution: 'Curso de Especialização',
    year: 'Formação',
    category: 'pos',
    description: 'Estudo aprofundado de transtornos mentais, diagnósticos clínicos e psicopatologia geral.'
  },
  {
    id: 'c8',
    degree: 'Formação em Obesidade e Emagrecimento',
    institution: 'Curso de Especialização',
    year: 'Formação',
    category: 'pos',
    description: 'Intervenções focadas em comportamento alimentar, compulsão, mudanças de hábitos e perda de peso saudável.'
  },
  {
    id: 'c9',
    degree: 'Psicoterapeuta Clínico',
    institution: 'Consultório Particular Winner Furtado',
    year: 'Ativo',
    category: 'experiencia',
    description: 'Atendimento psicoterápico focado na singularidade, autonomia e desenvolvimento pessoal de adultos e público LGBTQIA+.'
  },
  {
    id: 'c10',
    degree: 'Inscrição Profissional Ativa',
    institution: 'Conselho Regional de Psicologia da 4ª Região',
    year: 'CRP-04',
    category: 'associacao',
    description: 'Registro ativo em conformidade estrita com o Código de Ética Profissional do Psicólogo (CRP 04/62611).'
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    authorName: 'Igor Bernardes',
    rating: 5,
    dateText: 'Há 3 semanas',
    text: 'O Winner é um profissional extremamente atencioso, acolhedor e sabe conduzir as sessões com muita sensibilidade. Gosto muito da forma como ele propõe reflexões práticas que me ajudam a enxergar as situações sob novas perspectivas no cotidiano. Recomendo seu trabalho de olhos fechados!',
    verified: true
  },
  {
    id: 'r2',
    authorName: 'A. V.',
    rating: 5,
    dateText: 'Há um mês',
    text: 'Excelente profissional, muito atencioso e empático! O atendimento dele transmite muita segurança e acolhimento desde a primeira consulta. Indico de olhos fechados.',
    verified: true
  },
  {
    id: 'r3',
    authorName: 'Mariana Santos',
    rating: 5,
    dateText: 'Há 2 meses',
    text: 'Iniciei a psicoterapia online com o Winner e tem sido uma experiência incrível. O atendimento remoto dele funciona super bem, é muito seguro e acolhedor. Ele tem uma postura profissional impecável e as estratégias da TCC me ajudam no dia a dia.',
    verified: true
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art1',
    title: 'Como Lidar com Crises de Ansiedade: 5 Estratégias Práticas e Imediatas',
    slug: 'como-lidar-com-crises-de-ansiedade',
    excerpt: 'Sentir o coração acelerar, a respirar faltar e a mente entrar em pânico pode ser assustador. Entenda o mecanismo da crise e aprenda ferramentas baseadas na ciência para recuperar o controle rapidamente.',
    readTime: '6 min de leitura',
    date: '15 de Julho, 2026',
    category: 'Ansiedade',
    tags: ['Ansiedade', 'Ataque de Pânico', 'TCC', 'Autocontrole'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    content: `
A ansiedade é uma reação biológica natural do nosso corpo, projetada para nos proteger de ameaças. No entanto, quando essa resposta é ativada de forma desproporcional ou na ausência de perigo real, ela pode se manifestar como uma crise de ansiedade ou um ataque de pânico.

Durante uma crise, o cérebro ativa o modo de "luta ou fuga", inundando o sistema com adrenalina e cortisol. Isso gera sintomas físicos reais, como taquicardia, falta de ar, sudorese, tremores e um medo iminente de perder o controle.

A boa notícia é que, embora seja uma experiência altamente desagradável, **a crise de ansiedade sempre tem fim** e existem ferramentas cientificamente comprovadas na Terapia Cognitivo-Comportamental (TCC) para reduzir sua intensidade e duração. Abaixo, compartilho 5 estratégias imediatas para lidar com esses momentos:

---

### 1. Pratique a Respiração Diafragmática (4-2-6)
Quando estamos ansiosos, tendemos a respirar de forma curta e rápida pela parte superior do peito (hiperventilação), o que envia ainda mais mensagens de pânico ao cérebro. Para reverter isso:
- Coloque uma mão sobre o abdômen e outra sobre o peito.
- **Inspire devagar pelo nariz**, expandindo a barriga (não o peito), contando até **4**.
- **Segure o ar** por **2** segundos.
- **Expire suavemente pela boca**, esvaziando o abdômen, contando até **6** segundos.
- *Por que funciona?* Expirar mais devagar do que inspirar estimula o sistema nervoso parassimpático, que atua como o freio natural do corpo contra o estresse.

### 2. Ancore-se no Presente com a Técnica 5-4-3-2-1
O pânico se alimenta de projeções catastróficas sobre o futuro ("Vou desmaiar", "Vou ter um ataque cardíaco"). A técnica de ancoramento (grounding) traz sua mente de volta à realidade imediata. Identifique em voz alta ao seu redor:
- **5 coisas que você consegue ver** (um quadro, uma planta, uma caneta);
- **4 coisas que você consegue tocar ou sentir fisicamente** (o chão sob os pés, o tecido da calça, o vento);
- **3 coisas que você consegue ouvir** (o trânsito distante, um pássaro, a geladeira funcionando);
- **2 coisas que você consegue cheirar** (o perfume de um café, o sabonete das mãos);
- **1 coisa que você consegue saborear** (uma bala de menta, o gosto de água).

### 3. Acolha e Nomeie a Crise (Não lute contra ela)
O maior erro na crise é entrar em pânico por estar com pânico. Lutar desesperadamente para fazer os sintomas físicos sumirem gera mais adrenalina. Em vez disso, repita mentalmente frases de acolhimento:
- *"Isso que estou sentindo é apenas uma descarga de adrenalina excessiva."*
- *"É desconfortável, mas é passageiro e vai passar em alguns minutos."*
- *"Eu estou em segurança. Meu corpo está apenas se defendendo de uma ameaça que não existe."*

### 4. Relaxe a Mandíbula e os Ombros
A ansiedade tensiona os grupos musculares involuntariamente. Sem perceber, trancamos os dentes e encolhemos os ombros em direção às orelhas. 
- Faça um escaneamento rápido: relaxe a testa, solte a mandíbula deixando a boca entreaberta e abaixe os ombros conscientemente.
- Ao relaxar fisicamente, você envia um sinal de feedback de volta ao cérebro dizendo: "Se os músculos estão relaxados, o perigo deve ter passado."

### 5. Mova o Corpo de Forma Suave
Ficar parado esperando a crise passar pode aumentar a sensação de aprisionamento. 
- Levant-se, caminhe devagar, beba um copo de água gelada (focando na sensação térmica da água descendo pela garganta) ou faça um alongamento leve nas costas e pescoço. O movimento ajuda a gastar a energia física acumulada pela descarga de adrenalina.

---

### Quando buscar ajuda?
Essas ferramentas de enfrentamento são excelentes para gerenciar sintomas agudos. No entanto, se as crises estão se tornando recorrentes, limitando sua rotina ou afetando sua qualidade de vida, é fundamental contar com o suporte de um profissional de saúde mental.

A terapia é um espaço onde trabalhamos não apenas os sintomas da crise, mas as **raízes e gatilhos profundos** que geram essa ansiedade estrutural, ensinando sua mente a interpretar a realidade sem o filtro constante do perigo iminente.
    `
  },
  {
    id: 'art2',
    title: 'O que é Dependência Emocional e Como Superá-la?',
    slug: 'o-que-e-dependencia-emocional-e-como-superala',
    excerpt: 'A dependência emocional pode aprisionar você em relacionamentos infelizes ou tóxicos. Entenda os sinais desse comportamento e saiba como dar os primeiros passos para conquistar sua autonomia afetiva.',
    readTime: '7 min de leitura',
    date: '28 de Junho, 2026',
    category: 'Relacionamentos',
    tags: ['Dependência Emocional', 'Autoestima', 'TCC', 'Autonomia'],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    content: `
A dependência emocional ocorre quando uma pessoa deposita no parceiro, familiar ou amigo toda a responsabilidade pelo seu próprio bem-estar, felicidade e senso de valor próprio. Sem a presença, aprovação ou contato constante da outra pessoa, o dependente sente um vazio avassalador, ansiedade extrema e um pavor inexplicável do abandono.

Muitas vezes confundida com "amor intenso" ou "romantismo", a dependência emocional é, na verdade, um ciclo de sofrimento e aprisionamento afetivo. Ela impede o desenvolvimento de relações saudáveis e maduras, gerando submissão e anulação das próprias necessidades.

Neste artigo, vamos compreender os sinais característicos desse padrão e como a Terapia Cognitivo-Comportamental (TCC) pode ajudar você a resgatar sua autonomia emocional.

---

### Sinais da Dependência Emocional
Quem vivencia a dependência emocional costuma apresentar alguns comportamentos e pensamentos recorrentes:
1. **Medo constante de ser deixado:** A ideia do término ou de ficar sozinho gera desespero, pânico ou crises de ansiedade.
2. **Necessidade contínua de atenção e validação:** Precisar que o outro reafirme o tempo todo que ama, apoia ou acha você importante.
3. **Anulação dos próprios desejos:** Mudar de gostos, amigos, rotina ou valores apenas para se adequar ao que o outro quer ou espera de você.
4. **Sentir-se responsável pela felicidade do outro:** Achar que se o outro estiver triste ou chateado, a culpa é exclusivamente sua.
5. **Dificuldade em impor limites:** Dizer "sim" para abusos, desrespeito ou negligência por medo de gerar um conflito e ser abandonado.

---

### Passos para Superar a Dependência Emocional

Romper o ciclo da dependência emocional não é fácil, pois envolve quebrar crenças profundas sobre amor e valor pessoal. No entanto, é totalmente possível através de atitudes práticas:

#### 1. Reconheça e Aceite o Padrão
O primeiro passo é olhar honestamente para suas relações atuais e passadas. Identificar se você se anula ou se sente em pânico sem a outra pessoa é indispensável para iniciar a mudança.

#### 2. Desenvolva sua Individualidade
Volte a focar em você. Invista tempo em hobbies próprios, faça planos de forma individual, saia com seus amigos e reconecte-se com sua própria essência. Ter uma vida interessante fora do relacionamento é fundamental para diminuir o peso que você coloca sobre o parceiro.

#### 3. Fortaleça sua Autoestima
Trabalhe a crença de que você é uma pessoa completa por si só. Seu valor não depende de estar em um relacionamento ou da opinião de ninguém. Pratique o autorespeito diário, reconhecendo suas qualidades e conquistas.

#### 4. Aprenda a Tolerar a Solidão (Solitude)
Ficar sozinho pode ser assustador no começo, mas também pode ser libertador. Aprenda a desfrutar da sua própria companhia: leia um livro, assista a um filme, faça caminhadas. Transforme o medo da solidão no prazer da solitude.

#### 5. Busque Suporte Psicoterapêutico
A psicoterapia baseada em evidências é o tratamento mais eficaz para tratar a dependência emocional. No consultório, ajudamos o paciente a reestruturar pensamentos limitantes de insuficiência, a treinar a assertividade nas relações e a construir relacionamentos muito mais equilibrados e saudáveis.
    `
  },
  {
    id: 'art3',
    title: 'Como Melhorar a Autoestima de Forma Saudável?',
    slug: 'como-melhorar-a-autoestima-de-forma-saudavel',
    excerpt: 'Muitas vezes agradamos a todos, mas esquecemos de nós mesmos. Entenda como a autocrítica destrutiva afeta sua saúde mental e aprenda técnicas práticas para desenvolver um autorespeito sólido.',
    readTime: '5 min de leitura',
    date: '10 de Junho, 2026',
    category: 'Autoestima',
    tags: ['Autoestima', 'Autocuidado', 'Autocompaixão', 'TCC'],
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800',
    content: `
A autoestima é um dos pilares mais fundamentais da saúde mental. Ela não se resume a "gostar do que vê no espelho" ou a sentir-se superior aos outros. Ter uma boa autoestima significa possuir um sentimento realista e acolhedor de autorespeito, reconhecendo tanto as suas qualidades quanto as suas limitações sem punição ou autocrítica destrutiva.

Quando a nossa autoestima está baixa, interpretamos o mundo por meio de um filtro de insuficiência: *"Eu não sou bom o suficiente"*, *"Todos são melhores do que eu"*, *"Eu vou falhar"*. Isso gera estresse crônico, bloqueio profissional e relações abusivas.

Abaixo, apresento estratégias baseadas na Terapia Cognitivo-Comportamental (TCC) para ajudar você a reconstruir e melhorar a sua autoestima de forma consistente:

---

### Pilares de uma Autoestima Saudável

De acordo com estudos psicológicos, a autoestima saudável se sustenta em três conceitos-chave:

1. **Autoaceitação:** Aceitar quem você é hoje, incluindo suas falhas, imperfeições e história de vida, sem se julgar ou se rejeitar.
2. **Autoconfiança:** Acreditar na sua capacidade de enfrentar desafios, resolver problemas, aprender coisas novas e tomar decisões.
3. **Autorespeito:** Defender suas próprias necessidades, impor limites saudáveis aos outros e cuidar do seu bem-estar físico e mental.

---

### Dicas Práticas para Desenvolver a Autoestima

#### 1. Identifique e Questione a sua Voz Autocrítica
Sempre que você cometer um erro, preste atenção em como conversa consigo mesmo. Se você se chama de "burro", "inútil" ou "fracassado", pare e questione esse pensamento:
- *Essa cobrança é justa?*
- *Eu falaria assim com um amigo querido que cometeu o mesmo erro?*
Substitua a voz da autocrítica pela voz da **autocompaixão**: *"Eu errei, mas fiz o meu melhor nas condições que tinha. Posso aprender com isso e tentar de novo"*.

#### 2. Evite a Armadilha da Comparação Social
Com as redes sociais, comparamos os nossos bastidores (com todos os nossos problemas e dilemas) com o palco editado e perfeito das outras pessoas. Lembre-se: **cada pessoa tem uma jornada única**. Compare-se apenas com quem você era ontem, avaliando o seu próprio progresso pessoal.

#### 3. Celebre Pequenas Vitórias Diárias
Quem tem baixa autoestima tende a focar apenas nas falhas e ignorar as conquistas. Mude esse foco: no final de cada dia, liste três coisas que você fez bem ou pelas quais é grato (pode ser desde terminar um relatório importante até ter sido gentil com alguém ou ter feito uma caminhada). Isso treina o cérebro a registrar suas capacidades.

#### 4. Aprenda a Dizer Não e Impor Limites
Dizer "sim" para todos querendo dizer "não" é uma declaração de que a vontade do outro vale mais do que o seu tempo e energia. Dizer "no" educado e assertivo fortalece o autorespeito e demonstra que você valoriza as suas próprias necessidades.

#### 5. Pratique a Psicoterapia
Se a baixa autoestima está bloqueando sua carreira, afetando seus relacionamentos ou trazendo sofrimento constante, buscar o suporte de um psicólogo é essencial. Na terapia, trabalhamos as origens das suas crenças de desvalorização e construímos, passo a passo, comportamentos que reforçam seu autorespeito e segurança interior.
    `
  }
];

export const FAQS = [
  {
    question: 'Como funciona a primeira sessão de terapia?',
    answer: 'A primeira sessão é um momento de escuta atenta, acolhimento e compreensão inicial. Não há um roteiro rígido. Você poderá compartilhar o que te motivou a buscar ajuda e o que está te incomodando no momento. Explicarei como funciona a Terapia Cognitivo-Comportamental (TCC) e juntos definiremos os objetivos iniciais para o seu processo.'
  },
  {
    question: 'O atendimento é online? Como funciona?',
    answer: 'Sim! Os atendimentos são 100% online, realizados por videochamadas em uma plataforma de saúde segura e criptografada (em total conformidade com a LGPD e regulamentada pelo CFP). Essa modalidade oferece a mesma eficácia científica e sigilo da terapia presencial, com a flexibilidade de ser feita de onde você estiver, sem necessidade de deslocamento.'
  },
  {
    question: 'Quem é o público atendido?',
    answer: 'Os atendimentos são direcionados para adultos (maiores de 18 anos) e contam com uma escuta especializada e acolhedora para o público LGBTQIA+, garantindo um espaço ético, livre de julgamentos e focado na singularidade de cada história.'
  },
  {
    question: 'Qual é a duração e a frequência das sessões?',
    answer: 'As sessões individuais duram 50 minutos. A frequência recomendada para que o tratamento tenha resultados consistentes é semanal, principalmente nas primeiras fases do processo terapêutico. Conforme o paciente adquire ferramentas e maior autonomia, podemos planejar o espaçamento das sessões para quinzenal, até a alta.'
  },
  {
    question: 'Atende convênios médicos (planos de saúde)?',
    answer: 'Os atendimentos são realizados exclusivamente de forma particular. No entanto, emito recibos e notas fiscais completos com toda a documentação necessária para que você possa solicitar o reembolso integral ou parcial junto ao seu convênio médico (consulte as condições de reembolso do seu plano).'
  }
];
