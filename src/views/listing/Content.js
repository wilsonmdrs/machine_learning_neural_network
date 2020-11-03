import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Content = ({audios, setClassify}) => {
    

    return (
        <div className="content">
            {/* Lista de Sons de Gatos */}
            <div className="items">
                <div className="header">
                    <p className="title">Gatos</p>
                </div>
                <div className="body">
                    {audios.cats.map((item ,index) => (
                        
                    <div className="item" key={index}>
                   
                        <div className="player">
                            <AudioPlayer
                                src={item.path}
                            />
                        </div>
                        <div className="classify-button" onClick={() => setClassify(item)}>
                            <FontAwesomeIcon icon="list-alt" />
                            <p>Classificar</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
             {/* Lista de Sons de Cães */}
             <div className="items">
                <div className="header">
                    <p className="title">Cães</p>
                </div>
                <div className="body">
                    {audios.dogs.map((item ,index) => (
                    <div className="item" key={index}>
                        <div className="player">
                            <AudioPlayer
                                src={item.path}
                            />
                        </div>
                        <div className="classify-button" onClick={() => setClassify(item)}>
                            <FontAwesomeIcon icon="list-alt" />
                            <p>Classificar</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content