import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const [info, setInfo] = useState({Amount:"", From:units[0].factor, To:units[0].factor})
  const onChange = (e) =>{
    setInfo(prevValue => ({...prevValue, [e.target.id.split("-")[0]]:e.target.value}))
  }
  const convert = () => {
    let value = Number(info.Amount)*Number(info.From)/Number(info.To);
    setResult(value)
  }
  return (
    <>
      <div className="converter-form">

        <Input label={"Amount"} onChange={onChange}/>
        <div className="row">
          <Select label={"From"} onChange={onChange} items={units} />
          <Select label={"To"} onChange={onChange} items={units} />
          <button onClick={convert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
