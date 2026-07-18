import { Specialty, Review, Credential, Article } from './types';

export const DOCTOR_INFO = {
  name: 'Dr. Psiwinner',
  fullTitle: 'Dr. Psiwinner (CRP 06/145892)',
  shortBio: 'Psicólogo Clínico especializado em Terapia Cognitivo-Comportamental (TCC). Dedicado a ajudar pessoas a superarem a ansiedade, burnout e a construírem vidas com mais equilíbrio, clareza e bem-estar.',
  longBio: 'Olá! Sou psicólogo clínico com mais de 10 anos de experiência prática, ajudando jovens e adultos a atravessarem momentos difíceis e a reencontrarem seu protagonismo. Minha abordagem é baseada na Terapia Cognitivo-Comportamental (TCC) combinada com práticas de Atenção Plena (Mindfulness), um método com bases científicas sólidas que foca no presente, na reestruturação de pensamentos limitantes e na mudança de comportamentos prejudiciais. Acredito que a terapia é um espaço seguro, livre de julgamentos, focado na colaboração ativa entre terapeuta e paciente.',
  whatsappNumber: '5511999999999', // Placeholder number that can be changed, formatted for API
  whatsappMessage: 'Olá, Dr. Psiwinner! Vi seu site e gostaria de tirar dúvidas sobre o agendamento de consultas.',
  address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975730331034!2d-46.65431322467009!3d-23.561349578800185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431797cd77e!2sAv.%20Paulista%2C%20São%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  email: 'contato@psiwinner.com.br',
  phone: '(11) 99999-9999',
  instagram: '@psiwinner.psicologia',
  onlineConsultationAvailable: true,
  presentialConsultationAvailable: true,
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ansiedade',
    title: 'Ansiedade e Estresse',
    description: 'Tratamento de transtornos de ansiedade (TAG, pânico, fobias) e estresse crônico através de técnicas que acalmam a mente e regulam o sistema nervoso.',
    iconName: 'Brain',
    symptoms: [
      'Preocupação excessiva e constante',
      'Taquicardia ou aperto no peito',
      'Pensamentos acelerados e insônia',
      'Medo irracional ou ataques de pânico'
    ]
  },
  {
    id: 'burnout',
    title: 'Burnout e Esgotamento',
    description: 'Acompanhamento especializado para profissionais exaustos devido à sobrecarga de trabalho. Reorganização de limites e recuperação da saúde mental.',
    iconName: 'Flame',
    symptoms: [
      'Exaustão física e mental extrema',
      'Irritabilidade e distanciamento do trabalho',
      'Sensação de ineficácia ou impotência',
      'Dores de cabeça e dores musculares frequentes'
    ]
  },
  {
    id: 'depressao',
    title: 'Depressão e Desânimo',
    description: 'Suporte clínico para superar a tristeza profunda, apatia e perda de interesse pelas atividades diárias, resgatando a vitalidade e o sentido da vida.',
    iconName: 'HeartCrack',
    symptoms: [
      'Tristeza persistente e choro fácil',
      'Falta de energia ou fadiga extrema',
      'Dificuldade de concentração e tomada de decisões',
      'Perda de prazer em hobbies antigos'
    ]
  },
  {
    id: 'autoestima',
    title: 'Autoestima e Autocuidado',
    description: 'Fortalecimento da autoconfiança, superação da autocrítica destrutiva e desenvolvimento de uma relação mais amorosa e acolhedora consigo mesmo.',
    iconName: 'Sparkles',
    symptoms: [
      'Comparação excessiva com terceiros',
      'Insegurança nas decisões pessoais ou profissionais',
      'Dificuldade em dizer não e impor limites',
      'Sensação crônica de não ser bom o suficiente'
    ]
  },
  {
    id: 'relacionamentos',
    title: 'Relacionamentos e Conflitos',
    description: 'Auxílio na resolução de conflitos amorosos, familiares ou profissionais, focando na comunicação assertiva e na expressão saudável de sentimentos.',
    iconName: 'Users',
    symptoms: [
      'Discussões frequentes e repetitivas',
      'Dificuldade em expressar necessidades',
      'Dependência emocional ou insegurança afetiva',
      'Falta de conexão e distanciamento mútuo'
    ]
  },
  {
    id: 'luto',
    title: 'Luto e Processos de Transição',
    description: 'Acolhimento empático para lidar com perdas significativas (morte de entes queridos, divórcio, demissão) e reestruturação da identidade após grandes mudanças.',
    iconName: 'Compass',
    symptoms: [
      'Sensação de vazio ou choque prolongado',
      'Dificuldade em aceitar a nova realidade',
      'Sentimento de culpa ou raiva intensa',
      'Isolamento social'
    ]
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: 'c1',
    degree: 'Graduação em Psicologia',
    institution: 'Universidade de São Paulo (USP)',
    year: '2011 - 2016',
    category: 'graduacao',
    description: 'Formação com ênfase em Psicologia Clínica e Saúde Mental. Desenvolvimento de pesquisas na área de ansiedade e fobias.'
  },
  {
    id: 'c2',
    degree: 'Especialização em Terapia Cognitivo-Comportamental (TCC)',
    institution: 'Instituto de Psiquiatria do Hospital das Clínicas (IPq - FMUSP)',
    year: '2017 - 2019',
    category: 'pos',
    description: 'Especialização padrão ouro, focada no atendimento clínico de alta complexidade com base em evidências científicas.'
  },
  {
    id: 'c3',
    degree: 'Formação em Mindfulness Aplicado à Saúde Mental',
    institution: 'Centro Brasileiro de Mindfulness e Promoção da Saúde (Mente Aberta)',
    year: '2020',
    category: 'pos',
    description: 'Integração de práticas de atenção plena ao protocolo clínico de TCC para prevenção de recaídas depressivas e regulação do estresse.'
  },
  {
    id: 'c4',
    degree: 'Mestrado em Psicologia da Saúde',
    institution: 'Universidade Federal de São Paulo (UNIFESP)',
    year: '2021 - 2023',
    category: 'pos',
    description: 'Pesquisa acadêmica sobre o impacto do estresse e esgotamento ocupacional (Burnout) em trabalhadores de tecnologia.'
  },
  {
    id: 'c5',
    degree: 'Psicólogo Clínico Sênior',
    institution: 'Consultório Particular Psiwinner',
    year: '2016 - Presente',
    category: 'experiencia',
    description: 'Mais de 3.000 horas de atendimento clínico individual de jovens e adultos em formato presencial e online.'
  },
  {
    id: 'c6',
    degree: 'Membro Efetivo da Associação Brasileira de Psicologia',
    institution: 'Conselho Regional de Psicologia de São Paulo',
    year: 'Desde 2016',
    category: 'associacao',
    description: 'Participação ativa e aderência estrita ao Código de Ética Profissional do Psicólogo (CRP 06/145892).'
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    authorName: 'Thiago Mendes',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    dateText: 'Há uma semana',
    text: 'O Dr. Psiwinner foi fundamental no meu tratamento para crise de pânico. Desde a primeira sessão me senti extremamente ouvido e acolhido. Ele me ensinou técnicas práticas que uso até hoje para controlar os pensamentos acelerados. Recomendo muito!',
    verified: true,
    response: 'Obrigado pelo depoimento, Thiago. Fico muito feliz em ver sua evolução e sua dedicação em aplicar as estratégias em sua rotina!'
  },
  {
    id: 'r2',
    authorName: 'Camila Rodrigues',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    dateText: 'Há um mês',
    text: 'Estava passando por um momento de Burnout muito pesado, quase desistindo da minha carreira. O processo de terapia com o doutor me ajudou a restabelecer limites saudáveis e entender melhor as minhas necessidades. Excelente profissional.',
    verified: true,
    response: 'Fico imensamente grato, Camila. Aprender a impor limites e acolher os próprios sinais de cansaço é um ato de coragem. Parabéns pelo seu processo!'
  },
  {
    id: 'r3',
    authorName: 'Rodrigo Santoro', // Coincidental realistic name
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    dateText: 'Há 2 meses',
    text: 'Profissional extremamente atencioso, com uma escuta impecável. O consultório é super confortável e silencioso, excelente localização na Av. Paulista. Ele também faz sessões online perfeitas, com plataforma segura. Nota 10.',
    verified: true
  },
  {
    id: 'r4',
    authorName: 'Fernanda Silveira',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    dateText: 'Há 3 meses',
    text: 'A melhor decisão que tomei no último ano foi iniciar terapia com o Dr. Psiwinner. Minha relação com a ansiedade e com a minha própria autocrítica mudou completamente. Sou muito mais confiante hoje.',
    verified: true,
    response: 'Ver o resgate da sua autocompaixão e autoconfiança é o maior prêmio, Fernanda. Obrigado pela confiança.'
  },
  {
    id: 'r5',
    authorName: 'Marcos Almeida',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120&h=120',
    rating: 5,
    dateText: 'Há 4 meses',
    text: 'Excelente abordagem terapêutica. Muito direto ao ponto e focado em nos dar autonomia. Não é aquela terapia em que o psicólogo só fica calado balançando a cabeça. Ele interage, desafia pensamentos e guia na prática.',
    verified: true
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art1',
    title: 'Como Lidar com Crises de Ansiedade: 5 Estratégias Práticas e Imediatas',
    slug: 'como-lidar-com-crises-de-ansiedade',
    excerpt: 'Sentir o coração acelerar, a respiração faltar e a mente entrar em pânico pode ser assustador. Entenda o mecanismo da crise e aprenda ferramentas baseadas na ciência para recuperar o controle rapidamente.',
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
- Levante-se, caminhe devagar, beba um copo de água gelada (focando na sensação térmica da água descendo pela garganta) ou faça um alongamento leve nas costas e pescoço. O movimento ajuda a gastar a energia física acumulada pela descarga de adrenalina.

---

### Quando buscar ajuda?
Essas ferramentas de enfrentamento são excelentes para gerenciar sintomas agudos. No entanto, se as crises estão se tornando recorrentes, limitando sua rotina ou afetando sua qualidade de vida, é fundamental contar com o suporte de um profissional de saúde mental.

A terapia é um espaço onde trabalhamos não apenas os sintomas da crise, mas as **raízes e gatilhos profundos** que geram essa ansiedade estrutural, ensinando sua mente a interpretar a realidade sem o filtro constante do perigo iminente.
    `
  },
  {
    id: 'art2',
    title: 'A Síndrome de Burnout: Quando o Trabalho Cansa Além do Físico',
    slug: 'sindrome-de-burnout-trabalho-cansa-a-alma',
    excerpt: 'O esgotamento profissional não é sinônimo de preguiça ou fraqueza. Descubra os sinais silenciosos de que seu trabalho está esgotando suas reservas emocionais e saiba como iniciar sua recuperação.',
    readTime: '8 min de leitura',
    date: '28 de Junho, 2026',
    category: 'Esgotamento',
    tags: ['Burnout', 'Saúde Ocupacional', 'Estresse', 'Limites'],
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=800',
    content: `
A Síndrome de Burnout, ou esgotamento profissional, foi reconhecida oficialmente pela Organização Mundial da Saúde (OMS) como um fenômeno ocupacional crônico. Trata-se de um esgotamento que vai muito além do cansaço físico comum que passa com um fim de semana de sono: é a exaustão total das suas reservas emocionais, cognitivas e de energia.

Muitos profissionais enfrentam o Burnout sem perceber o que está acontecendo, confundindo-o com falta de produtividade, preguiça ou estresse passageiro. O ciclo de cobrança aumenta, o trabalhador se força ainda mais a produzir, agravando progressivamente o quadro clínico.

Para que você possa identificar os sinais e se proteger, precisamos entender os pilares do Burnout e como iniciar o processo de reabilitação.

---

### Os Três Pilares do Burnout

De acordo com as escalas médicas, o Burnout é sustentado por três grandes dimensões:

1. **Exaustão Emocional:** A sensação de estar completamente sem energia física ou mental. Você acorda de manhã e sente que não tem recursos para enfrentar o dia de trabalho.
2. **Despersonalização (Cinismo):** O desenvolvimento de uma atitude fria, distante ou cínica em relação às suas tarefas, colegas e clientes. Atividades que antes geravam interesse passam a ser vistas com total indiferença ou hostilidade.
3. **Baixa Realização Profissional:** Uma sensação crônica de ineficácia. O sentimento de que, não importa o quanto você trabalhe ou se esforce, o resultado nunca é bom o suficiente, levando à frustração e perda da identidade profissional.

---

### Sinais Silenciosos de Alerta

Muitas vezes, o corpo começa a apitar muito antes da mente admitir o cansaço. Fique atento a estes sintomas:
- **Dificuldade de concentração e falhas de memória frequentes** (o cérebro entra em modo de economia de energia);
- **Insônia ou sono não reparador** (você dorme 8 horas, mas acorda como se tivesse trabalhado a noite toda);
- **Sintomas psicossomáticos recorrentes**, como dores de cabeça tensionais, gastrite, dores musculares constantes no pescoço/costas e queda na imunidade;
- **Procrastinação defensiva** (adiar tarefas por sentir pavor ao pensar em realizá-las);
- **Irritabilidade desproporcional** com coisas simples do dia a dia.

---

### Como Começar a Recuperação?

Sair do Burnout exige uma reestruturação ativa de hábitos, mentalidade e, muitas vezes, de condições de trabalho. Aqui estão os primeiros passos essenciais:

#### 1. Identifique e Aceite o Limite
O esgotamento é um grito do seu corpo dizendo: *"Eu não dou conta deste ritmo."* Aceitar que você atingiu seu limite não é sinônimo de fracasso, mas o primeiro passo da reabilitação. Parar de se punir por não ser "superprodutivo" retira uma enorme camada de estresse adicional.

#### 2. Estabeleça Limites Claros (Micro-Limites)
- Estabeleça horários rígidos para desligar o computador e silenciar as notificações de trabalho (sem e-mails profissionais após as 19h ou aos finais de semana).
- Aprenda a delegar e a dizer não a demandas extras quando sua agenda já estiver saturada.

#### 3. Redefina o Valor do Descanso
Em uma sociedade hiperconectada, fomos ensinados de que o ócio é algo ruim. No entanto, descansar não é "recarregar baterias para trabalhar mais"; descansar é uma necessidade biológica e humana básica. Reserve momentos na sua semana exclusivamente voltados para o lazer, contato com a natureza ou para simplesmente fazer "nada", sem culpa.

#### 4. Busque Ajuda Profissional e de Rede de Apoio
Falar sobre suas frustrações com pessoas queridas ajuda a aliviar a carga emocional. Além disso, o tratamento psicoterapêutico é indispensável. 

A psicoterapia apoia o paciente com Burnout a reavaliar suas crenças sobre trabalho e produtividade (ex: *"só tenho valor se estiver trabalhando"* ou *"não posso falhar nunca"*), desenvolvendo estratégias eficientes de gerenciamento de estresse e resgatando o bem-estar biopsicossocial.
    `
  },
  {
    id: 'art3',
    title: 'O Poder do Limite: Aprenda a Dizer "Não" Sem Sentir Culpa',
    slug: 'o-poder-do-limite-aprender-a-dizer-nao-sem-culpa',
    excerpt: 'Muitas vezes agradamos a todos, mas esquecemos de nós mesmos. Entenda como a dificuldade de estabelecer limites afeta sua saúde emocional e como aplicar a comunicação assertiva na prática.',
    readTime: '5 min de leitura',
    date: '10 de Junho, 2026',
    category: 'Bem-estar',
    tags: ['Limites', 'Autoestima', 'Comunicação', 'Assertividade'],
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800',
    content: `
Dizer "sim" para tudo e para todos é um atalho certeiro para acumular exaustão, ressentimento e desvalorização própria. No entanto, a dificuldade em dizer "não" é uma das queixas mais frequentes no consultório de psicologia.

Por trás desse comportamento que beira o sacrifício pessoal, costumam morar medos inconscientes profundos: o medo de ser rejeitado, de ser rotulado como egoísta, de decepcionar alguém querido ou de perder espaço em um emprego.

O problema é que, **quando você diz "sim" para o outro querendo dizer "não", está inevitavelmente dizendo um "não" para a sua própria saúde mental, tempo e dignidade.** Aprender a impor limites saudáveis não é um ato de egoísmo, mas sim uma declaração de autorespeito e autocuidado.

---

### Por que Temos Medo de Dizer "Não"?

Historicamente, fomos condicionados a ser prestativos e agradáveis para sermos aceitos pelo grupo. Na psicologia, identificamos alguns padrões de pensamentos limitantes de quem quer agradar a todos constantemente (chamado na psicologia de *people-pleasing*):
- **Crença de que seu valor depende do que você faz pelos outros:** *"Só sou amado se eu for útil e resolver os problemas alheios."*
- **Responsabilização emocional pelo sentimento alheio:** *"Se eu recusar esse convite, ela vai ficar terrivelmente magoada e a culpa será minha."*
- **Necessidade de validação constante:** Precisar da aprovação externa para sentir que é uma boa pessoa.

O custo de viver para satisfazer as expectativas alheias é alto: esgotamento crônico, perda da própria identidade e relacionamentos desequilibrados, onde você doa tudo e recebe muito pouco.

---

### Guia Prático para Estabelecer Limites com Assertividade

Impor limites não requer agressividade. A chave é a **assertividade** — a capacidade de defender seus direitos e expressar seus sentimentos de forma honesta, respeitosa e clara. Aqui estão 4 maneiras saudáveis de exercitar o seu "não":

#### 1. Ganhe Tempo Antes de Responder
Se você é do tipo que diz "sim" no impulso para agradar e depois se arrepende, crie uma regra de transição. Em vez de responder de imediato, diga:
- *"Deixe-me dar uma olhada na minha agenda e já te retorno."*
- *"Preciso verificar um compromisso antes de confirmar."*
Isso te dá espaço mental para avaliar se você realmente deseja e tem energia para aceitar o pedido, livrando-se do piloto automático da concordância.

#### 2. Use a Técnica do "Não" Sanduíche
Essa é uma excelente ferramenta de comunicação assertiva. Ela consiste em rechear o seu "não" com duas camadas de cordialidade ou empatia:
1. **Camada positiva (Validação):** *"Fico muito feliz que tenha pensado em mim para esse projeto."*
2. **O miolo (O "Não" claro e sem justificativas mirabolantes):** *"Infelizmente, neste momento estou totalmente focado em outras demandas e não conseguirei assumir mais essa tarefa."*
3. **Camada positiva (Alternativa ou fechamento amigável):** *"Espero que dê tudo certo e torço para que possamos colaborar em uma próxima oportunidade!"*

#### 3. Ofereça um Limite Parcial
Se você quer ajudar, mas não pode assumir todo o fardo, aprenda a negociar:
- *"Eu não posso assumir a elaboração do relatório completo, mas posso te ajudar revisando os dados finais na quinta-feira."*
- *"Não consigo ir ao jantar no sábado, mas adoraria te encontrar para um café rápido no domingo à tarde."*

#### 4. Lembre-se de que Explicar-se Demais Enfraquece Seu Limite
Você não precisa dar um relatório detalhado ou mentir para justificar por que está dizendo "não". Justificar-se excessivamente passa a impressão de que seu "não" é negociável ou de que você está cometendo um erro. Um "não" simples, honesto e educado é suficiente.

---

### Conclusão: O Desconforto Inicial é o Preço da Liberdade
A primeira vez que você disser "não" para um familiar ou no trabalho, é muito provável que sinta uma pontada de culpa. Esse desconforto é natural — sua mente está quebrando um padrão antigo de comportamento.

No entanto, à medida que você pratica, percebe que as pessoas respeitam mais quem estabelece limites claros, e você ganha o ativo mais precioso que existe: o controle sobre seu próprio tempo, mente e destino. Se tiver dificuldades nesse caminho, saiba que a terapia comportamental é um espaço poderoso para treinar a assertividade e fortalecer a autoestima.
    `
  }
];

export const FAQS = [
  {
    question: 'Como funciona a primeira sessão de terapia?',
    answer: 'A primeira sessão é um momento de acolhimento e escuta inicial. Não há um roteiro rígido. Você poderá compartilhar o que te motivou a buscar ajuda e o que está te incomodando no momento. Eu também explicarei como funciona minha metodologia (TCC), tirarei suas dúvidas sobre frequência, valores e agendamento, e começaremos a traçar nossos objetivos terapêuticos juntos.'
  },
  {
    question: 'As sessões são online ou presenciais?',
    answer: 'Trabalho em ambas as modalidades! Atendo presencialmente em meu consultório localizado na Av. Paulista (São Paulo) e online para todo o Brasil e brasileiros no exterior. As sessões online ocorrem por meio de videochamadas em uma plataforma de saúde segura e criptografada, com a mesma eficácia e sigilo da terapia presencial.'
  },
  {
    question: 'Qual é a duração e a frequência das sessões?',
    answer: 'As sessões individuais duram 50 minutos. A frequência recomendada para que o tratamento tenha resultados consistentes é semanal, principalmente nas primeiras fases do processo terapêutico. Conforme o paciente adquire ferramentas e maior autonomia, podemos planejar o espaçamento das sessões para quinzenal, até a alta.'
  },
  {
    question: 'O Dr. Psiwinner atende convênios médicos?',
    answer: 'Atendo exclusivamente de forma particular. No entanto, emito recibos e notas fiscais completos com todos os dados exigidos pelos convênios para que você possa solicitar o reembolso das consultas (a maioria dos planos de saúde oferece reembolso de até 100% do valor da consulta psicológica).'
  },
  {
    question: 'Qual é a abordagem terapêutica utilizada?',
    answer: 'Utilizo a Terapia Cognitivo-Comportamental (TCC), considerada padrão ouro pela ciência para diversos transtornos. É uma abordagem colaborativa, estruturada, focada no presente e muito prática. Trabalhamos na identificação e modificação de padrões de pensamentos disfuncionais e comportamentos para que você conquiste autonomia e melhora duradoura.'
  }
];
