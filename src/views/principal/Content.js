import React from 'react'
import '../../assets/css/blur.css'


const Content = (props) => {

    return (
        <div className="content">
            <div className="image"/>
            <p className="title">MACHINE LEARNING</p>
            <p className="subtitle-1">Extração de Características de Sons</p>
            <p className="subtitle-2">Classificação com Perceptron Multi Camadas</p>
            <p className="text">
                Aplicação desenvolvida como avaliação da disciplina de Aprendizado de Máquina
                para o curso de Ciência da Computação da Universidade do Sul de Santa Catarina(UNISUL).
            </p>
            <p className="text">
                Esta Aplicação tem como finalidade a extração de características de sons 
                de cães e gatos. As características extraidas foram: Zero-Crossing, Spectral Centroid, Spectral
                Rolloff, Mel Spectrogram, MFCC e Chroma STFT. Os sons foram separados em dois grupos, um de treinamento e outro de teste
                após a extração das características foi gerado um arquivo cuja extensão ".arff" pode ser lida pelo Weka, uma
                plataforma com diversas coleções de algoritmos de Machine Learning e Data Mining escrita em Java na Universidade de Waikato, Nova Zelândia
            </p>
            <p className="text">
                Através desse arquivo estabeleceu-se parâmetros para Aplicação do algoritmo de rede neural Perceptron
                classificando assim os audios de testes.
            </p>
        </div>
    )
}

export default Content