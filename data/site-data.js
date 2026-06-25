const researchLines = [
  {
    title: "Regulação pós-transcricional em células-tronco",
    tag: "RNA · Ribo-seq · diferenciação",
    text: "Estudo de mecanismos pós-transcricionais que controlam processamento, estabilidade e tradução de mRNAs durante o comprometimento celular, com foco em RBPs, lncRNAs e diferenciação cardiomiogênica.",
    link: "pesquisa-regulacao-pos-transcricional.html"
  },
  {
    title: "Engenharia de tecidos e vesículas extracelulares",
    tag: "Secretoma · regeneração",
    text: "Investigação de células-tronco adultas, secretoma e vesículas extracelulares no reparo tecidual, buscando biomarcadores e estratégias terapêuticas baseadas em atividade parácrina."
  },
  {
    title: "Tecnologias 3D em medicina regenerativa",
    tag: "Bioimpressão · biomateriais",
    text: "Uso de células-tronco, biomateriais, impressão 3D e bioimpressão para desenvolver substitutos teciduais e modelos de tecidos para pesquisa e medicina personalizada."
  },
  {
    title: "Doenças genéticas raras",
    tag: "iPSC · modelos in vitro",
    text: "Modelagem molecular de doenças raras utilizando células-tronco humanas pluripotentes e adultas, edição genética, triagem de fármacos e modelos biológicos para investigação terapêutica."
  },
  {
    title: "Ensaios alternativos, citotoxicidade e nanotecnologia",
    tag: "Métodos alternativos · toxicologia",
    text: "Desenvolvimento de modelos in vitro com maior relevância humana para avaliação de toxicidade, triagem de compostos, nanomateriais e produtos biotecnológicos."
  },
  {
    title: "Poluentes ambientais e modelos de obesidade",
    tag: "Obesogênicos · adipogênese",
    text: "Estudo do efeito de contaminantes ambientais no processo de diferenciação adipogênica e desenvolvimento de estratégias de triagem in silico e in vitro."
  }
];

const publications = [
  {year: 2025, title: "Thyroid hormones contribute to JAK/STAT pathway abnormal activation promoting T-cell lymphoma dissemination", journal: "Blood Advances", doi: "10.1182/bloodadvances.2024015332"},
  {year: 2025, title: "Construction of a proximity labeling vector to identify protein-protein interactions in human stem cells", journal: "PLOS ONE", doi: "10.1371/journal.pone.0324779"},
  {year: 2025, title: "Itinerário dos pacientes com doenças neurológicas raras até o diagnóstico e tratamento", journal: "Itinerarius Reflectionis", doi: "10.69843/rir.v21i1.76986"},
  {year: 2025, title: "The Role of Long Non-Coding RNAs in Human Endoderm Differentiation", journal: "Non-Coding RNA", doi: "10.3390/ncrna11020029"},
  {year: 2025, title: "Post-transcriptional regulation in early cell fate commitment of germ layers", journal: "BMC Genomics", doi: "10.1186/s12864-025-11400-8"},
  {year: 2024, title: "Adipo-on-chip: a microphysiological system to culture human mesenchymal stem cells with improved adipogenic differentiation", journal: "In Vitro Models", doi: "10.1007/s44164-024-00076-1"},
  {year: 2024, title: "Cardiac Development Long Non-Coding RNA (CARDEL) Is Activated during Human Heart Development and Contributes to Cardiac Specification and Homeostasis", journal: "Cells", doi: "10.3390/cells13121050"},
  {year: 2024, title: "Alternative polyadenylation and dynamic 3′-UTR length is associated with polysome recruitment throughout cardiomyogenic differentiation", journal: "Frontiers in Molecular Biosciences", doi: "10.3389/fmolb.2024.1336336"},
  {year: 2024, title: "Unveiling Polysomal Long Non-Coding RNA Expression on the First Day of Adipogenesis and Osteogenesis", journal: "International Journal of Molecular Sciences", doi: "10.3390/ijms25042013"},
  {year: 2023, title: "miR-6087 Might Regulate Cell Cycle-Related mRNAs During Cardiomyogenesis of hESCs", journal: "Bioinformatics and Biology Insights", doi: "10.1177/11779322231161918"},
  {year: 2023, title: "Human pluripotent stem cell-derived extracellular vesicles: From now to the future", journal: "World Journal of Stem Cells", doi: "10.4252/wjsc.v15.i5.453"},
  {year: 2023, title: "Alternative Methods as Tools for Obesity Research: In Vitro and In Silico Approaches", journal: "Life", doi: "10.3390/life13010108"}
];

const leaders = [
  {
    name: "Bruno Dallagiovanna Muniz",
    title: "Pesquisador",
    area: "Regulação pós-transcricional da expressão gênica em células-tronco",
    bio: "Pesquisador Titular da Fundação Oswaldo Cruz, com atuação em Biologia Molecular, regulação pós-transcricional da expressão gênica, proteínas de ligação ao RNA, biologia básica de células-tronco e diferenciação celular.",
    image: "",
    lattes: "",
    scholar: ""
  },
  {
    name: "Patrícia Shigunov",
    title: "Pesquisadora",
    area: "Doenças genéticas raras e modelos celulares humanos",
    bio: "Desenvolve pesquisas com células-tronco humanas e modelos in vitro voltados ao estudo molecular de doenças genéticas raras, diferenciação celular e desenvolvimento de ferramentas com potencial translacional.",
    image: "",
    lattes: "",
    scholar: ""
  },
  {
    name: "Marco Augusto Stimamiglio",
    title: "Pesquisador",
    area: "Medicina regenerativa, vesículas extracelulares e engenharia de tecidos",
    bio: "Investiga células-tronco adultas, secretoma, vesículas extracelulares e estratégias de engenharia de tecidos aplicadas à regeneração tecidual e ao desenvolvimento de modelos biológicos.",
    image: "",
    lattes: "",
    scholar: ""
  },
  {
    name: "Alejandro Correa",
    title: "Pesquisador",
    area: "Biologia celular, biomateriais e modelos in vitro",
    bio: "Atua em projetos relacionados à biologia celular, medicina regenerativa, biomateriais, modelos experimentais in vitro e desenvolvimento de abordagens aplicadas à saúde humana.",
    image: "",
    lattes: "",
    scholar: ""
  },
  {
    name: "Alessandra Melo de Aguiar",
    title: "Pesquisadora",
    area: "Citotoxicidade, métodos alternativos e poluentes ambientais",
    bio: "Atua em estudos voltados ao desenvolvimento de ensaios alternativos ao uso de animais, avaliação de citotoxicidade, nanotecnologia e efeitos de compostos ambientais em modelos celulares.",
    image: "",
    lattes: "",
    scholar: ""
  }
];

const team = [
  {name:"Crisciele Kuligovski", role:"Lab manager", area:"Mestre em Saúde"},
  {name:"Humberto Doriguêtto Gravina", role:"Pós-doc", area:"Biologia Molecular, Bioquímica e Imunologia"},
  {name:"Isabelle Leticia Zaboroski", role:"Pós-doc", area:"Doenças genéticas raras"},
  {name:"Maria Julia Barison", role:"Pós-doc", area:"Biologia Celular, Biologia Molecular, Bioquímica e Medicina Regenerativa"},
  {name:"Maiara Vicentini", role:"Pós-doc", area:"Isolamento de vesículas / Medicina Regenerativa"},
  {name:"Rubens Gomes Júnior", role:"Pós-doc", area:"Regulação pós-transcricional na cardiomiogênese"},
  {name:"Vivien Patricia Garbin", role:"Pós-doc", area:"Medicina Regenerativa"},

  {name:"Annanda Lyra Ribeiro", role:"Doutoranda", area:"Regulação pós-transcricional de células-tronco pluripotentes e lncRNAs"},
  {name:"Evelin Brandão da Silva", role:"Doutoranda", area:"Doenças genéticas raras"},
  {name:"Juliana Pamplona", role:"Doutoranda", area:"Citotoxicidade"},
  {name:"Rodrigo Perez Lucas", role:"Doutorando", area:"Engenharia de tecidos e terapia celular"},
  {name:"Rhaíza Stella Vieira França", role:"Doutoranda", area:"Biologia Molecular"},
  {name:"Ronaldo Figueira de Oliveira", role:"Doutorando", area:"Medicina Regenerativa"},

  {name:"Bruna Follador Bordim", role:"Mestranda", area:"Citotoxicidade"},
  {name:"Gabriela Maria da Costa Ferreira", role:"Mestranda", area:"Medicina Regenerativa"},
  {name:"Isabella Aguiar Dantas", role:"Mestranda", area:"Biologia Molecular"},
  {name:"Julia Marques", role:"Mestranda", area:"Medicina Regenerativa"},
  {name:"Luísa Lencioni de Mendonça", role:"Mestranda", area:"Medicina Regenerativa / Bioimpressão de Células-Tronco"},
  {name:"Rafaela Martins", role:"Mestranda", area:"Medicina Regenerativa"},
  {name:"Sandra Christina Kolodziejski", role:"Mestranda", area:"Toxicologia Celular"},

  {name:"Alessandra Conti Gomes de Souza", role:"Apoio técnico de projeto", area:"Citotoxicidade"},
  {name:"Giovanna Nazaré de Barros Prezia", role:"Apoio técnico de projeto", area:"Bioinformática"},
  {name:"Luana Pescke Soares", role:"Apoio técnico de projeto", area:"Engenharia genética e cultivo de células e fungos"},
  {name:"Mateus Teixeira da Rocha", role:"Apoio técnico de projeto", area:"Medicina Regenerativa"},
  {name:"Letícia Bassani Bonato", role:"Apoio técnico de projeto", area:"Medicina Regenerativa"},

  {name:"Jhenifer Moreira Pietrobelli", role:"Iniciação científica", area:"Medicina Regenerativa"},
  {name:"José Henrique Rosa Silva", role:"Iniciação científica", area:"Genética humana e biologia molecular"},
  {name:"Nataly Barbieri Stunff", role:"Iniciação científica", area:"Genética humana e biologia molecular"},
  {name:"Ana Claudia Takiguchi", role:"Iniciação científica", area:"Medicina Regenerativa"}
];

const news = [
  {date:"2026-06-19", title:"Novo site do LabCET em desenvolvimento", text:"A equipe está reorganizando linhas de pesquisa, publicações, galeria e notícias em um formato moderno e atualizável."},
  {date:"2025-05-01", title:"Publicação em PLOS ONE", text:"Artigo sobre vetor de marcação por proximidade em células-tronco humanas publicado em 2025."},
  {date:"2024-06-01", title:"CARDEL e desenvolvimento cardíaco humano", text:"Estudo publicado em Cells destaca lncRNA ativado durante o desenvolvimento cardíaco humano."}
];

const news = [
  {date: "2026-06-19", title: "Novo site do LabCET em desenvolvimento", text: "A equipe está reorganizando linhas de pesquisa, publicações, galeria e notícias em um formato moderno e atualizável."},
  {date: "2025-05-01", title: "Publicação em PLOS ONE", text: "Artigo sobre vetor de marcação por proximidade em células-tronco humanas publicado em 2025."},
  {date: "2024-06-01", title: "CARDEL e desenvolvimento cardíaco humano", text: "Estudo publicado em Cells destaca lncRNA ativado durante o desenvolvimento cardíaco humano."}
];
