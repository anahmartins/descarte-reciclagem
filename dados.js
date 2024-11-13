let dados = [
    {
        titulo: "Botucatu",
        descricao: "<p>Botucatu oferece várias opções para o descarte correto de resíduos recicláveis. A cidade possui ecopontos e pontos de entrega voluntária (PEVs) em locais estratégicos para facilitar o acesso da população. Além disso, Botucatu conta com parcerias com empresas e cooperativas que ajudam na coleta seletiva e na conscientização ambiental.</p><p>Principais locais:</p><p>Ecoponto Central (Av. Dr. José Pedretti Neto, s/n – Vila Ema)<br>Ecoponto Cecap (Rua Mário Rodrigues Torres, 545 – Jardim Continental)<br>PEVs em supermercados como o Supermercado Jaú Serve (Av. Dom Lúcio, 925 – Centro).</p>",
        link: "https://www.botucatu.sp.gov.br",
        tags: "botucatu, btu"
    },
    {
        titulo: "São Paulo",
        descricao: "<p>São Paulo possui uma extensa rede de coleta seletiva, com ecopontos em todos os distritos, PEVs em diversos estabelecimentos e cooperativas de reciclagem que fazem coleta porta a porta em regiões específicas. A capital paulista é referência em sustentabilidade urbana e conta com mais de 100 ecopontos.</p><p>Principais locais:</p><p>Ecoponto Lapa (Av. Nicolas Boer, 300 – Lapa)<br>Ecoponto Santo Amaro (Av. Washington Luís, 1422 – Santo Amaro)<br>Ecoponto Aricanduva (Av. Aricanduva, 20 – Vila Califórnia)<br>Há PEVs em unidades do Carrefour e Extra em toda a cidade.</p>",
        link: "https://www.prefeitura.sp.gov.br/",
        tags: "saopaulo capital, sao paulo"
    },
    {
        titulo: "Bauru",
        descricao: "<p>Bauru conta com uma estrutura de coleta seletiva bem organizada, incluindo ecopontos estrategicamente localizados em bairros movimentados e coleta porta a porta em alguns bairros. A cidade trabalha com cooperativas para o descarte correto e consciente dos resíduos recicláveis.</p><p>Locais de destaque incluem:</p><p>Ecoponto Vila Falcão (Rua Ignácio Alexandre Nasralla, s/n – Vila Falcão)<br>Ecoponto Jardim Redentor (Rua Bernardino de Campos, s/n – Jardim Redentor)<br>Há também PEVs em supermercados, como o Supermercado Confiança Max (Av. Getúlio Vargas, 17-70 – Jardim Europa).</p>",
        link: "https://www2.bauru.sp.gov.br/",
        tags: "bauru, baur"
    },
    {
        titulo: "Campinas",
        descricao: "<p>Campinas oferece diversos ecopontos e PEVs espalhados por toda a cidade, facilitando o descarte de resíduos recicláveis e conscientizando a população sobre a importância da reciclagem. A coleta seletiva porta a porta está presente em alguns bairros e há parcerias com cooperativas locais.</p><p>Ecopontos populares incluem:</p><p>Ecoponto São Marcos (Rua Wilson Vieira Barreto, 133 – São Marcos)<br>Ecoponto Jardim Eulina (Rua Aluísio Azevedo, 1410 – Jardim Eulina)<br>PEVs estão disponíveis em supermercados como o Extra (Av. Campos Sales, 899 – Centro)<br>e Carrefour (Av. Eng. Antônio Francisco de Paula Souza, 2791 – Jardim São Gabriel).</p>",
        link: "https://www.campinas.sp.gov.br/",
        tags: "campinas, cmp"
    },
    {
        titulo: "Santos",
        descricao: "<p>Santos possui uma estrutura robusta para a coleta seletiva, com ecopontos e PEVs distribuídos por áreas de alta circulação e em locais públicos. A cidade também conta com cooperativas que ajudam na triagem e reciclagem dos resíduos.</p><p>Principais ecopontos incluem:</p><p>Zona Noroeste (Av. Nossa Senhora de Fátima, 456 – Chico de Paula)<br>Vila Mathias (Rua São Bento, 192 – Vila Mathias)<br>Há PEVs em locais como o Supermercado Pão de Açúcar (Av. Ana Costa, 318 – Gonzaga).</p>",
        link: "https://www.santos.sp.gov.br/",
        tags: "santos, st"
    },
    {
        titulo: "Ribeirão Preto",
        descricao: "<p>Ribeirão Preto oferece ecopontos e pontos de entrega voluntária para descarte de recicláveis, além de contar com cooperativas que auxiliam na coleta seletiva e na reciclagem.</p><p>Entre os principais locais estão:</p><p>Ecoponto Ribeirânia (Av. Eduardo Andrea Matarazzo, s/n – Ribeirânia)<br>Ecoponto Bonfim Paulista (Estrada da Limeirinha, km 3 – Bonfim Paulista)<br>PEVs estão disponíveis em supermercados como o Carrefour (Av. do Café, 1315 – Vila Amelia).</p>",
        link: "https://www.ribeiraopreto.sp.gov.br/",
        tags: "ribeirao preto, rp"
    },
    {
        titulo: "Sorocaba",
        descricao: "<p>Sorocaba oferece coleta seletiva em grande parte da cidade e disponibiliza ecopontos em regiões estratégicas. Cooperativas locais ajudam na triagem e destinação dos materiais recicláveis.</p><p>Os principais ecopontos incluem:</p><p>Júlio de Mesquita (Rua Walter Rodrigues da Silva, 100 – Júlio de Mesquita)<br>Parque São Bento (Rua Maria Benedita Brito, s/n – Parque São Bento)<br>PEVs também estão presentes em supermercados, como o Supermercado Coop (Av. General Carneiro, 790 – Vila Lucy).</p>",
        link: "https://www.sorocaba.sp.gov.br/",
        tags: "sorocaba, sor"
    },
    {
        titulo: "São José dos Campos",
        descricao: "<p>São José dos Campos promove a coleta seletiva por meio de ecopontos e PEVs, oferecendo opções acessíveis para o descarte correto de materiais recicláveis.</p><p>Ecopontos em áreas de fácil acesso incluem:</p><p>Parque Industrial (Av. Sebastião Henrique da Cunha Pontes, s/n – Parque Industrial)<br>Urbanova (Rua Dr. Donald S. Teixeira, s/n – Urbanova)<br>PEVs estão disponíveis em supermercados como o Extra (Av. Andrômeda, 1001 – Jardim Satélite).</p>",
        link: "https://www.sjc.sp.gov.br/",
        tags: "sjc, sao jose dos campos"
    },
    {
        titulo: "Guarulhos",
        descricao: "<p>Guarulhos oferece ecopontos e PEVs para descarte de recicláveis e colabora com cooperativas para promover a reciclagem e a conscientização ambiental.</p><p>Principais ecopontos incluem:</p><p>Taboão (Rua Antônio Calvo, 102 – Taboão)<br>Pimentas (Rua Manuel Bernardo Medeiros, 140 – Pimentas)<br>PEVs também estão disponíveis em locais como o Carrefour (Av. Salgado Filho, 1876 – Jardim Tranquilidade).</p>",
        link: "https://www.guarulhos.sp.gov.br/",
        tags: "guarulhos, gru"
    },
    {
        titulo: "Jundiaí",
        descricao: "<p>Jundiaí conta com coleta seletiva em diversos bairros e possui ecopontos para a entrega de materiais recicláveis. A cidade trabalha em parceria com cooperativas para garantir a destinação correta dos resíduos.</p><p>Principais ecopontos incluem:</p><p>Jardim Novo Horizonte (Rua Santarém, 121 – Jardim Novo Horizonte)<br>Eloy Chaves (Rua Benedito de Paula, 408 – Eloy Chaves)<br>PEVs estão disponíveis em locais como o Supermercado Boa (Av. Nove de Julho, 750 – Anhangabaú).</p>",
        link: "https://www.jundiai.sp.gov.br/",
        tags: "jundiai, jd"
    },
    {
        titulo: "Itapeva",
        descricao: "<p>Itapeva oferece ecopontos e pontos de coleta seletiva espalhados pela cidade, facilitando o descarte de resíduos recicláveis pela população. Além disso, há iniciativas de coleta em parceria com escolas e empresas locais.</p><br><p>Principais pontos de coleta incluem o Ecoponto Jardim Maringá (Av. Gov. Mario Covas, 2750 – Jardim Maringá) e o Ecoponto Centro (Rua Conceição, 1340 – Centro).</p>",
        link: "https://www.itapeva.sp.gov.br/",
        tags: "itapeva, itv"
    },
    {
        titulo: "Jaú",
        descricao: "<p>Jaú possui ecopontos e um sistema de coleta seletiva que atende diversas regiões. A cidade trabalha em conjunto com cooperativas para promover a destinação correta dos resíduos recicláveis.</p><br><p>Entre os locais de destaque estão o Ecoponto Jardim Pedro Ometto (Av. Totó Pacheco, 815 – Jardim Pedro Ometto) e o Ecoponto Jardim Maria Luiza IV (Rua Paulino Macedo, s/n – Jardim Maria Luiza IV).</p>",
        link: "https://www.jau.sp.gov.br/",
        tags: "jau, jau sp"
    },
    {
        titulo: "Lins",
        descricao: "<p>Lins oferece coleta seletiva porta a porta em diversos bairros e conta com ecopontos que facilitam o descarte de materiais recicláveis. A cidade também promove a conscientização ambiental através de campanhas e parcerias com cooperativas.</p><br><p>Locais principais incluem o Ecoponto Jardim Tangará (Rua Pedro Alves, 1200 – Jardim Tangará) e o Ecoponto Vila Guararapes (Rua Humaitá, 450 – Vila Guararapes).</p>",
        link: "https://www.lins.sp.gov.br/",
        tags: "lins, lins sp"
    },
    {
        titulo: "Campinas",
        descricao: "<p>Campinas oferece diversos ecopontos e PEVs espalhados por toda a cidade, facilitando o descarte de resíduos recicláveis e conscientizando a população sobre a importância da reciclagem. A coleta seletiva porta a porta está presente em alguns bairros e há parcerias com cooperativas locais.</p><br><p>Ecopontos populares incluem o Ecoponto São Marcos (Rua Wilson Vieira Barreto, 133 – São Marcos) e o Ecoponto Jardim Eulina (Rua Aluísio Azevedo, 1410 – Jardim Eulina). PEVs estão disponíveis em supermercados como o Extra (Av. Campos Sales, 899 – Centro) e Carrefour (Av. Eng. Antônio Francisco de Paula Souza, 2791 – Jardim São Gabriel).</p>",
        link: "https://www.campinas.sp.gov.br/",
        tags: "campinas, cmp"
    },
    {
        titulo: "Ribeirão Preto",
        descricao: "<p>Ribeirão Preto oferece ecopontos e pontos de entrega voluntária para descarte de recicláveis, além de contar com cooperativas que auxiliam na coleta seletiva e na reciclagem.</p><br><p>Entre os principais locais estão o Ecoponto Ribeirânia (Av. Eduardo Andrea Matarazzo, s/n – Ribeirânia) e o Ecoponto Bonfim Paulista (Estrada da Limeirinha, km 3 – Bonfim Paulista). PEVs estão disponíveis em supermercados como o Carrefour (Av. do Café, 1315 – Vila Amelia).</p>",
        link: "https://www.ribeiraopreto.sp.gov.br/",
        tags: "ribeirao preto, rp"
    },
    {
        titulo: "Araraquara",
        descricao: "<p>Araraquara possui ecopontos e um sistema de coleta seletiva que abrange muitos bairros. A cidade conta com parcerias com cooperativas e campanhas de conscientização ambiental.</p><br><p>Locais de coleta incluem o Ecoponto Vila Xavier (Av. Antônio Lourenço Corrêa, 1600 – Vila Xavier) e o Ecoponto Jardim das Hortênsias (Rua José Palomino Fernandes, 310 – Jardim das Hortênsias).</p>",
        link: "https://www.araraquara.sp.gov.br/",
        tags: "araraquara, arq"
    },
    {
        titulo: "Marília",
        descricao: "<p>Marília possui uma rede de ecopontos e coleta seletiva em diversas regiões, além de PEVs em supermercados e parcerias com cooperativas locais.</p><br><p>Principais pontos incluem o Ecoponto Nova Marília (Av. Dr. Durval de Menezes, 2400 – Nova Marília) e o Ecoponto Santa Antonieta (Rua Bonfim, 405 – Santa Antonieta).</p>",
        link: "https://www.marilia.sp.gov.br/",
        tags: "marilia, mar"
    },
    {
        titulo: "Presidente Prudente",
        descricao: "<p>Presidente Prudente conta com coleta seletiva e PEVs distribuídos em locais estratégicos, além de ecopontos para o descarte de recicláveis. A cidade trabalha com cooperativas que realizam a triagem dos materiais.</p><br><p>Locais de coleta incluem o Ecoponto Jardim Itatiaia (Rua dos Lírios, 300 – Jardim Itatiaia) e o Ecoponto Centro (Rua Álvares Machado, 1850 – Centro).</p>",
        link: "https://www.presidenteprudente.sp.gov.br/",
        tags: "presidente prudente, pp"
    },
    {
        titulo: "Franca",
        descricao: "<p>Franca oferece ecopontos em várias regiões e coleta seletiva em bairros específicos. A cidade também conta com PEVs em supermercados e parcerias com cooperativas de reciclagem.</p><br><p>Pontos principais são o Ecoponto Jardim Noêmia (Rua José Donadelli, s/n – Jardim Noêmia) e o Ecoponto São José (Rua Antônio de Pádua Ferreira, 845 – São José).</p>",
        link: "https://www.franca.sp.gov.br/",
        tags: "franca, frc"
    },
    {
        titulo: "Piracicaba",
        descricao: "<p>Piracicaba possui uma rede de coleta seletiva e ecopontos distribuídos pela cidade. A prefeitura realiza campanhas de conscientização e parcerias com cooperativas locais.</p><br><p>Entre os principais locais estão o Ecoponto Vila Rezende (Rua Dona Eugênia, 120 – Vila Rezende) e o Ecoponto Jardim Caxambu (Rua Porto Alegre, 900 – Jardim Caxambu).</p>",
        link: "https://www.piracicaba.sp.gov.br/",
        tags: "piracicaba, pir"
    },
    {
        titulo: "São José do Rio Preto",
        descricao: "<p>São José do Rio Preto conta com coleta seletiva porta a porta e diversos ecopontos para o descarte de recicláveis. A cidade possui parcerias com cooperativas que auxiliam na triagem dos materiais.</p><br><p>Locais de coleta incluem o Ecoponto Vila Toninho (Rua Cândido França Júnior, 200 – Vila Toninho) e o Ecoponto Eldorado (Av. Waldomiro Naressi, 265 – Eldorado).</p>",
        link: "https://www.sjriopreto.sp.gov.br/",
        tags: "são josé do rio preto, sjrp"
    },
    {
        titulo: "Limeira",
        descricao: "<p>Limeira oferece um sistema de coleta seletiva abrangente e ecopontos localizados em bairros movimentados. A cidade também possui PEVs em locais de fácil acesso e parcerias com cooperativas de reciclagem.</p><br><p>Ecopontos principais são o Ecoponto Vila Camargo (Av. Major José Levy Sobrinho, 2600 – Vila Camargo) e o Ecoponto Jardim Lagoa Nova (Rua Jaime Camargo, s/n – Jardim Lagoa Nova).</p>",
        link: "https://www.limeira.sp.gov.br/",
        tags: "limeira, lm"
    },
    {
        titulo: "Americana",
        descricao: "<p>Americana disponibiliza ecopontos e realiza coleta seletiva em bairros específicos. A cidade mantém parcerias com cooperativas que trabalham na triagem de materiais.</p><br><p>Pontos principais incluem o Ecoponto Jardim São Vito (Rua Francisco Pedro dos Santos, 175 – Jardim São Vito) e o Ecoponto Praia Azul (Rua Sergipe, 800 – Praia Azul).</p>",
        link: "https://www.americana.sp.gov.br/",
        tags: "americana, am"
    },
    {
        titulo: "São Carlos",
        descricao: "<p>São Carlos possui uma estrutura de coleta seletiva bem organizada, com ecopontos espalhados pela cidade e PEVs em locais de fácil acesso. A cidade também trabalha com cooperativas que ajudam na triagem dos materiais recicláveis.</p><br><p>Locais principais incluem o Ecoponto Vila Nery (Rua João Lourenço Rodrigues, 250 – Vila Nery) e o Ecoponto Cidade Aracy (Rua Araraquara, s/n – Cidade Aracy).</p>",
        link: "https://www.saocarlos.sp.gov.br/",
        tags: "são carlos, sc"
    },
    {
        titulo: "Barretos",
        descricao: "<p>Barretos oferece pontos de coleta seletiva e ecopontos em diversos bairros, além de promover campanhas de conscientização sobre a importância da reciclagem.</p><br><p>Locais destacados são o Ecoponto São João (Rua São João, 650 – São João) e o Ecoponto Vila Eulália (Rua Prof. José Alves, 370 – Vila Eulália).</p>",
        link: "https://www.barretos.sp.gov.br/",
        tags: "barretos, brt"
    },
    {
        titulo: "São João da Boa Vista",
        descricao: "<p>São João da Boa Vista possui pontos de coleta seletiva e ecopontos para descarte de recicláveis, além de uma coleta seletiva porta a porta. A cidade também possui PEVs e realiza campanhas de conscientização.</p><br><p>Ecopontos de destaque são o Ecoponto São José (Rua José Antônio Garcia, 120 – São José) e o Ecoponto Centro (Rua 24 de Outubro, 1500 – Centro).</p>",
        link: "https://www.sjbv.sp.gov.br/",
        tags: "são joão da boa vista, sjbv"
    }
];
