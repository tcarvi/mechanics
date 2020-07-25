# tmechanics
- API de cálculos de engenharia mecânica (foco em edificações)
- Com uso da framework ***ROS*** para comunicação e interação dos processos

#### Elementos Estruturais
- Estruturas lineares:
    - Eixos verticais / Colunas / Pilares 
    - Eixos horizontais / Vigas
    - Eixos oblíquos
    - Pórticos
        - Junções de eixos
    - Treliças
        - Junções de eixos metálicos
    - Grelhas
        - Junções de vigas
    - Cabos:
        - Estruturas pênseis (forças verticais)
        - Estruturas estaiadas (forças oblíquas)
    - Arcos 
- Estruturas de superfície
    - Lajes
    - Fundações
- Estruturas de volume
    
#### Tipos de apoio:
- Apoio Móvel (Rolete) ou Apoio Liso
    - Reação aproximadamente nula para as forças paralelas à superfície
    - Reação para forças ortogonais ou oblíquas à superfície do pino.
    - Momento Fletor (tendência de movimento rotacional):
        - Deve-se considerar a combinação de forças ortoganais ou oblíquas à superfície, identificada em "diagrama de corpo livre". Apenas as forças de reação paralela são nulas.
    - Momento Torsor:
        - Deve-se considerar a combinação de forças ortoganais ou oblíquas à superfície, identificada em "diagrama de corpo livre".
- Articulação ou Pino
    - Reação aproximadamente nula para todas as forças coplanares ao plano de rotação,  que não se dirijam especificamente contra o pino.
    - Reação para todas as forças não coplanares ao plano de rotação.
    - Reação para forças que se dirijam especificamente contra o pino, mesmo sendo coplanares ao plano de rotação.
    - Momento Fletor (tendência de movimento rotacional):
        - Valor aproximadamente nulo, no eixo de rotação do pino.
        - Pode existir quando consideramos forças não coplanares ao eixo de rotação do pino. Deve-se analisar a combinação de forças, identificada em "diagrama de corpo livre". 
        - Se a articulação do apoio for uma esfera, momento fletor terá valor aproximadamente nulo em qualquer dos eixos de rotação.
    - Momento Torsor:
        - Não existe, no eixo de rotação do pino.
        - Pode existir quando consideramos forças não coplanares ao eixo de rotação do pino. Deve-se analisar a combinação de forças, identificada em "diagrama de corpo livre". 
        - Se a articulação do apoio for uma esfera, momento torsor terá valor aproximadamente nulo em qualquer dos eixos de rotação.
- Engastamento ou Apoio Fixo
    - Reação para forças ortogonais, paralelas ou oblíquas à superfície, considerando as 3 dimensões do espaço vetorial.
    - Geração de momento fletor, conforme análise da combinação de forças, identificada em "diagrama de corpo livre".
    - Geração de momento torsor, conforme análise da combinação de forças, identificada em "diagrama de corpo livre".

#### Cargas:
- Forças de Superfície:
    - Forças concentradas. (aproximação aceitável para o cálculo)
    - Forças distribuídas
- Forças de Corpo
    - Peso gravitacional

#### Forças:
- internas
- externas
- **Equilíbrio de forças no Repouso ou no Movimento Retilínio Uniforme (MRU)**: 
    - Somatório de forças = Massa x Vetor Aceleração Nulo. 
- **Situação de movimento acelerado**: 
    - Somatório de forças = Vetor Resultante = Massa x Vetor Aceleração.
    - Vetor aceleração não nulo.
- Forças de Cisalhamento (Força que faz um corpo tender a deslizar sobre um outro) (vinculação com Momento Fletor) ?
- Força Normal (Força perpendicular à superfície de contato) (vinculação com Momento de Torção) ?

#### Momentos:
- Momento Torsor (de Torção ou Torque)
    - Há movimento ou tendência de movimento para que o corpo gire/torça-se em torno de seu eixo longitudinal.
- Momento Fletor
    - Há movimento ou tendência de movimento para que corpo flerte-se no sentido ortogonal ou oblíquo ao seu eixo longitudinal.

#### Diagrama de Corpo Livre
1. Desenhe os corpos isoladamente (esboço geral)
2. Indique, sem quantificar, as forças ativas e reativas que agem nos corpos. (uso de vetores)
3. Quantifique a magnitude das forças

#### Conexões de transmissão de força: 
- Molas: 
    - A força transmitida é definida pela Lei de Hook. ( F = kS ) Sendo S o deslocamento da mola e k a constante de rigidez da mola.
    - Cabos:
        - O cabo, no momento da tramissão da força, pode se deformar de forma que há perda na transmissão de energia.
        - Como este valor normalmente é baixo, considera-se normalmente que os cabos são indeformáveis.
        - A força que atua no cabo, durante a transmissão de energia, chama-se tração ou tensão. Esta forma tem a mesma direção do cabo.
- Rolamentos:
    - Mancal radial
    - Mancal axial
- Polias

#### Projeto estrutural

#### Tensão
- Tensão Normal
- Tensão Cisalhante
- Tensão de escoamento
- Tensão máxima suportada

#### Deformação
- Deformação Normal
- Deformação Cisalhante
- Deformação máxima suportada
- Deslocamento de elemento estrutural

#### Elasticidade
- Módulo de elasticidade
- Ponto de curva onde a elasticidade é perdida

#### Posições centralizadas:
- Centro de massa
- Centro de gravidade
- Centróide de sistema de partículas
- Centróide de sistema de corpos rígidos

#### Conceitos físicos:
- Momento de inércia
- Teorema de eixos paralelos
- Raio de Giração

#### Cursos:
- https://www.udacity.com/course/robotics-software-engineer--nd209
- https://www.udacity.com/course/sensor-fusion-engineer-nanodegree--nd313
- https://www.coursera.org/specializations/iot#courses
- https://www.coursera.org/specializations/iot#courses

#### Livros:
Hibbeler, R. C. Resitência dos Materiais; [tradução Sérgio Nascimento]. São Paulo: Pearson Education do Brasil, 2018. [Título Original: Mechanics of materials. 10 ed estadunidense.]