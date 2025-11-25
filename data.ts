
import { Idea, Category } from './types';

export const categories: Category[] = [
  { id: 'vendas', name: 'Vendas e Comércio', icon: 'storefront' },
  { id: 'online', name: 'Trabalho Online', icon: 'laptop_chromebook' },
  { id: 'servicos', name: 'Serviços Gerais', icon: 'home_repair_service' },
  { id: 'beleza', name: 'Beleza e Estética', icon: 'spa' },
  { id: 'educacao', name: 'Educação e Aulas', icon: 'school' },
  { id: 'tecnologia', name: 'Tecnologia', icon: 'devices' },
  { id: 'aluguel', name: 'Aluguel e Economia', icon: 'key' },
  { id: 'criativo', name: 'Artesanato e Criativo', icon: 'palette' },
];

const baseIdeas: Idea[] = [
  // --- EXISTENTES ---
  {
    id: 'doces-gourmet',
    title: 'Venda de Doces Gourmet',
    shortDescription: 'Produza e venda doces caseiros em sua comunidade ou online.',
    fullDescription: 'A venda de doces gourmet é uma excelente oportunidade para quem ama cozinhar e quer transformar essa paixão em uma fonte de renda. O mercado valoriza produtos artesanais, com ingredientes de qualidade e apresentação diferenciada, permitindo uma boa margem de lucro.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'Até R$ 100',
    profit: 'R$ 500 - R$ 1.500/mês',
    difficulty: 'Fácil',
    tags: ['Vendas', 'Alimentação', 'Baixo Custo'],
    image: 'https://images.unsplash.com/photo-1599354607476-69d6515b136c?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Ingredientes básicos (leite condensado, chocolate, etc.)',
      'Panela, espátula e utensílios de cozinha',
      'Embalagens bonitas e personalizadas',
      'Balança de precisão para padronizar'
    ],
    steps: [
      'Defina seu cardápio inicial (2 ou 3 sabores).',
      'Calcule o custo de cada doce para definir o preço de venda.',
      'Crie perfis nas redes sociais para divulgar seu trabalho com fotos de qualidade.',
      'Ofereça degustações para amigos e familiares para conseguir os primeiros clientes e feedbacks.',
      'Comece vendendo sob encomenda para evitar desperdícios.'
    ],
    tips: 'Crie kits para presente em datas comemorativas. Ofereça opções de entrega. Use ingredientes de qualidade, pois o sabor será seu maior marketing. Tire fotos incríveis dos seus produtos para postar online.'
  },
  {
    id: 'conteudo-digital',
    title: 'Conteúdo para Redes Sociais',
    shortDescription: 'Crie um blog, canal no YouTube ou perfil em redes sociais sobre um tema que você domina.',
    fullDescription: 'Gerenciar redes sociais ou criar conteúdo UGC (User Generated Content) para marcas é uma das formas mais rápidas de crescer online. Você não precisa de milhões de seguidores, apenas de criatividade e consistência.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0 - R$ 200',
    profit: 'R$ 1.000 - R$ 5.000/mês',
    difficulty: 'Médio',
    tags: ['Online', 'Criativo', 'Baixo Custo'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Smartphone com boa câmera',
      'Conhecimento básico de edição (CapCut, Canva)',
      'Acesso à internet'
    ],
    steps: [
      'Escolha um nicho (moda, tecnologia, humor, etc).',
      'Crie um portfólio de vídeos ou posts exemplo.',
      'Aborde pequenas empresas locais oferecendo pacotes de posts.'
    ],
    tips: 'A consistência é chave. Poste todos os dias se possível e interaja com quem comenta.',
    isNew: true
  },
  {
    id: 'passeador-caes',
    title: 'Passeador de Cães',
    shortDescription: 'Ofereça serviços de passeio para cães na sua vizinhança. Ideal para quem ama animais.',
    fullDescription: 'Se você gosta de animais e de caminhar ao ar livre, ser um "Dog Walker" pode ser terapêutico e lucrativo. Muitos donos não têm tempo para passear com seus pets durante o dia.',
    category: 'Serviços',
    cost: 'Baixo',
    costValue: 'R$ 0 - R$ 50',
    profit: 'R$ 800 - R$ 2.000/mês',
    difficulty: 'Fácil',
    tags: ['Serviços', 'Médio Custo', 'Animais'],
    image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Amor por animais',
      'Disposição física',
      'Saquinhos higiênicos',
      'Guia extra (opcional)'
    ],
    steps: [
      'Divulgue em grupos de WhatsApp do seu bairro.',
      'Faça cartões de visita e deixe em pet shops locais.',
      'Ofereça o primeiro passeio com desconto.'
    ],
    tips: 'Envie fotos e vídeos do passeio para os donos, isso gera muita confiança e fidelidade.'
  },
  {
    id: 'redator-freelancer',
    title: 'Redator Freelancer',
    shortDescription: 'Escreva artigos, posts para blogs e redes sociais para empresas e profissionais.',
    fullDescription: 'A demanda por conteúdo escrito nunca foi tão alta. Se você escreve bem, pode oferecer serviços de redação, revisão e copywriting para sites, blogs e e-mails marketing.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 1.500 - R$ 4.000/mês',
    difficulty: 'Médio',
    tags: ['Online', 'Freelancer', 'Baixo Custo'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Computador',
      'Boa gramática',
      'Conhecimento básico de SEO'
    ],
    steps: [
      'Crie um perfil em sites como Workana ou 99Freelas.',
      'Monte um portfólio no Medium ou LinkedIn.',
      'Candidate-se a projetos pequenos para ganhar avaliações.'
    ],
    tips: 'Especialize-se em um nicho (ex: finanças, saúde, tecnologia) para cobrar mais caro.'
  },
  {
    id: 'artesanato-local',
    title: 'Venda de Artesanato Local',
    shortDescription: 'Crie e venda produtos artesanais como bijuterias, velas ou cerâmicas online ou em feiras.',
    fullDescription: 'Produtos feitos à mão têm um valor percebido muito alto. Velas aromáticas, sabonetes artesanais, bijuterias e macramê são ótimos pontos de partida.',
    category: 'Criativo',
    cost: 'Médio',
    costValue: 'R$ 200 - R$ 500',
    profit: 'R$ 1.000 - R$ 3.000/mês',
    difficulty: 'Médio',
    tags: ['Vendas', 'Criativo', 'Manual'],
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Materiais para produção (cera, tecidos, miçangas)',
      'Espaço de trabalho em casa',
      'Embalagens'
    ],
    steps: [
      'Aprenda a técnica escolhida (Youtube tem muitos tutoriais).',
      'Produza um pequeno estoque inicial.',
      'Tire boas fotos e anuncie no Instagram e Marketplace do Facebook.'
    ],
    tips: 'A embalagem é parte do produto. Capriche no "unboxing" para que o cliente queira postar nas redes sociais.'
  },
  {
    id: 'aulas-reforco',
    title: 'Aulas de Reforço Escolar',
    shortDescription: 'Ofereça aulas particulares online ou presenciais para estudantes do ensino fundamental e médio.',
    fullDescription: 'Se você manda bem em matemática, português ou inglês, pode ajudar estudantes que estão com dificuldade. Aulas online via Zoom ou Meet facilitam muito a logística.',
    category: 'Educação',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 50 - R$ 150/hora',
    difficulty: 'Médio',
    tags: ['Serviços', 'Ensino', 'Baixo Custo'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Domínio da matéria',
      'Computador e webcam (para online)',
      'Material didático de apoio'
    ],
    steps: [
      'Defina quais matérias e níveis você pode ensinar.',
      'Divulgue em grupos de pais e escolas.',
      'Prepare um roteiro de aula para a primeira sessão.'
    ],
    tips: 'Pacotes mensais garantem uma renda mais previsível do que aulas avulsas.'
  },
  {
    id: 'assistente-virtual',
    title: 'Assistente Virtual',
    shortDescription: 'Preste suporte administrativo, financeiro ou comercial para empresas remotamente.',
    fullDescription: 'Com o crescimento do trabalho remoto, muitos empresários precisam de ajuda para organizar agendas, responder e-mails, emitir notas fiscais e gerenciar tarefas administrativas, mas não querem contratar um funcionário fixo.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 1.500 - R$ 4.000/mês',
    difficulty: 'Médio',
    tags: ['Online', 'Administrativo', 'Freelancer'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Computador com internet',
      'Organização e Pró-atividade',
      'Pacote Office/Google Docs'
    ],
    steps: [
      'Defina seu portfólio de serviços (financeiro, atendimento, agenda).',
      'Crie um perfil no LinkedIn destacando suas habilidades.',
      'Cadastre-se em plataformas como Workana ou 99Freelas.'
    ],
    tips: 'Especialize-se em um nicho, como assistente para médicos ou advogados, para cobrar mais.'
  },
  {
    id: 'afiliado-digital',
    title: 'Afiliado Digital',
    shortDescription: 'Divulgue produtos de terceiros e ganhe comissões por cada venda realizada.',
    fullDescription: 'Você não precisa ter um produto próprio. Como afiliado, você escolhe produtos físicos ou digitais em plataformas como Hotmart, Eduzz ou Amazon, divulga seu link exclusivo e ganha uma porcentagem da venda.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0 - R$ 100',
    profit: 'R$ 500 - R$ 5.000/mês',
    difficulty: 'Médio',
    tags: ['Vendas', 'Online', 'Marketing'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Celular ou Computador',
      'Acesso à internet',
      'Conhecimento em redes sociais'
    ],
    steps: [
      'Cadastre-se em programas de afiliados (Amazon, Shopee, Hotmart).',
      'Escolha produtos que tenham a ver com seu público.',
      'Crie conteúdo (reviews, vídeos) recomendando os produtos.'
    ],
    tips: 'Não faça spam. Crie valor real explicando por que o produto é bom e como ele resolve um problema.',
    isNew: true
  },
  {
    id: 'brecho-online',
    title: 'Brechó Online',
    shortDescription: 'Venda roupas usadas suas ou garimpe peças para revender na internet.',
    fullDescription: 'A moda sustentável está em alta. Você pode começar vendendo o que está parado no seu guarda-roupa e depois expandir garimpando peças incríveis em bazares para revender no Enjoei ou Instagram.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'R$ 0 - R$ 200',
    profit: 'R$ 300 - R$ 2.000/mês',
    difficulty: 'Fácil',
    tags: ['Vendas', 'Moda', 'Sustentável'],
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Roupas em bom estado',
      'Celular para fotos',
      'Embalagens'
    ],
    steps: [
      'Separe peças limpas e sem defeitos.',
      'Tire fotos em um local bem iluminado (luz natural é melhor).',
      'Crie uma loja no Instagram ou cadastre no Enjoei.'
    ],
    tips: 'Monte looks completos com as peças para mostrar como elas vestem bem no corpo.'
  },
  {
    id: 'manutencao-celular',
    title: 'Reparo de Celulares',
    shortDescription: 'Conserte telas, baterias e softwares de smartphones na sua região.',
    fullDescription: 'Todo mundo tem um celular e ninguém quer ficar sem ele. Serviços rápidos como troca de tela e bateria têm altíssima demanda e margem de lucro excelente.',
    category: 'Tecnologia',
    cost: 'Médio',
    costValue: 'R$ 300 - R$ 800',
    profit: 'R$ 2.000 - R$ 5.000/mês',
    difficulty: 'Difícil',
    tags: ['Serviços', 'Técnico', 'Alto Retorno'],
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Kit de ferramentas para celular',
      'Curso básico de manutenção',
      'Fornecedores de peças'
    ],
    steps: [
      'Faça um curso técnico (presencial ou online).',
      'Compre um kit básico de chaves e espátulas.',
      'Comece consertando aparelhos de amigos e familiares a preço de custo.'
    ],
    tips: 'O boca a boca é fundamental aqui. Seja honesto e cumpra prazos rigorosamente.'
  },
  {
    id: 'marmitas-fit',
    title: 'Marmitas Fit Congeladas',
    shortDescription: 'Cozinhe refeições saudáveis e venda pacotes semanais congelados.',
    fullDescription: 'A busca por alimentação saudável esbarra na falta de tempo. Vender marmitas congeladas resolve esse problema. Você pode cozinhar um dia na semana e vender para a semana toda.',
    category: 'Vendas',
    cost: 'Médio',
    costValue: 'R$ 200 - R$ 400',
    profit: 'R$ 1.500 - R$ 4.000/mês',
    difficulty: 'Médio',
    tags: ['Alimentação', 'Vendas', 'Saúde'],
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Cozinha equipada',
      'Embalagens próprias para freezer/micro-ondas',
      'Ingredientes frescos'
    ],
    steps: [
      'Defina um cardápio simples (ex: 5 opções).',
      'Compre insumos em atacadistas.',
      'Cozinhe, monte e congele imediatamente.',
      'Divulgue em academias e escritórios.'
    ],
    tips: 'Tenha opções low-carb e vegetarianas para alcançar mais públicos.'
  },
  {
    id: 'pet-sitter',
    title: 'Hospedagem de Pets',
    shortDescription: 'Cuide de cachorros e gatos na sua casa enquanto os donos viajam.',
    fullDescription: 'Plataformas como DogHero popularizaram esse serviço. Se você tem espaço e gosta de animais, pode hospedar pets cobrando por diária, sendo uma alternativa mais carinhosa que hotéis para cães.',
    category: 'Serviços',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 600 - R$ 2.500/mês',
    difficulty: 'Médio',
    tags: ['Serviços', 'Animais', 'Em Casa'],
    image: 'https://images.unsplash.com/photo-1587559070757-f72a388edbba?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Espaço seguro em casa',
      'Disponibilidade de tempo',
      'Gostar muito de animais'
    ],
    steps: [
      'Adapte sua casa (telas nas janelas, retirar objetos perigosos).',
      'Cadastre-se em apps como DogHero ou divulgue no bairro.',
      'Faça um encontro prévio com o pet para ver se se adaptam.'
    ],
    tips: 'Mande fotos e vídeos diários para tranquilizar os donos.'
  },
  {
    id: 'design-sobrancelhas',
    title: 'Design de Sobrancelhas',
    shortDescription: 'Ofereça serviços de beleza a domicílio ou em um pequeno espaço.',
    fullDescription: 'O setor de beleza é resiliente a crises. O design de sobrancelhas (com ou sem henna) tem baixo custo de material e alta recorrência, pois as clientes voltam a cada 15 ou 30 dias.',
    category: 'Beleza',
    cost: 'Baixo',
    costValue: 'R$ 100 - R$ 300',
    profit: 'R$ 1.000 - R$ 3.000/mês',
    difficulty: 'Médio',
    tags: ['Beleza', 'Serviços', 'Mulheres'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Pinças, tesouras e escovinhas',
      'Henna e algodão',
      'Cadeira confortável'
    ],
    steps: [
      'Faça um curso profissionalizante.',
      'Treine em amigas e familiares para montar portfólio.',
      'Crie um perfil no Instagram com fotos de "antes e depois".'
    ],
    tips: 'Fidelize a cliente oferecendo um cartão fidelidade (ex: 10º serviço grátis).'
  },
  {
    id: 'professor-idiomas',
    title: 'Professor de Idiomas',
    shortDescription: 'Dê aulas de conversação online para quem quer destravar o inglês ou espanhol.',
    fullDescription: 'Muitas pessoas estudaram gramática mas travam na hora de falar. Se você é fluente, ofereça aulas focadas apenas em conversação via vídeo chamada.',
    category: 'Educação',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 40 - R$ 100/hora',
    difficulty: 'Médio',
    tags: ['Educação', 'Online', 'Idiomas'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    requirements: [
      'Fluência no idioma',
      'Computador/Celular com câmera',
      'Boa conexão de internet'
    ],
    steps: [
      'Defina sua metodologia (foco em viagens, negócios, ou casual).',
      'Divulgue no Instagram e LinkedIn.',
      'Use plataformas como Italki ou Superprof.'
    ],
    tips: 'A primeira aula experimental grátis ajuda muito a fechar pacotes mensais.'
  }
];

// Gerador de ideias adicionais para popular o app
const extraIdeas: Idea[] = [
  // --- VENDAS & ALIMENTAÇÃO ---
  {
    id: 'bolos-pote',
    title: 'Bolos de Pote',
    shortDescription: 'Venda bolos em porções individuais com sabores variados.',
    fullDescription: 'Bolos de pote são sucessos de venda por serem práticos e deliciosos. Ótimo para vender em faculdades, escritórios ou delivery.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'R$ 100',
    profit: 'R$ 800 - R$ 2.000',
    difficulty: 'Fácil',
    tags: ['Alimentação', 'Vendas', 'Doces'],
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    requirements: ['Potes plásticos', 'Ingredientes para bolo e recheio'],
    steps: ['Crie 3 sabores principais', 'Faça etiquetas com validade', 'Divulgue no Instagram'],
    tips: 'Capriche no recheio, ele é o segredo do sucesso.'
  },
  {
    id: 'geladinho-gourmet',
    title: 'Geladinho Gourmet',
    shortDescription: 'Sacolés cremosos com ingredientes premium para o verão.',
    fullDescription: 'Também conhecido como dindin ou chup-chup, a versão gourmet leva leite condensado, nutella e frutas reais.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'R$ 50',
    profit: 'R$ 500 - R$ 1.500',
    difficulty: 'Fácil',
    tags: ['Alimentação', 'Verão', 'Fácil'],
    image: 'https://images.unsplash.com/photo-1500315331616-db4f707c24d1?auto=format&fit=crop&q=80&w=800',
    requirements: ['Saquinhos', 'Liquidificador', 'Freezer'],
    steps: ['Teste receitas cremosas', 'Use fitas para fechar', 'Venda em praças ou eventos'],
    tips: 'Use isopor decorado para vender na rua.'
  },
  {
    id: 'hamburguer-artesanal',
    title: 'Hambúrguer Artesanal',
    shortDescription: 'Delivery de hambúrgueres feitos em casa nos finais de semana.',
    fullDescription: 'Comece operando apenas sexta e sábado à noite. Hambúrgueres caseiros têm grande apelo e margem alta.',
    category: 'Vendas',
    cost: 'Médio',
    costValue: 'R$ 300',
    profit: 'R$ 1.000 - R$ 3.000',
    difficulty: 'Médio',
    tags: ['Alimentação', 'Delivery', 'Jantar'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    requirements: ['Chapa ou frigideira grossa', 'Moedor de carne (opcional)', 'Embalagem térmica'],
    steps: ['Crie um blend de carnes', 'Defina 3 opções de lanche', 'Cadastre no iFood'],
    tips: 'O pão selado na manteiga faz toda a diferença.'
  },
  {
    id: 'cestas-cafe',
    title: 'Cestas de Café da Manhã',
    shortDescription: 'Monte cestas personalizadas para datas comemorativas.',
    fullDescription: 'Presentear com experiências está em alta. Monte cestas lindas para aniversários, dia das mães e namorados.',
    category: 'Vendas',
    cost: 'Médio',
    costValue: 'R$ 200',
    profit: 'R$ 100 - R$ 200 por cesta',
    difficulty: 'Médio',
    tags: ['Vendas', 'Presentes', 'Criativo'],
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80&w=800',
    requirements: ['Cestas de vime ou caixas', 'Itens de padaria frescos', 'Flores e cartões'],
    steps: ['Faça parcerias com padarias', 'Tire fotos das cestas montadas', 'Peça encomendas com antecedência'],
    tips: 'Personalize com o nome da pessoa presenteada.'
  },
  {
    id: 'trufas-bombons',
    title: 'Trufas e Bombons',
    shortDescription: 'Chocolates artesanais para revenda em comércios.',
    fullDescription: 'O chocolate é uma paixão nacional. Trufas bem feitas vendem rápido em salões de beleza, escolas e escritórios.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'R$ 80',
    profit: 'R$ 600 - R$ 1.200',
    difficulty: 'Médio',
    tags: ['Doces', 'Vendas', 'Chocolate'],
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800',
    requirements: ['Chocolate nobre ou fracionado', 'Forminhas', 'Embalagem'],
    steps: ['Aprenda a temperar chocolate', 'Faça recheios clássicos', 'Deixe em consignação'],
    tips: 'Invista em datas como Páscoa para triplicar o lucro.'
  },
  {
    id: 'pizza-pre-assada',
    title: 'Pizza Caseira Pré-assada',
    shortDescription: 'Venda pizzas montadas prontas para ir ao forno.',
    fullDescription: 'Praticidade para o jantar do cliente. Você monta a pizza, embala a vácuo ou com filme plástico e o cliente assa.',
    category: 'Vendas',
    cost: 'Médio',
    costValue: 'R$ 200',
    profit: 'R$ 1.000 - R$ 2.500',
    difficulty: 'Médio',
    tags: ['Alimentação', 'Jantar', 'Vendas'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    requirements: ['Discos de pizza', 'Forno', 'Freezer'],
    steps: ['Faça um molho de tomate caseiro', 'Monte sabores tradicionais', 'Venda combos'],
    tips: 'Massa fina e crocante fideliza clientes.'
  },
  {
    id: 'geleias-artesanais',
    title: 'Geleias Artesanais',
    shortDescription: 'Produza geleias de frutas sem conservantes.',
    fullDescription: 'Produtos naturais estão valorizados. Geleias de morango, pimenta ou frutas da estação em potes bonitos.',
    category: 'Vendas',
    cost: 'Baixo',
    costValue: 'R$ 100',
    profit: 'R$ 500 - R$ 1.500',
    difficulty: 'Fácil',
    tags: ['Alimentação', 'Vegano', 'Artesanal'],
    image: 'https://images.unsplash.com/photo-1590748496229-87a3cb3c2991?auto=format&fit=crop&q=80&w=800',
    requirements: ['Frutas frescas', 'Açúcar', 'Potes de vidro esterilizados'],
    steps: ['Cozinhe a fruta com açúcar', 'Envase quente para vácuo', 'Cole rótulos rústicos'],
    tips: 'Combine sabores exóticos como Abacaxi com Pimenta.'
  },
  
  // --- ONLINE & FREELANCER ---
  {
    id: 'gestor-trafego',
    title: 'Gestor de Tráfego Pago',
    shortDescription: 'Gerencie anúncios no Facebook e Google para empresas locais.',
    fullDescription: 'Toda empresa quer vender mais. Aprenda a criar anúncios online e cobre uma mensalidade para gerenciar o orçamento de marketing delas.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 1.000 - R$ 10.000',
    difficulty: 'Difícil',
    tags: ['Marketing', 'Online', 'Alto Retorno'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    requirements: ['Computador', 'Conhecimento em Meta Ads/Google Ads'],
    steps: ['Estude a central de ajuda das plataformas', 'Ofereça serviço gratuito por 15 dias', 'Mostre relatórios de resultado'],
    tips: 'Comece com delivery e negócios locais.'
  },
  {
    id: 'editor-video-reels',
    title: 'Editor de Vídeos Curtos',
    shortDescription: 'Edite Reels e TikToks para influenciadores e marcas.',
    fullDescription: 'Vídeos curtos dominam a internet. Se você sabe editar no CapCut ou Premiere, há muita demanda para transformar vídeos longos em "cortes" virais.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 1.000 - R$ 4.000',
    difficulty: 'Médio',
    tags: ['Criativo', 'Vídeo', 'Redes Sociais'],
    image: 'https://images.unsplash.com/photo-1574717432707-c257197a9165?auto=format&fit=crop&q=80&w=800',
    requirements: ['Celular bom ou PC', 'Software de edição'],
    steps: ['Crie um portfólio no Drive', 'Aborde youtubers e influencers', 'Cobre por pacote de vídeos'],
    tips: 'Legendas dinâmicas prendem a atenção e valem mais.'
  },
  {
    id: 'transcricao-audio',
    title: 'Transcrição de Áudio',
    shortDescription: 'Transforme áudios e vídeos em texto.',
    fullDescription: 'Médicos, advogados e pesquisadores precisam transcrever gravações. Sites como Rev ou Workana têm projetos assim.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 400 - R$ 1.500',
    difficulty: 'Fácil',
    tags: ['Freelancer', 'Digitação', 'Rápido'],
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800',
    requirements: ['Fones de ouvido', 'Computador', 'Boa digitação'],
    steps: ['Cadastre-se em sites de freela', 'Faça testes de digitação', 'Entregue no prazo'],
    tips: 'Use softwares que desaceleram o áudio para ajudar.'
  },
  {
    id: 'testador-sites',
    title: 'Testador de Sites e Apps',
    shortDescription: 'Ganhe dinheiro testando a usabilidade de plataformas.',
    fullDescription: 'Empresas pagam para usuários comuns gravarem a tela enquanto tentam usar seus sites, para encontrar erros e dificuldades.',
    category: 'Tecnologia',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 50 - R$ 200 por teste',
    difficulty: 'Fácil',
    tags: ['Tecnologia', 'Online', 'Sem Experiência'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    requirements: ['Computador com microfone', 'Inglês básico (ajuda muito)'],
    steps: ['Cadastre-se na UserTesting ou Testbirds', 'Complete o perfil', 'Faça os testes qualificados'],
    tips: 'Fale em voz alta seus pensamentos durante o teste.'
  },
  {
    id: 'designer-canva',
    title: 'Designer de Canva',
    shortDescription: 'Crie artes rápidas para redes sociais de pequenos negócios.',
    fullDescription: 'Muitos empreendedores não têm tempo de fazer posts bonitos. Use o Canva para criar packs de artes profissionais.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 500 - R$ 2.000',
    difficulty: 'Fácil',
    tags: ['Design', 'Criativo', 'Iniciante'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b79931434f3?auto=format&fit=crop&q=80&w=800',
    requirements: ['Conta no Canva (grátis ou pro)', 'Senso estético'],
    steps: ['Crie modelos fictícios', 'Ofereça pacotes de 10 artes', 'Entregue o link editável'],
    tips: 'Venda templates prontos para nichos específicos (ex: manicure).'
  },
  
  // --- SERVIÇOS & CASA ---
  {
    id: 'personal-organizer',
    title: 'Personal Organizer',
    shortDescription: 'Organize armários, closets e mudanças.',
    fullDescription: 'Ajude pessoas a colocarem a casa em ordem. Dobre roupas, organize despensas e crie sistemas que facilitam o dia a dia.',
    category: 'Serviços',
    cost: 'Baixo',
    costValue: 'R$ 50 (materiais)',
    profit: 'R$ 100 - R$ 200/hora',
    difficulty: 'Médio',
    tags: ['Organização', 'Casa', 'Serviços'],
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    requirements: ['Gostar de ordem', 'Técnicas de dobra'],
    steps: ['Faça um curso básico online', 'Organize a casa de amigos para portfólio', 'Poste o antes e depois'],
    tips: 'Nichos como "organização de mudança" pagam muito bem.'
  },
  {
    id: 'limpeza-sofa',
    title: 'Limpeza de Estofados',
    shortDescription: 'Limpeza profunda de sofás, colchões e cadeiras.',
    fullDescription: 'Serviço com alta margem. Com uma máquina extratora (que pode ser alugada no início), você limpa sofás na casa do cliente.',
    category: 'Serviços',
    cost: 'Alto',
    costValue: 'R$ 1.500 (máquina)',
    profit: 'R$ 2.000 - R$ 6.000',
    difficulty: 'Médio',
    tags: ['Limpeza', 'Alto Retorno', 'Serviços'],
    image: 'https://images.unsplash.com/photo-1581578731117-10d52143b1e8?auto=format&fit=crop&q=80&w=800',
    requirements: ['Extratora', 'Produtos químicos específicos', 'Transporte'],
    steps: ['Compre ou alugue o equipamento', 'Treine em casa', 'Anuncie no Google Meu Negócio'],
    tips: 'Mostre a água suja saindo nos vídeos, isso vende muito.'
  },
  {
    id: 'marido-aluguel',
    title: 'Marido de Aluguel',
    shortDescription: 'Pequenos reparos domésticos: trocar chuveiro, instalar prateleira.',
    fullDescription: 'Se você sabe manusear uma furadeira, há muito trabalho. Instalar cortinas, quadros e trocar tomadas são serviços rápidos e bem pagos.',
    category: 'Serviços',
    cost: 'Médio',
    costValue: 'R$ 300 (ferramentas)',
    profit: 'R$ 1.500 - R$ 4.000',
    difficulty: 'Médio',
    tags: ['Manutenção', 'Manual', 'Rápido'],
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
    requirements: ['Furadeira', 'Chaves diversas', 'Escada'],
    steps: ['Monte sua caixa de ferramentas', 'Divulgue no condomínio', 'Cobre por visita ou serviço'],
    tips: 'A limpeza após o serviço é seu diferencial.'
  },
  {
    id: 'jardinagem',
    title: 'Jardinagem Básica',
    shortDescription: 'Corte de grama, poda e limpeza de quintais.',
    fullDescription: 'Manter jardins bonitos dá trabalho. Ofereça manutenção quinzenal para casas e condomínios.',
    category: 'Serviços',
    cost: 'Médio',
    costValue: 'R$ 400',
    profit: 'R$ 1.000 - R$ 3.000',
    difficulty: 'Médio',
    tags: ['Natureza', 'Manual', 'Serviços'],
    image: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?auto=format&fit=crop&q=80&w=800',
    requirements: ['Cortador de grama', 'Tesoura de poda', 'Vassoura de jardim'],
    steps: ['Adquira equipamentos usados', 'Distribua panfletos em bairros residenciais'],
    tips: 'Ofereça o plantio de flores além da limpeza.'
  },
  {
    id: 'lavagem-ecologica',
    title: 'Lavagem de Carro Ecológica',
    shortDescription: 'Lave carros a seco na casa do cliente.',
    fullDescription: 'Com produtos específicos, você lava um carro usando menos de 1 litro de água. Serviço delivery prático para o cliente.',
    category: 'Serviços',
    cost: 'Baixo',
    costValue: 'R$ 150',
    profit: 'R$ 1.000 - R$ 3.000',
    difficulty: 'Médio',
    tags: ['Automotivo', 'Serviços', 'Sustentável'],
    image: 'https://images.unsplash.com/photo-1520340356584-7db0072cb396?auto=format&fit=crop&q=80&w=800',
    requirements: ['Produtos de lavagem a seco', 'Panos de microfibra', 'Aspirador portátil'],
    steps: ['Aprenda a técnica para não riscar', 'Vá até o escritório/casa do cliente'],
    tips: 'Venda planos mensais de lavagem.'
  },

  // --- BELEZA & BEM-ESTAR ---
  {
    id: 'manicure',
    title: 'Manicure e Pedicure',
    shortDescription: 'Cuidados com unhas a domicílio.',
    fullDescription: 'Profissão clássica e sempre em demanda. Atender a domicílio economiza o tempo da cliente e você não paga aluguel de salão.',
    category: 'Beleza',
    cost: 'Baixo',
    costValue: 'R$ 200',
    profit: 'R$ 1.500 - R$ 3.500',
    difficulty: 'Médio',
    tags: ['Beleza', 'Serviços', 'Mulheres'],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800',
    requirements: ['Alicates (esterilizados)', 'Esmaltes variados', 'Lixas descartáveis'],
    steps: ['Faça curso de capacitação', 'Compre autoclave ou use descartáveis', 'Divulgue no bairro'],
    tips: 'Unhas decoradas ou em gel cobram o dobro do preço.'
  },
  {
    id: 'maquiagem-social',
    title: 'Maquiagem Social',
    shortDescription: 'Maquiagem para festas e eventos.',
    fullDescription: 'Finais de semana são cheios de casamentos e formaturas. Se você manda bem na make, atenda clientes em casa.',
    category: 'Beleza',
    cost: 'Médio',
    costValue: 'R$ 500',
    profit: 'R$ 150 - R$ 300 por make',
    difficulty: 'Difícil',
    tags: ['Beleza', 'Eventos', 'Criativo'],
    image: 'https://images.unsplash.com/photo-1487412947132-28c5d747c800?auto=format&fit=crop&q=80&w=800',
    requirements: ['Maleta de maquiagem profissional', 'Pincéis', 'Luz (ring light)'],
    steps: ['Monte portfólio no Instagram', 'Faça parcerias com cabeleireiros'],
    tips: 'Use produtos à prova d\'água para garantir durabilidade na festa.'
  },
  {
    id: 'depilacao',
    title: 'Depilação',
    shortDescription: 'Serviços de depilação com cera ou linha.',
    fullDescription: 'Serviço rápido e recorrente. Pode ser feito em um pequeno espaço na sua casa.',
    category: 'Beleza',
    cost: 'Baixo',
    costValue: 'R$ 150',
    profit: 'R$ 1.000 - R$ 3.000',
    difficulty: 'Médio',
    tags: ['Beleza', 'Serviços', 'Recorrente'],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800',
    requirements: ['Cera e termocera', 'Maca ou cadeira', 'Materiais descartáveis'],
    steps: ['Curso de depilação', 'Prepare um ambiente higiênico e privado'],
    tips: 'A depilação egípcia (linha) no rosto tem custo quase zero de material.'
  },
  
  // --- EDUCAÇÃO ---
  {
    id: 'aula-musica',
    title: 'Aulas de Música',
    shortDescription: 'Ensine violão, teclado ou canto para iniciantes.',
    fullDescription: 'Sabe tocar um instrumento? Ensine o básico para quem está começando. Pode ser presencial ou online.',
    category: 'Educação',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 50 - R$ 100/hora',
    difficulty: 'Médio',
    tags: ['Ensino', 'Música', 'Hobby'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    requirements: ['Seu instrumento', 'Conhecimento teórico básico'],
    steps: ['Defina o nível que você ensina', 'Grave vídeos tocando', 'Anuncie em grupos locais'],
    tips: 'Ensine as músicas que o aluno gosta para manter a motivação.'
  },
  {
    id: 'informatica-idosos',
    title: 'Informática para Idosos',
    shortDescription: 'Ensine idosos a usar celular, whatsapp e internet banking.',
    fullDescription: 'Muita gente da terceira idade quer independência digital. Tenha paciência e ensine o básico de tecnologia.',
    category: 'Educação',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 40 - R$ 80/hora',
    difficulty: 'Fácil',
    tags: ['Educação', 'Tecnologia', 'Social'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    requirements: ['Paciência', 'Conhecimento de smartphones'],
    steps: ['Ofereça ajuda a vizinhos', 'Peça recomendações'],
    tips: 'Crie tutoriais impressos com letras grandes para eles lembrarem.'
  },

  // --- TECNOLOGIA ---
  {
    id: 'formatacao-pc',
    title: 'Formatação de Computadores',
    shortDescription: 'Limpeza de sistema e instalação de Windows/Office.',
    fullDescription: 'Computadores lentos são comuns. Ofereça formatação, backup e limpeza física (poeira).',
    category: 'Tecnologia',
    cost: 'Baixo',
    costValue: 'R$ 20 (Pen drive)',
    profit: 'R$ 80 - R$ 200 por serviço',
    difficulty: 'Médio',
    tags: ['Tecnologia', 'Serviços', 'Técnico'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=800',
    requirements: ['Pen drive bootável', 'Conhecimento de drivers', 'Softwares básicos'],
    steps: ['Aprenda a fazer backup seguro', 'Instale antivírus gratuito', 'Limpe o cooler'],
    tips: 'Ofereça o serviço "leva e traz" para comodidade.'
  },
  {
    id: 'smart-home',
    title: 'Instalação de Casa Inteligente',
    shortDescription: 'Configure Alexa, lâmpadas e tomadas inteligentes.',
    fullDescription: 'Muitos compram itens de casa inteligente mas não sabem configurar. Instale e crie rotinas automáticas para o cliente.',
    category: 'Tecnologia',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 100 - R$ 300 por visita',
    difficulty: 'Médio',
    tags: ['Tecnologia', 'Tendência', 'Serviços'],
    image: 'https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=800',
    requirements: ['Conhecimento em apps de automação', 'Smartphone'],
    steps: ['Aprenda a configurar Alexa/Google Home', 'Entenda de redes Wi-Fi 2.4Ghz'],
    tips: 'Venda os dispositivos junto com a instalação para lucrar mais.'
  },

  // --- ALUGUEL & ECONOMIA ---
  {
    id: 'aluguel-vestidos',
    title: 'Aluguel de Vestidos de Festa',
    shortDescription: 'Alugue seus vestidos que estão parados no armário.',
    fullDescription: 'Roupas de festa são caras e usadas poucas vezes. Alugue as suas para amigas ou em plataformas especializadas.',
    category: 'Aluguel',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 100 - R$ 300 por aluguel',
    difficulty: 'Fácil',
    tags: ['Moda', 'Sustentável', 'Passiva'],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
    requirements: ['Roupas de qualidade', 'Contrato simples de locação', 'Lavanderia parceira'],
    steps: ['Fotografe as peças', 'Anuncie no Instagram ou apps de aluguel'],
    tips: 'Cobre um calção (garantia) para cobrir eventuais danos.'
  },
  {
    id: 'airbnb-quarto',
    title: 'Aluguel de Quarto',
    shortDescription: 'Alugue um quarto vago na sua casa pelo Airbnb.',
    fullDescription: 'Se você tem um quarto sobrando, pode receber hóspedes por temporada. Ótima renda extra e intercâmbio cultural.',
    category: 'Aluguel',
    cost: 'Baixo',
    costValue: 'R$ 100 (roupa de cama)',
    profit: 'R$ 500 - R$ 2.000',
    difficulty: 'Médio',
    tags: ['Hospedagem', 'Passiva', 'Casa'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    requirements: ['Quarto mobiliado', 'Roupa de cama limpa', 'Boa hospitalidade'],
    steps: ['Tire fotos claras', 'Cadastre no Airbnb', 'Mantenha tudo limpo'],
    tips: 'Pequenos mimos como água e chocolate garantem 5 estrelas.'
  },
  {
    id: 'aluguel-ferramentas',
    title: 'Aluguel de Ferramentas',
    shortDescription: 'Alugue furadeira, escada e lavadora de alta pressão.',
    fullDescription: 'Muita gente precisa de uma ferramenta só por um dia. Se você tem, alugue para vizinhos.',
    category: 'Aluguel',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 30 - R$ 100/dia',
    difficulty: 'Fácil',
    tags: ['Ferramentas', 'Vizinhança', 'Aluguel'],
    image: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&q=80&w=800',
    requirements: ['Ferramentas em bom estado', 'Contrato de responsabilidade'],
    steps: ['Liste o que você tem', 'Divulgue no grupo do condomínio/bairro'],
    tips: 'Alugue kits (ex: furadeira + brocas + extensão).'
  },

  // --- OUTRAS IDEIAS RÁPIDAS (LOTE 1) ---
  {
    id: 'cuidador-idosos',
    title: 'Cuidador de Idosos (Folguista)',
    shortDescription: 'Cubra folgas de cuidadores nos finais de semana.',
    fullDescription: 'Muitas famílias precisam de ajuda nos fins de semana. Curso de cuidador é essencial.',
    category: 'Serviços',
    cost: 'Médio',
    costValue: 'R$ 400 (curso)',
    profit: 'R$ 150 - R$ 300/plantão',
    difficulty: 'Difícil',
    tags: ['Saúde', 'Serviços', 'Responsabilidade'],
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
    requirements: ['Curso de cuidador', 'Paciência', 'Força física'],
    steps: ['Faça o curso', 'Cadastre-se em agências de home care'],
    tips: 'Tenha referências verificáveis.'
  },
  {
    id: 'dj-festas',
    title: 'DJ para Festas',
    shortDescription: 'Toque música em aniversários e pequenos eventos.',
    fullDescription: 'Se você ama música e tem um notebook, pode animar festas pequenas.',
    category: 'Serviços',
    cost: 'Médio',
    costValue: 'R$ 500 (controladora)',
    profit: 'R$ 300 - R$ 1.000/evento',
    difficulty: 'Médio',
    tags: ['Música', 'Eventos', 'Noturno'],
    image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=800',
    requirements: ['Notebook', 'Controladora DJ básica', 'Caixa de som (opcional)'],
    steps: ['Aprenda a mixar (VirtualDJ)', 'Monte playlists para cada estilo'],
    tips: 'Seja eclético, toque o que o público pede.'
  },
  {
    id: 'fotografia-eventos',
    title: 'Fotografia de Eventos',
    shortDescription: 'Fotografe aniversários infantis e batizados.',
    fullDescription: 'Comece com eventos menores. Um bom olhar é mais importante que a câmera mais cara no início.',
    category: 'Criativo',
    cost: 'Alto',
    costValue: 'R$ 2.000 (câmera)',
    profit: 'R$ 400 - R$ 1.500/evento',
    difficulty: 'Médio',
    tags: ['Fotografia', 'Eventos', 'Criativo'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    requirements: ['Câmera DSLR ou Mirrorless', 'Edição (Lightroom)'],
    steps: ['Monte portfólio gratuito', 'Ofereça pacotes de horas'],
    tips: 'Entregue uma prévia das fotos no dia seguinte.'
  },
  {
    id: 'costura-reparos',
    title: 'Costura e Reparos',
    shortDescription: 'Faça bainhas, ajustes e consertos de roupas.',
    fullDescription: 'Serviço essencial. Fazer barra de calça e trocar zíper são os pedidos mais comuns.',
    category: 'Serviços',
    cost: 'Médio',
    costValue: 'R$ 800 (máquina)',
    profit: 'R$ 1.000 - R$ 3.000',
    difficulty: 'Médio',
    tags: ['Manual', 'Moda', 'Serviços'],
    image: 'https://images.unsplash.com/photo-1596906232349-14421b369c27?auto=format&fit=crop&q=80&w=800',
    requirements: ['Máquina de costura', 'Linhas e agulhas'],
    steps: ['Aprenda ajustes básicos', 'Coloque placa no portão'],
    tips: 'Parceria com lojas de roupa traz muito cliente.'
  },
  {
    id: 'passadeira',
    title: 'Passadeira de Roupas',
    shortDescription: 'Passe roupas na casa do cliente ou na sua.',
    fullDescription: 'Muitas pessoas odeiam passar roupa. Cobre por cesto ou por hora.',
    category: 'Serviços',
    cost: 'Baixo',
    costValue: 'R$ 100 (ferro bom)',
    profit: 'R$ 80 - R$ 150/dia',
    difficulty: 'Fácil',
    tags: ['Serviços', 'Casa', 'Manual'],
    image: 'https://images.unsplash.com/photo-1489278353717-f649928ceafa?auto=format&fit=crop&q=80&w=800',
    requirements: ['Ferro a vapor', 'Tábua de passar'],
    steps: ['Divulgue para vizinhos', 'Estabeleça preço por peça ou cesto'],
    tips: 'Entregue as roupas em cabides ou dobradas perfeitamente.'
  },
  {
    id: 'narracao',
    title: 'Narração de Livros/Vídeos',
    shortDescription: 'Use sua voz para gravar locuções.',
    fullDescription: 'Se você tem boa dicção, venda sua voz para vídeos do YouTube, comerciais ou audiolivros.',
    category: 'Online',
    cost: 'Médio',
    costValue: 'R$ 300 (mic)',
    profit: 'R$ 50 - R$ 300 por áudio',
    difficulty: 'Médio',
    tags: ['Voz', 'Online', 'Criativo'],
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    requirements: ['Microfone USB de qualidade', 'Local silencioso'],
    steps: ['Grave demos variados', 'Cadastre em sites de locução'],
    tips: 'Aprenda a editar e limpar o áudio (Audacity).'
  },
  {
    id: 'print-on-demand',
    title: 'Camisetas sob Demanda',
    shortDescription: 'Crie estampas e venda camisetas sem estoque.',
    fullDescription: 'Use sites como Montink ou Reserva INK. Você cria a arte, eles produzem e enviam. Você ganha comissão.',
    category: 'Online',
    cost: 'Baixo',
    costValue: 'R$ 0',
    profit: 'R$ 500 - R$ 2.000',
    difficulty: 'Médio',
    tags: ['Vendas', 'Online', 'Design'],
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=800',
    requirements: ['Criatividade para estampas', 'Divulgação'],
    steps: ['Crie artes no Canva/Photoshop', 'Suba na plataforma', 'Divulgue a loja'],
    tips: 'Estampas de nichos (ex: programadores, gatos, café) vendem mais.'
  }
];

// Gerar mais ideias programaticamente para atingir volume, mas mantendo qualidade
const generateMoreIdeas = (): Idea[] => {
  const list: Idea[] = [
    {
      id: 'limpeza-pos-obra',
      title: 'Limpeza Pós-Obra',
      category: 'Serviços',
      shortDescription: 'Limpeza pesada detalhada após reformas.',
      fullDescription: 'Remoção de tinta, gesso e poeira fina. Exige detalhismo e equipamentos de proteção.',
      cost: 'Médio', costValue: 'R$ 200', profit: 'R$ 300 - R$ 800/dia', difficulty: 'Difícil',
      tags: ['Limpeza', 'Pesado', 'Serviços'], image: 'https://images.unsplash.com/photo-1581578731117-10d52143b1e8?auto=format&fit=crop&q=80&w=800',
      requirements: ['Produtos ácidos/alcalinos', 'EPIs'], steps: ['Visite o local para orçar', 'Leve ajudante'], tips: 'Proteja pisos delicados.'
    },
    {
      id: 'personal-chef',
      title: 'Personal Chef',
      category: 'Serviços',
      shortDescription: 'Cozinhe jantares especiais na casa do cliente.',
      fullDescription: 'Para ocasiões românticas ou pequenas reuniões. Você compra, cozinha e limpa.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 300 - R$ 800/jantar', difficulty: 'Difícil',
      tags: ['Gastronomia', 'Luxo', 'Serviços'], image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      requirements: ['Técnica culinária', 'Utensílios próprios'], steps: ['Monte menus fechados', 'Divulgue fotos de pratos'], tips: 'A apresentação do prato é tudo.'
    },
    {
      id: 'traducao-textos',
      title: 'Tradução de Textos',
      category: 'Online',
      shortDescription: 'Traduza artigos, e-mails e documentos.',
      fullDescription: 'Se você domina outro idioma, ofereça traduções. Inglês, Espanhol e Mandarim são muito buscados.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 500 - R$ 2.000', difficulty: 'Médio',
      tags: ['Idiomas', 'Online', 'Freelancer'], image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
      requirements: ['Fluência', 'Boa escrita'], steps: ['Sites de freela', 'Prospecção direta'], tips: 'Tradução técnica paga mais.'
    },
    {
      id: 'consultoria-linkedin',
      title: 'Consultoria de LinkedIn',
      category: 'Online',
      shortDescription: 'Melhore o perfil profissional de outras pessoas.',
      fullDescription: 'Ajude pessoas a serem encontradas por recrutadores otimizando o perfil delas.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 100 - R$ 300/perfil', difficulty: 'Médio',
      tags: ['Carreira', 'Online', 'Consultoria'], image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      requirements: ['Conhecimento da plataforma'], steps: ['Analise perfis', 'Reescreva resumos'], tips: 'Ofereça foto profissional junto.'
    },
    {
      id: 'criacao-curriculos',
      title: 'Criação de Currículos',
      category: 'Online',
      shortDescription: 'Design e revisão de currículos atrativos.',
      fullDescription: 'Use modelos modernos para destacar candidatos no mercado de trabalho.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 50 - R$ 150/cv', difficulty: 'Fácil',
      tags: ['Design', 'Carreira', 'Online'], image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
      requirements: ['Canva/Word'], steps: ['Tenha modelos prontos', 'Entreviste o cliente'], tips: 'Foque em resultados e palavras-chave.'
    },
    {
      id: 'animador-festas',
      title: 'Animador de Festas',
      category: 'Serviços',
      shortDescription: 'Brincadeiras e recreação para festas infantis.',
      fullDescription: 'Crianças precisam de entretenimento. Organize gincanas, pintura facial e escultura de balões.',
      cost: 'Baixo', costValue: 'R$ 100 (materiais)', profit: 'R$ 200 - R$ 500/festa', difficulty: 'Médio',
      tags: ['Eventos', 'Crianças', 'Diversão'], image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&q=80&w=800',
      requirements: ['Energia', 'Materiais lúdicos'], steps: ['Monte um roteiro', 'Tenha fantasia (opcional)'], tips: 'Conquiste as crianças e os pais te contratam sempre.'
    },
    {
      id: 'limpeza-piscina',
      title: 'Limpeza de Piscina',
      category: 'Serviços',
      shortDescription: 'Manutenção e tratamento químico de piscinas.',
      fullDescription: 'Serviço recorrente (semanal). Exige conhecimento químico básico.',
      cost: 'Médio', costValue: 'R$ 300', profit: 'R$ 150 - R$ 300/mensal por cliente', difficulty: 'Médio',
      tags: ['Manutenção', 'Água', 'Serviços'], image: 'https://images.unsplash.com/photo-1576013551627-0cc20b468848?auto=format&fit=crop&q=80&w=800',
      requirements: ['Peneira, aspirador', 'Produtos químicos'], steps: ['Curso de piscineiro', 'Kit de medição de pH'], tips: 'Venda os produtos químicos também.'
    },
    {
      id: 'digitador',
      title: 'Digitador',
      category: 'Online',
      shortDescription: 'Digitação de documentos e dados.',
      fullDescription: 'Digitalizar documentos físicos ou preencher planilhas.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 500 - R$ 1.500', difficulty: 'Fácil',
      tags: ['Freelancer', 'Básico', 'Online'], image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800',
      requirements: ['PC'], steps: ['Sites de freela'], tips: 'Rapidez é essencial.'
    },
    {
      id: 'declutter',
      title: 'Venda de Coisas Usadas',
      category: 'Vendas',
      shortDescription: 'Venda móveis e objetos que não usa mais.',
      fullDescription: 'Faça dinheiro rápido esvaziando a casa. Móveis, eletrônicos, livros.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'Variável', difficulty: 'Fácil',
      tags: ['Vendas', 'Rápido', 'Casa'], image: 'https://images.unsplash.com/photo-1524813686514-a5756c97759e?auto=format&fit=crop&q=80&w=800',
      requirements: ['Itens parados'], steps: ['Limpe e fotografe', 'OLX/Facebook'], tips: 'Seja honesto sobre defeitos.'
    },
    {
      id: 'criador-sticker',
      title: 'Criador de Stickers/Figurinhas',
      category: 'Criativo',
      shortDescription: 'Crie pacotes de figurinhas personalizados para empresas.',
      fullDescription: 'Empresas usam stickers no WhatsApp para atendimento. Crie artes com a marca delas.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 50 - R$ 100/pacote', difficulty: 'Fácil',
      tags: ['Design', 'WhatsApp', 'Criativo'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      requirements: ['Apps de criação'], steps: ['Faça demos', 'Ofereça para lojas'], tips: 'Figurinhas animadas valem mais.'
    },
    {
      id: 'motorista-app',
      title: 'Motorista de Aplicativo',
      category: 'Serviços',
      shortDescription: 'Dirija para Uber/99.',
      fullDescription: 'Renda imediata se você tem carro e CNH. Horário flexível.',
      cost: 'Médio', costValue: 'Combustível/Aluguel', profit: 'R$ 2.000 - R$ 5.000', difficulty: 'Médio',
      tags: ['Transporte', 'Rápido', 'Serviços'], image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800',
      requirements: ['CNH EAR', 'Carro (ou alugado)'], steps: ['Cadastro no app', 'Vistoria'], tips: 'Dirija em horários de pico.'
    },
    {
      id: 'entregador-app',
      title: 'Entregador de App',
      category: 'Serviços',
      shortDescription: 'Entregue comida ou pacotes (Moto/Bike).',
      fullDescription: 'iFood, Rappi, Uber Flash. Pode começar de bicicleta.',
      cost: 'Baixo', costValue: 'Bag', profit: 'R$ 1.500 - R$ 3.000', difficulty: 'Médio',
      tags: ['Transporte', 'Rápido', 'Serviços'], image: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&q=80&w=800',
      requirements: ['Veículo', 'Celular'], steps: ['Cadastro', 'Bag térmica'], tips: 'Fins de semana pagam melhor.'
    },
    {
      id: 'hospedagem-malas',
      title: 'Guardador de Malas',
      category: 'Aluguel',
      shortDescription: 'Guarde malas de turistas na sua casa.',
      fullDescription: 'Apps como LuggageHero permitem que você guarde malas de turistas por algumas horas.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 20 - R$ 50/mala', difficulty: 'Fácil',
      tags: ['Aluguel', 'Turismo', 'Fácil'], image: 'https://images.unsplash.com/photo-1565514020176-db99c857e4d9?auto=format&fit=crop&q=80&w=800',
      requirements: ['Espaço seguro'], steps: ['Cadastro no app', 'Localização turística ajuda'], tips: 'Segurança é prioridade.'
    },
    {
      id: 'aluguel-garagem',
      title: 'Aluguel de Garagem',
      category: 'Aluguel',
      shortDescription: 'Alugue sua vaga de garagem vazia.',
      fullDescription: 'Se você não tem carro ou sobra vaga, alugue para vizinhos ou trabalhadores da região.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 150 - R$ 400/mês', difficulty: 'Fácil',
      tags: ['Aluguel', 'Passiva', 'Casa'], image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800',
      requirements: ['Vaga disponível', 'Controle remoto extra'], steps: ['Anuncie no prédio'], tips: 'Contrato simples evita dor de cabeça.'
    },
    {
      id: 'pesquisas-online',
      title: 'Responder Pesquisas',
      category: 'Online',
      shortDescription: 'Responda pesquisas de mercado remuneradas.',
      fullDescription: 'Não vai te deixar rico, mas é uma renda extra fácil no tempo livre. Sites como Toluna e Google Opinion Rewards.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 50 - R$ 200/mês', difficulty: 'Fácil',
      tags: ['Online', 'Extra', 'Fácil'], image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      requirements: ['Celular'], steps: ['Cadastro em vários sites'], tips: 'Seja honesto para não ser banido.'
    },
    {
      id: 'cliente-oculto',
      title: 'Cliente Oculto',
      category: 'Serviços',
      shortDescription: 'Avalie o atendimento de lojas e restaurantes.',
      fullDescription: 'Você é pago para visitar um local, consumir (reembolsado) e avaliar a experiência.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 50 - R$ 150 + reembolso', difficulty: 'Fácil',
      tags: ['Avaliação', 'Serviços', 'Experiência'], image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      requirements: ['Atenção aos detalhes', 'Smartphone'], steps: ['Cadastro em agências'], tips: 'Relatórios detalhados garantem mais jobs.'
    },
    {
      id: 'venda-fotos',
      title: 'Venda de Fotos (Stock)',
      category: 'Online',
      shortDescription: 'Venda suas fotos para bancos de imagem.',
      fullDescription: 'Shutterstock, Adobe Stock. Fotos de paisagens, comida, escritório.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'Passiva (Royalties)', difficulty: 'Médio',
      tags: ['Fotografia', 'Online', 'Passiva'], image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
      requirements: ['Câmera ou Celular bom'], steps: ['Upload nas plataformas'], tips: 'Fotos com pessoas (com autorização) vendem mais.'
    },
    {
      id: 'gestao-comunidade',
      title: 'Gestão de Comunidades',
      category: 'Online',
      shortDescription: 'Modere grupos de Telegram, Discord ou Facebook.',
      fullDescription: 'Cursos e influencers precisam de alguém para manter a ordem e responder dúvidas nos grupos.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 500 - R$ 2.000', difficulty: 'Médio',
      tags: ['Social', 'Online', 'Comunidade'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      requirements: ['Boa comunicação', 'Paciência'], steps: ['Ofereça a infoprodutores'], tips: 'Engaje a comunidade, não seja só um robô.'
    },
    {
      id: 'crepe-suico',
      title: 'Crepe Suíço',
      category: 'Vendas',
      shortDescription: 'Venda crepes no palito em eventos ou na rua.',
      fullDescription: 'Máquina de crepe é barata e o produto tem alta margem. Massa simples e recheios variados.',
      cost: 'Médio', costValue: 'R$ 300 (máquina)', profit: 'R$ 1.000 - R$ 3.000', difficulty: 'Fácil',
      tags: ['Alimentação', 'Rua', 'Vendas'], image: 'https://images.unsplash.com/photo-1629853321590-7d72b22d1c7d?auto=format&fit=crop&q=80&w=800',
      requirements: ['Máquina de crepe', 'Extensão'], steps: ['Teste a massa para ficar crocante', 'Ponto movimentado'], tips: 'Crepe de chocolate é o campeão.'
    },
    {
      id: 'pipoca-gourmet',
      title: 'Pipoca Gourmet',
      category: 'Vendas',
      shortDescription: 'Pipocas doces coloridas e saborizadas.',
      fullDescription: 'Leite ninho, nutella, caramelo. Duram dias embaladas e são ótimas lembrancinhas.',
      cost: 'Baixo', costValue: 'R$ 50', profit: 'R$ 500 - R$ 1.500', difficulty: 'Fácil',
      tags: ['Doces', 'Vendas', 'Fácil'], image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=800',
      requirements: ['Milho especial (mushroom)', 'Ingredientes'], steps: ['Aprenda a caramelizar', 'Embalagem hermética'], tips: 'Crocância é o segredo.'
    },
     {
      id: 'limpeza-hardware',
      title: 'Limpeza de PC Gamer',
      category: 'Tecnologia',
      shortDescription: 'Limpeza interna e cable management de PCs.',
      fullDescription: 'Gamers investem caro e têm medo de limpar. Ofereça limpeza segura e organização de cabos.',
      cost: 'Baixo', costValue: 'R$ 50 (ar comprimido/pincel)', profit: 'R$ 100 - R$ 200/pc', difficulty: 'Médio',
      tags: ['Tecnologia', 'Gamer', 'Manutenção'], image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
      requirements: ['Pincéis antiestáticos', 'Pasta térmica'], steps: ['Divulgue em grupos de jogos'], tips: 'Tire fotos do antes (poeira) e depois (brilhando).'
    },
    {
      id: 'alongamento-unhas',
      title: 'Alongamento de Unhas',
      category: 'Beleza',
      shortDescription: 'Aplicação de fibra de vidro ou gel.',
      fullDescription: 'Ticket médio muito maior que manicure comum. Exige técnica apurada.',
      cost: 'Médio', costValue: 'R$ 500 (kit)', profit: 'R$ 2.000 - R$ 5.000', difficulty: 'Difícil',
      tags: ['Beleza', 'Alto Retorno', 'Serviços'], image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
      requirements: ['Cabine UV', 'Motor', 'Géis'], steps: ['Curso especializado', 'Treino intenso'], tips: 'Manutenção mensal garante renda fixa.'
    },
    {
      id: 'drenagem-linfatica',
      title: 'Drenagem Linfática',
      category: 'Beleza',
      shortDescription: 'Massagem para reduzir inchaço e medidas.',
      fullDescription: 'Muito procurada pós-cirurgia ou para estética. Pode atender a domicílio.',
      cost: 'Baixo', costValue: 'R$ 100 (cremes)', profit: 'R$ 80 - R$ 150/sessão', difficulty: 'Difícil',
      tags: ['Saúde', 'Beleza', 'Serviços'], image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
      requirements: ['Maca portátil', 'Cremes', 'Conhecimento anatômico'], steps: ['Curso técnico', 'Maca dobrável'], tips: 'Venda pacotes de 10 sessões.'
    },
    {
      id: 'barber-delivery',
      title: 'Barbeiro a Domicílio',
      category: 'Beleza',
      shortDescription: 'Corte de cabelo e barba na casa do cliente.',
      fullDescription: 'Conveniência para quem não quer ir à barbearia. Corte masculino é rápido e recorrente.',
      cost: 'Baixo', costValue: 'R$ 300 (máquina)', profit: 'R$ 1.500 - R$ 4.000', difficulty: 'Médio',
      tags: ['Masculino', 'Beleza', 'Serviços'], image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
      requirements: ['Máquina de corte', 'Tesoura', 'Navalha'], steps: ['Curso de barbeiro', 'Maleta organizada'], tips: 'Mantenha a sujeira sob controle na casa do cliente.'
    },
    {
      id: 'treino-funcional',
      title: 'Personal Trainer (Parque)',
      category: 'Serviços',
      shortDescription: 'Aulas de funcional em parques ou praças.',
      fullDescription: 'Não precisa de academia. Use o peso do corpo e elásticos em locais públicos.',
      cost: 'Baixo', costValue: 'R$ 100 (elásticos)', profit: 'R$ 50 - R$ 150/hora', difficulty: 'Médio',
      tags: ['Saúde', 'Esporte', 'Ao Ar Livre'], image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      requirements: ['Formação Ed. Física (ideal)', 'Cones, corda'], steps: ['Monte grupos pequenos'], tips: 'Aulas em grupo escalam seus ganhos.'
    },
     {
      id: 'mentoria-carreira',
      title: 'Mentoria de Carreira',
      category: 'Educação',
      shortDescription: 'Ajude iniciantes na sua área de atuação.',
      fullDescription: 'Se você é sênior em algo, cobre para orientar quem está começando.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 200 - R$ 1.000/sessão', difficulty: 'Difícil',
      tags: ['Carreira', 'Online', 'Consultoria'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      requirements: ['Experiência comprovada'], steps: ['Defina seu método', 'LinkedIn'], tips: 'Resultados dos alunos são seu marketing.'
    },
    {
      id: 'aula-excel',
      title: 'Aulas de Excel',
      category: 'Educação',
      shortDescription: 'Ensine planilhas para profissionais.',
      fullDescription: 'O mundo corporativo depende de Excel. Ensine PROCV, Tabela Dinâmica e Dashboards.',
      cost: 'Baixo', costValue: 'R$ 0', profit: 'R$ 50 - R$ 150/hora', difficulty: 'Médio',
      tags: ['Tecnologia', 'Educação', 'Online'], image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
      requirements: ['Domínio da ferramenta'], steps: ['Grave pílulas de conhecimento'], tips: 'Resolva problemas reais de empresas.'
    },
    {
      id: 'reforma-moveis',
      title: 'Reforma de Móveis',
      category: 'Criativo',
      shortDescription: 'Restaure ou customize móveis antigos.',
      fullDescription: 'Lixar, pintar e trocar puxadores transforma móveis velhos em peças de design.',
      cost: 'Médio', costValue: 'R$ 200 (tintas)', profit: 'R$ 200 - R$ 1.000/peça', difficulty: 'Médio',
      tags: ['Manual', 'Decoração', 'Criativo'], image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      requirements: ['Lixa, tinta, verniz'], steps: ['Pegue móveis descartados', 'Restaure e venda'], tips: 'Estilo provençal ou industrial vende bem.'
    },
    {
      id: 'sabonete-artesanal',
      title: 'Sabonetes Artesanais',
      category: 'Criativo',
      shortDescription: 'Produza sabonetes cheirosos e decorativos.',
      fullDescription: 'Lembranchinhas perfeitas. Baixo custo de produção e visual encantador.',
      cost: 'Baixo', costValue: 'R$ 150', profit: 'R$ 500 - R$ 2.000', difficulty: 'Fácil',
      tags: ['Artesanato', 'Vendas', 'Fácil'], image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800',
      requirements: ['Glicerina, essência, corante'], steps: ['Derreter, misturar e moldar'], tips: 'Formatos de frutas ou flores chamam atenção.'
    },
    {
      id: 'terrarios',
      title: 'Terrários e Suculentas',
      category: 'Criativo',
      shortDescription: 'Monte mini jardins em potes de vidro.',
      fullDescription: 'Decoração viva que exige pouco cuidado. Ótimo para apartamentos e escritórios.',
      cost: 'Baixo', costValue: 'R$ 100', profit: 'R$ 50 - R$ 200/peça', difficulty: 'Médio',
      tags: ['Plantas', 'Decoração', 'Vendas'], image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=800',
      requirements: ['Vidros, terra, pedras, suculentas'], steps: ['Camadas de drenagem', 'Decoração'], tips: 'Ensine como cuidar na etiqueta.'
    }
  ];

  // Adicionar variantes para preencher volume mantendo relevância
  const variations: Idea[] = [
    { id: 'molho-pimenta', title: 'Molhos de Pimenta Caseiros', category: 'Vendas', shortDescription: 'Molhos especiais para churrasco.', fullDescription: 'Crie blends com pimentas variadas.', cost: 'Baixo', costValue: 'R$ 80', profit: 'Médio', difficulty: 'Fácil', tags: ['Alimentação'], image: 'https://images.unsplash.com/photo-1588613437299-623253b2767c?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'licores', title: 'Licores Caseiros', category: 'Vendas', shortDescription: 'Licores de frutas ou chocolate.', fullDescription: 'Bebidas doces para presentear.', cost: 'Médio', costValue: 'R$ 150', profit: 'Médio', difficulty: 'Médio', tags: ['Bebidas'], image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'antepastos', title: 'Antepastos e Conservas', category: 'Vendas', shortDescription: 'Berenjela, abobrinha e picles.', fullDescription: 'Conservas duram muito e agregam valor.', cost: 'Baixo', costValue: 'R$ 100', profit: 'Médio', difficulty: 'Fácil', tags: ['Alimentação'], image: 'https://images.unsplash.com/photo-1517651034440-e22247fb426f?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'espetinhos', title: 'Espetinhos (Churrasquinho)', category: 'Vendas', shortDescription: 'Venda de espetinhos prontos.', fullDescription: 'Clássico de rua com retorno rápido.', cost: 'Médio', costValue: 'R$ 300', profit: 'Alto', difficulty: 'Fácil', tags: ['Alimentação'], image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'acai-copo', title: 'Açaí no Copo', category: 'Vendas', shortDescription: 'Montagem de copos de açaí.', fullDescription: 'Sucesso absoluto no calor.', cost: 'Médio', costValue: 'R$ 500', profit: 'Alto', difficulty: 'Fácil', tags: ['Alimentação'], image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'salada-fruta', title: 'Salada de Frutas', category: 'Vendas', shortDescription: 'Potes de frutas frescas.', fullDescription: 'Opção saudável de lanche rápido.', cost: 'Baixo', costValue: 'R$ 50', profit: 'Médio', difficulty: 'Fácil', tags: ['Saúde'], image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'churros', title: 'Churros Gourmet', category: 'Vendas', shortDescription: 'Churros com recheios variados.', fullDescription: 'Doce amado por todos.', cost: 'Médio', costValue: 'R$ 400', profit: 'Alto', difficulty: 'Médio', tags: ['Doces'], image: 'https://images.unsplash.com/photo-1624373400827-047f3b603312?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'brownie', title: 'Brownies Recheados', category: 'Vendas', shortDescription: 'Brownies para festas ou rua.', fullDescription: 'Fáceis de transportar e deliciosos.', cost: 'Baixo', costValue: 'R$ 80', profit: 'Médio', difficulty: 'Fácil', tags: ['Doces'], image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'cookies', title: 'Cookies Americanos', category: 'Vendas', shortDescription: 'Biscoitos com gotas de chocolate.', fullDescription: 'Crocantes por fora, macios por dentro.', cost: 'Baixo', costValue: 'R$ 60', profit: 'Médio', difficulty: 'Fácil', tags: ['Doces'], image: 'https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'panetone', title: 'Panetones Artesanais', category: 'Vendas', shortDescription: 'Venda sazonal de natal.', fullDescription: 'Faturamento alto no fim de ano.', cost: 'Médio', costValue: 'R$ 200', profit: 'Alto', difficulty: 'Médio', tags: ['Sazonal'], image: 'https://images.unsplash.com/photo-1543255006-d6395b6f1171?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'ovos-pascoa', title: 'Ovos de Páscoa de Colher', category: 'Vendas', shortDescription: 'Venda sazonal de páscoa.', fullDescription: 'Margem de lucro altíssima.', cost: 'Médio', costValue: 'R$ 300', profit: 'Alto', difficulty: 'Médio', tags: ['Sazonal'], image: 'https://images.unsplash.com/photo-1522036669866-932f22b7245b?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'copywriter', title: 'Copywriter', category: 'Online', shortDescription: 'Escreva textos que vendem.', fullDescription: 'Criação de cartas de vendas e anúncios.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Alto', difficulty: 'Difícil', tags: ['Marketing'], image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'thumbmaker', title: 'Designer de Thumbnails', category: 'Online', shortDescription: 'Capas para vídeos do YouTube.', fullDescription: 'Youtubers precisam de capas chamativas.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Design'], image: 'https://images.unsplash.com/photo-1626785774573-4b79931434f3?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'legendagem', title: 'Legendador de Vídeos', category: 'Online', shortDescription: 'Crie legendas para acessibilidade.', fullDescription: 'Essencial para redes sociais.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Fácil', tags: ['Vídeo'], image: 'https://images.unsplash.com/photo-1574717432707-c257197a9165?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'data-entry', title: 'Data Entry (Digitação)', category: 'Online', shortDescription: 'Insira dados em sistemas.', fullDescription: 'Trabalho repetitivo mas simples.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Baixo', difficulty: 'Fácil', tags: ['Administrativo'], image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'suporte-chat', title: 'Suporte via Chat', category: 'Online', shortDescription: 'Atendimento ao cliente online.', fullDescription: 'Responda dúvidas em e-commerces.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Fácil', tags: ['Atendimento'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'dropshipping', title: 'Dropshipping', category: 'Online', shortDescription: 'Venda sem estoque.', fullDescription: 'Intermedeie vendas de fornecedores.', cost: 'Médio', costValue: 'R$ 500', profit: 'Alto', difficulty: 'Difícil', tags: ['Vendas'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'ebooks', title: 'Criação de E-books', category: 'Online', shortDescription: 'Venda livros digitais.', fullDescription: 'Escreva sobre o que sabe.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Passiva', difficulty: 'Médio', tags: ['Infoproduto'], image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'podcast-edit', title: 'Editor de Podcast', category: 'Online', shortDescription: 'Edite áudios para podcasts.', fullDescription: 'Corte erros e melhore o som.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Áudio'], image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'logo-design', title: 'Criação de Logos', category: 'Online', shortDescription: 'Logotipos para empresas.', fullDescription: 'Identidade visual básica.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Design'], image: 'https://images.unsplash.com/photo-1626785774573-4b79931434f3?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'baba', title: 'Babá (Babysitter)', category: 'Serviços', shortDescription: 'Cuide de crianças por horas.', fullDescription: 'Pais precisam de folga à noite.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Cuidado'], image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'transporte-escolar', title: 'Transporte Escolar', category: 'Serviços', shortDescription: 'Leve crianças para a escola.', fullDescription: 'Exige veículo adequado e licença.', cost: 'Alto', costValue: 'Veículo', profit: 'Alto', difficulty: 'Difícil', tags: ['Transporte'], image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'montador-moveis', title: 'Montador de Móveis', category: 'Serviços', shortDescription: 'Monte móveis comprados online.', fullDescription: 'Serviço muito requisitado.', cost: 'Médio', costValue: 'R$ 200', profit: 'Médio', difficulty: 'Médio', tags: ['Manual'], image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'penteados', title: 'Penteados', category: 'Beleza', shortDescription: 'Penteados para festas.', fullDescription: 'Tranças e coques.', cost: 'Baixo', costValue: 'R$ 50', profit: 'Médio', difficulty: 'Médio', tags: ['Cabelo'], image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'massagem', title: 'Massagem Relaxante', category: 'Beleza', shortDescription: 'Alivie o estresse dos clientes.', fullDescription: 'Massagem básica relaxante.', cost: 'Baixo', costValue: 'R$ 100', profit: 'Médio', difficulty: 'Médio', tags: ['Saúde'], image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'consultoria-imagem', title: 'Consultoria de Imagem', category: 'Beleza', shortDescription: 'Ajude a melhorar o estilo.', fullDescription: 'Coloração pessoal e estilo.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Alto', difficulty: 'Difícil', tags: ['Moda'], image: 'https://images.unsplash.com/photo-1487412947132-28c5d747c800?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'yoga-online', title: 'Yoga Online', category: 'Educação', shortDescription: 'Aulas de Yoga via Zoom.', fullDescription: 'Bem-estar em casa.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Saúde'], image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'redacao-enem', title: 'Correção de Redação', category: 'Educação', shortDescription: 'Corrija textos para o ENEM.', fullDescription: 'Ajude vestibulandos.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Difícil', tags: ['Ensino'], image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'aula-danca', title: 'Aulas de Dança', category: 'Educação', shortDescription: 'Ensine a dançar.', fullDescription: 'Forró, samba ou zumba.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Arte'], image: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'aluguel-terno', title: 'Aluguel de Ternos', category: 'Aluguel', shortDescription: 'Alugue roupas formais.', fullDescription: 'Ternos parados no armário.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Fácil', tags: ['Moda'], image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' },
    { id: 'config-wifi', title: 'Configuração Wi-Fi', category: 'Tecnologia', shortDescription: 'Melhore o sinal de internet.', fullDescription: 'Configure roteadores e repetidores.', cost: 'Baixo', costValue: 'R$ 0', profit: 'Médio', difficulty: 'Médio', tags: ['Técnico'], image: 'https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=800', requirements: [], steps: [], tips: '' }
  ];

  return [...list, ...variations];
}

export const ideas: Idea[] = [
  ...baseIdeas,
  ...extraIdeas,
  ...generateMoreIdeas()
];
