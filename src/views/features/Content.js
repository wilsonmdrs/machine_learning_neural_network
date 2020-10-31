import React, { useState, useEffect } from 'react'
import '../../assets/css/blur.css'

const Content = (props) => {


    return (
        <div className="content">
            <div className="body">
                <div className="text">
                    <p className="subtitle">Zero Crossing</p><p>É um ponto onde a onda sonora cruza o eixo de nivel zero.</p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/zero-crossing.svg')} />
                </div>
            </div>
            <div className="body">
                <div className="text">
                    <p className="subtitle">Spectral Rolloff</p>
                    <p>É a frequência abaixo da qual se encontra uma porcentagem especificada da energia espectral total, por exemplo, 85%.</p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/spectral-centroid.png')} />
                </div>
            </div>
            <div className="body">
                <div className="text">
                    <p className="subtitle">Spectral Centroid</p>
                    <p>É uma medida usada no processamento de sinal digital para caracterizar um espectro.
                    Indica onde o centro de massa do espectro está localizado. Perceptualmente,
                    ele tem uma conexão robusta com a impressão de brilho de um som</p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/spectral-rolloff.png')} />
                </div>
            </div>
            <div className="body">
                <div className="text">
                    <p className="subtitle">Mel Spectrogram</p>
                    <p>
                        É um espectrograma onde as frequências são convertidas para a Mel Scale.
                        Mel Scale é uma escala perceptiva de arremessos considerados pelos ouvintes
                        como iguais em distância um do outro.

                    </p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/mel-spectrogram.png')} />
                </div>
            </div>
            <div className="body">
                <div className="text">
                    <p className="subtitle">Mel-frequency cepstral coefficients - MFCC</p>
                    <p> É uma representação do espectro de potência de curto prazo de um som,
                    com base em uma transformação de cosseno linear de um espectro de
                    potência de log em uma escala de frequência de mel não linear.
                    </p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/mfcc.jpg')} />
                </div>
            </div>
            <div className="body">
                <div className="text">
                    <p className="subtitle">Chroma short-time Fourier transform - STFT  </p>
                    <p>
                        É usada para converter um sinal dependente do tempo em um
                        sinal dependente da frequência, é uma das ferramentas matemáticas mais importantes
                        no processamento de sinal de áudio. Aplicação da Fourier Transform às seções locais
                        de um sinal de áudio, obtém-se a transformada de Fourier de curta duração (STFT).
                        </p>
                </div>
                <div className="image">
                    <img src={require('../../assets/images/features/chroma-stft.jpeg')} />
                </div>
            </div>
        </div>
    )
}

export default Content