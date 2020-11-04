# MACHINE LEARNING


Aplicação desenvolvida como atividade avaliativa para a disciplina
de aprendizado de máquina do curso de Ciência da Computação da 
Universidade do Sul de Santa Catarina (UNISUL). 


### Rede Neural Perceptron
Esta Aplicação tem como finalidade a extração de características de sons 
de cães e gatos. As características extraidas foram: Zero-Crossing, Spectral Centroid, Spectral
Rolloff, Mel Spectrogram, MFCC e Chroma STFT. Os sons foram separados em dois grupos, um de treinamento e outro de teste.
 
 
Após a extração das características foi gerado um arquivo cuja extensão ".arff" pode ser lida pelo Weka, uma
plataforma com diversas coleções de algoritmos de Machine Learning e Data Mining escrita em Java na Universidade de Waikato, Nova Zelândia


### Instalação

### Pré-requisitos
* JAVA RUNTIME E JKD
* Node.js
* Yarn
* Python 3

### Clone de Repositório Git
    $ git clone https://github.com/wilsonmdrs/machine_learning_neural_network

#### Baixar pacotes e dependencias
entrar na pasta machine_learning_neural_network e executar os seguintes comandos:

    $ yarn
    $ yarn install-server

#### Inicar Aplicação e Servidor Python
abra duas janelas no terminal na pasta  machine_learning_neural_network uma para a aplicação React 
outra par o servidor Python

##### Servidor Python
    $ yarn start-server

##### Aplicação React JS
    $ yarn start

A aplicação estará rodando em http://localhost:3000
