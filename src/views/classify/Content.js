import React, { useState, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';

const Content = (props) => {

    const [greater, setGreater] = useState({cat:"greater", dog:""})

    useEffect(() => {
        if (props.result.cat > props.result.dog){
            setGreater({cat:"greater", dog:""})
        }else{
            setGreater({cat:"", dog:"greater"})
        }
    }, [props.result])

    return (
        <div className="content">
            <div className="extracted-features">
                <div className="title">
                    <p>Caracterísiticas Extraidas</p>
                </div>
                <div className="body">
                    {props.features.map((item, index) => (
                        <div className="linha" key={index}>
                            <div className="title">
                                <p>{item.title}</p>
                            </div>
                            <div className="value">
                                <p>{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="classification">
                <div className="title">
                    <p>Classificação</p>
                </div>
                <div className="body">
                    <div className="linha">
                        <div className="title"><p>Classificador</p></div>
                        <div className="value"><p>Multilayer Perceptron</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Cross Validation</p></div>
                        <div className="value"><p>20 Pastas</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Seed</p></div>
                        <div className="value"><p>1</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Hidden Layer</p></div>
                        <div className="value"><p>a</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Learning Rate</p></div>
                        <div className="value"><p>{props.settings.learningRate}</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Momentum</p></div>
                        <div className="value"><p>0.2</p></div>
                    </div>
                    <div className="linha">
                        <div className="title"><p>Training Time</p></div>
                        <div className="value"><p>{props.settings.trainingTime}</p></div>
                    </div>
                </div>
            </div>
            <div className="result">
                <div className={"cat "+ greater.cat}>
                    <label>Gato: {props.result.cat}%</label>
                </div>
                <div className={"dog " + greater.dog}>
                    <label>Cão: {props.result.dog}%</label>
                </div>
            </div>
            <div className="player">
                <AudioPlayer
                    src={props.path}
                />
            </div>
        </div>
    )
}

export default Content