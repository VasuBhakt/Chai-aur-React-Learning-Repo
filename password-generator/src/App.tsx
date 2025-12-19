import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(5)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("0000")
  const [showToast, setShowToast] = useState(false)

  const passwordRef = useRef<HTMLInputElement>(null);

  const copyPasswordToClipboard = useCallback(() => {
    //passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-4 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-white text-center py-4 mx-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-xl bg-white'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 hover:bg-blue-500'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.valueAsNumber) }}
            />
            <label className='text-xl'>Length: {length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1 p-2'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label className='pr-2'>Number allowed</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Character allowed</label>
        </div>
      </div>
      {showToast && (
        <div className="flex justify-center mt-4">
          <div className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg">
            Successfully copied to clipboard!
          </div>
        </div>
      )}
    </>
  )
}

export default App
