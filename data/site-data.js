
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
    title: "Chefe do Laboratório",
    area: "Biologia Molecular • Regulação Pós-Transcricional • Células-Tronco",
    bio: "Possui graduação em Ciências Biológicas pela Universidad de la República e doutorado em Biologia Molecular pela Universidad de Granada. É Pesquisador Titular da Fundação Oswaldo Cruz (Fiocruz) e atua no estudo dos mecanismos de regulação pós-transcricional da expressão gênica em organismos eucariotos, com foco em proteínas de ligação ao RNA, biologia básica de células-tronco e diferenciação celular. É responsável pelo Laboratório de Biologia Básica de Células-Tronco (LabCET) e foi Diretor do Instituto Carlos Chagas (Fiocruz Paraná) entre 2017 e 2021.",
    image: "assets/team/bruno_dallagiovanna.jpg",
    lattes: "",
    scholar: ""
  }
];

const team = [
  {
    name: "Crisciele Kuligovski",
    role: "Lab manager",
    degree: "Mestre em Saúde",
    area: "",
    lattes: "http://lattes.cnpq.br/4570976955280649",
    image: "assets/team/crisciele_kuligovski.jpg"
  },

  {
    name: "Humberto Doriguêtto Gravina",
    role: "Pós-doc",
    degree: "Mestre e Doutor em Bioquímica e Imunologia",
    area: "Biologia Molecular, Bioquímica e Imunologia",
    lattes: "http://lattes.cnpq.br/7232663422938540",
    image: "assets/team/humberto_gravina.jpg"
  },
  {
    name: "Isabelle Leticia Zaboroski",
    role: "Pós-doc",
    degree: "Mestre e Doutora em Biociências e Biotecnologia",
    area: "Doenças genéticas raras",
    lattes: "http://lattes.cnpq.br/1171970304000430",
    image: "assets/team/isabelle_zaboroski.jpg"
  },
  {
    name: "Maria Julia Barison",
    role: "Pós-doc",
    degree: "Mestre e Doutora em Biociências e Biotecnologia",
    area: "Biologia Celular, Biologia Molecular, Bioquímica e Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/1171970304000430",
    image: "assets/team/maria_julia_barison.jpg"
  },
  {
    name: "Maiara Vicentini",
    role: "Pós-doc",
    degree: "Ciências Biológicas",
    area: "Isolamento de vesículas / Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/1651763279045527",
    image: "assets/team/maiara_vicentini.jpg"
  },
  {
    name: "Rubens Gomes Júnior",
    role: "Pós-doc",
    degree: "Ciências Biológicas",
    area: "Regulação pós-transcricional na cardiomiogênese",
    lattes: "http://lattes.cnpq.br/7451808550815896",
    image: "assets/team/rubens_gomes_junior.jpg"
  },
  {
    name: "Vivien Patricia Garbin",
    role: "Pós-doc",
    degree: "Ciências Biológicas",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/4341438450303259",
    image: "assets/team/vivien_garbin.jpg"
  },

  {
    name: "Annanda Lyra Ribeiro",
    role: "Doutorado",
    degree: "Bacharelado em Ciências Biológicas",
    area: "Regulação pós-transcricional de células-tronco pluripotentes durante a diferenciação para folhetos embrionários, com foco em RNAs longos não codificantes",
    lattes: "http://lattes.cnpq.br/7233586047722273",
    image: "assets/team/annanda_ribeiro.jpg"
  },
  {
    name: "Evelin Brandão da Silva",
    role: "Doutorado",
    degree: "Ciências Biológicas",
    area: "Doenças genéticas raras",
    lattes: "http://lattes.cnpq.br/5513757972669868",
    image: "assets/team/evelin_brandao.jpg"
  },
  {
    name: "Juliana Pamplona",
    role: "Doutorado",
    degree: "Ciências Biológicas",
    area: "Citotoxicidade",
    lattes: "http://lattes.cnpq.br/8828426880947114",
    image: "assets/team/juliana_pamplona.jpg"
  },
  {
    name: "Rodrigo Perez Lucas",
    role: "Doutorado",
    degree: "Biologia Humana",
    area: "Engenharia de tecidos e terapia celular",
    lattes: "https://lattes.cnpq.br/2859186046529995",
    image: "assets/team/rodrigo_perez_lucas.jpg"
  },
  {
    name: "Rhaíza Stella Vieira França",
    role: "Doutorado",
    degree: "Engenharia de Bioprocessos",
    area: "Biologia Molecular",
    lattes: "http://lattes.cnpq.br/3834851620107828",
    image: "assets/team/rhaiza_franca.jpg"
  },
  {
    name: "Ronaldo Figueira de Oliveira",
    role: "Doutorado",
    degree: "Ciências Biológicas",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/5414583578149011",
    image: "assets/team/ronaldo_oliveira.jpg"
  },

  {
    name: "Bruna Follador Bordim",
    role: "Mestrado",
    degree: "Biomedicina",
    area: "Citotoxicidade",
    lattes: "https://lattes.cnpq.br/1623474513525763",
    image: "assets/team/bruna_bordim.jpg"
  },
  {
    name: "Gabriela Maria da Costa Ferreira",
    role: "Mestrado",
    degree: "Ciências Biomédicas",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/4391369973293077",
    image: "assets/team/gabriela_ferreira.jpg"
  },
  {
    name: "Isabella Aguiar Dantas",
    role: "Mestrado",
    degree: "Engenharia de Bioprocessos e Biotecnologia",
    area: "Biologia Molecular",
    lattes: "http://lattes.cnpq.br/2893902155017840",
    image: "assets/team/isabella_dantas.jpg"
  },
  {
    name: "Julia Marques",
    role: "Mestrado",
    degree: "Biomedicina",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/8483352991119076",
    image: "assets/team/julia_marques.jpg"
  },
  {
    name: "Luísa Lencioni de Mendonça",
    role: "Mestrado",
    degree: "Biotecnologia",
    area: "Medicina Regenerativa / Bioimpressão de Células-Tronco",
    lattes: "http://lattes.cnpq.br/2452332637680892",
    image: "assets/team/luisa_lencioni.jpg"
  },
  {
    name: "Rafaela Martins",
    role: "Mestrado",
    degree: "Biomedicina",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/3803689196280542",
    image: "assets/team/rafaela_martins.jpg"
  },
  {
    name: "Sandra Christina Kolodziejski",
    role: "Mestrado",
    degree: "Biomedicina",
    area: "Toxicologia Celular",
    lattes: "http://lattes.cnpq.br/5533332781508665",
    image: "assets/team/sandra_kolodziejski.jpg"
  },

  {
    name: "Ana Paula Ressetti Abud",
    role: "Colaboradores",
    degree: "Ciências Biológicas",
    area: "Citotoxicidade",
    lattes: "http://lattes.cnpq.br/8412698346100958",
    image: "assets/team/ana_paula_abud.jpg"
  },

  {
    name: "Alessandra Conti Gomes de Souza",
    role: "Apoio Técnico de Projeto",
    degree: "Ciências Biológicas",
    area: "Citotoxicidade",
    lattes: "http://lattes.cnpq.br/4429962589169358",
    image: "assets/team/alessandra_souza.jpg"
  },
  {
    name: "Giovanna Nazaré de Barros Prezia",
    role: "Apoio Técnico de Projeto",
    degree: "Biomedicina",
    area: "Bioinformática",
    lattes: "http://lattes.cnpq.br/9550518625377894",
    image: "assets/team/giovanna_prezia.jpg"
  },
  {
    name: "Luana Pescke Soares",
    role: "Apoio Técnico de Projeto",
    degree: "Biotecnologia",
    area: "Engenharia genética e cultivo de células e fungos",
    lattes: "http://lattes.cnpq.br/9266542493133775",
    image: "assets/team/luana_soares.jpg"
  },
  {
    name: "Mateus Teixeira da Rocha",
    role: "Apoio Técnico de Projeto",
    degree: "Ciências Biológicas - Bacharelado",
    area: "Medicina Regenerativa",
    lattes: "https://www.linkedin.com/in/mateus-rocha-449499231",
    image: "assets/team/mateus_rocha.jpg"
  },
  {
    name: "Letícia Bassani Bonato",
    role: "Apoio Técnico de Projeto",
    degree: "Biomedicina",
    area: "Medicina Regenerativa",
    lattes: "https://lattes.cnpq.br/6438091450502153",
    image: "assets/team/leticia_bonato.jpg"
  },

  {
    name: "Jhenifer Moreira Pietrobelli",
    role: "Iniciação Científica",
    degree: "Graduanda em Biomedicina",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/3122418754272390",
    image: "assets/team/jhenifer_pietrobelli.jpg"
  },
  {
    name: "José Henrique Rosa Silva",
    role: "Iniciação Científica",
    degree: "Graduando em Biomedicina",
    area: "Genética humana e biologia molecular",
    lattes: "https://lattes.cnpq.br/8025775630673959",
    image: "assets/team/jose_henrique_silva.jpg"
  },
  {
    name: "Nataly Barbieri Stunff",
    role: "Iniciação Científica",
    degree: "Graduanda em Biomedicina",
    area: "Genética humana e biologia molecular",
    lattes: "http://lattes.cnpq.br/8804772583967646",
    image: "assets/team/nataly_stunff.jpg"
  },
  {
    name: "Ana Claudia Takiguchi",
    role: "Iniciação Científica",
    degree: "Graduanda em Ciências Biológicas - Bacharelado",
    area: "Medicina Regenerativa",
    lattes: "http://lattes.cnpq.br/7739710363843070",
    image: "assets/team/ana_claudia_takiguchi.jpg"
  }
];

const news = [
  {date:"2026-06-19", title:"Novo site do LabCET em desenvolvimento", text:"A equipe está reorganizando linhas de pesquisa, publicações, galeria e notícias em um formato moderno e atualizável."},
  {date:"2025-05-01", title:"Publicação em PLOS ONE", text:"Artigo sobre vetor de marcação por proximidade em células-tronco humanas publicado em 2025."},
  {date:"2024-06-01", title:"CARDEL e desenvolvimento cardíaco humano", text:"Estudo publicado em Cells destaca lncRNA ativado durante o desenvolvimento cardíaco humano."}
];
