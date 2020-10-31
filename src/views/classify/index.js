import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import { CardTitle } from 'reactstrap'
import Loading from '../../components/Loading'

const Classify = (props) => {
    const [loading, setLoading] = useState(false)
    const [currentAudio, setCurrentAudio] = useState({ file: "cats/cat_3.wav" })
    const [result, setResult] = useState({ cat: 0, dog: 0 })
    const [features, setFeatures] = useState([
        { title: "Zero Crossing", value: 0 },
        { title: "Spectral Centroid", value: 0 },
        { title: "Spectral Rolloff", value: 0 },
        { title: "Mel Spectrogram", value: 0 },
        { title: "MFCC", value: 0 },
        { title: "Chroma STFT", value: 0 },
    ])
    const [settings, setSettings] = useState({ learningRate: 0.02, trainingTime: 3000 })
    useEffect(() => {
        if (props.location.state !== undefined) {

            (async () => {
                try {
                    setLoading(true)
                    const audio = props.location.state.item
                    const newSettings = props.location.state.settings
                    console.log(settings)
                    const response = await fetch('/classify/extract/sound/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ file: audio.file, settings: newSettings })
                    }).then(res => res.json())
                    console.log(response)
                    if (response.status === 200) {
                        setCurrentAudio(audio)
                        setResult(response.result)
                        setFeatures(response.features)
                        setSettings(newSettings)
                    }
                    setLoading(false)
                } catch (e) {
                    console.log('Error: ', e)
                }
            })()

        }
    }, [])

    // const onExtract = async () => {
    //     // const response = await fetch('/extract/sound/cat_32').then(response => response.json())
    //     // console.log(response)
    //     const response = await fetch('/train').then(res => res.json())
    //     console.log(response)
    //     setExtract(response.message)
    // }
    const onClassify = async () => {
        // const response = await fetch('/extract/sound/cat_32').then(response => response.json())
        // console.log(response)
        const response = await fetch('/extract/sound/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentAudio)
        }).then(res => res.json())
        console.log(response)
        // setResult(response.result)
    }



    return (
        <section id="classify">
            <Header />
            <Content settings={settings} path={currentAudio.path} features={features} result={result} />
            {!!loading && <Loading loading={loading} />}
        </section>
    )
}

export default Classify