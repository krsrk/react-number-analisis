import {useState} from "react"
import getArrayAnalisis from "./getArrayAnalisis";

export default function ArrayInputForm() {
    const [arrayValue, setArrayValue] = useState('')
    const [arrAnalisisResult, setArrAnalisisResult] = useState(null)

    const resultClickHandler = () => {
        const result = getArrayAnalisis(arrayValue.split(','))
        setArrAnalisisResult(result)
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