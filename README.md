# mechanics
API for mechanics computation using ROS

#### Elementos estruturais
- Vigas
- Colunas

#### Tipos de apoio:
- Rolete ou Apoio Móvel
- Articulação ou Pino
    - Pino externo
    - Pino interno
- Engastamento ou Apoio Fixo
- Apoio liso
- Apoio Fixo

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
- Momento de Torção ou Torque (vinculação com Força Normal) ?
    - Há movimento ou tendência de movimento para que corpo gire/torcer-se ao redor de eixo perpendicular à área da superfície.
- Momento Fletor (vinculação com Força de Cisalhamento) ?
    - Há movimento ou tendência de movimento para que corpo flerte-se ao redor de eixo que se encontra na área da superfície.

#### Diagrama de Corpo Livre
- 1) Desenhe as os corpos isoladamente (esboço geral)
- 2) Indique, sem quantificar, as forças ativas e reativas que agem nos corpos. (uso de vetores)
- 3) Quantifique a magnitude das forças

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
- Tensão Cisilhante
- Tensão de escoamento
- Tensão máxima suportada

#### Deformação
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