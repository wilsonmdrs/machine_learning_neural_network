import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {Input} from 'reactstrap'

const Header = ({update, onUpdate, settings}) => {


    const [value, setValue] = useState(settings)
    const [isNumeral, setIsNumeral] = useState(true)

    const onValidateRate = e => {
        let charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                if (charCode === 190 || charCode === 0){
                    setIsNumeral(true)
                }else setIsNumeral(false)
            }else{
               setIsNumeral(true)
            }
        }
    }
    
    const onValidateTime = e => {
        let charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                if (charCode === 0){
                    setIsNumeral(true)
                }else setIsNumeral(false)
            }else{
               setIsNumeral(true)
            }
        }
    }
    return (
        <div className="header">
            <div className="title">
                <h2>RNA Test Dataset</h2>
            </div>
            <div className="setup">
                <p className="title">Learning Rate:</p>
                {update ? (
                    <Input className="input" value={value.learningRate} 
                    onChange={(e) => isNumeral && setValue({...value, learningRate:e.target.value}) }
                    onKeyDown={(e) => onValidateRate(e)}/>
                ): 
                    <p className="value">{settings.learningRate}</p>
                }
                <p className="title">Training Time:</p>
                {update ? (
                    <Input className="input" value={value.trainingTime} 
                    onChange={(e) => isNumeral && setValue({...value, trainingTime:e.target.value}) }
                    onKeyDown={(e) => onValidateTime(e)}/>
                ):
                    <p className="value">{settings.trainingTime}</p>
                }
                <label onClick={() =>  onUpdate(value)}>
                    {update ? "Salvar" : "Editar"}
                    <FontAwesomeIcon icon="pen-alt"  />
                </label>

            </div>
            {/* <div className="edit">
            </div> */}

        </div>
    )
}

export default Header