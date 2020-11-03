import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Header from './Header'
import Content from './Content'
import Sounds from '../../components/Sounds'


const Listing = (props) => {
   
    const [audios, setAudios] = useState({cats:[], dogs:[]})
    const [settings, setSettings] = useState({learningRate:0.01, trainingTime:3000})
    const [update, setUpdate] = useState(false)
    let history = useHistory()

    useEffect(() => {
        setAudios({cats:Sounds.cats(), dogs:Sounds.dogs()})
    },[])

    const onUpdate = (value) => {
        setUpdate(!update) 
        setSettings(value)
    }

    const setClassify = (item) => {
        history.push('/classify', {item,settings})
    }

    return (
        <section id="listing">
            <Header settings={settings} onUpdate={onUpdate} update={update} />
            <Content audios={audios} setClassify={setClassify} />
        </section>
    )
}

export default Listing