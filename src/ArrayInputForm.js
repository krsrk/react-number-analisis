import {useState} from "react"
import getArrayAnalisis from "./getArrayAnalisis";

export default function ArrayInputForm() {
    const [arrayValue, setArrayValue] = useState('')
    const [arrAnalisisResult, setArrAnalisisResult] = useState(null)

    const resultClickHandler = () => {
        const funcResult = getArrayAnalisis(arrayValue.split(','))
        const result = Object.keys(funcResult).map( (k) => {
            return funcResult[k]
        })
        console.log(result)
        setArrAnalisisResult(result)
        //console.log(arrAnalisisResult)
    }

    return (
        <div>
            <form>
                <label>Numbers(separated by ,):
                    <input
                        type="text"
                        value={arrayValue}
                        onChange={(e) => setArrayValue(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={resultClickHandler}>Validate</button>
            <ul>
                { arrAnalisisResult?.map((it) => <li>{it}</li>) }
            </ul>
        </div>
    )
}