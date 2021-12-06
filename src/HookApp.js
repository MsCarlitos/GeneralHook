import React from 'react'
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import MultipeCustomHook from './components/03-examples/MultipeCustomHook'
import FocusScreen from './components/04-useRef/FocusScreen'
import RealExampleRef from './components/04-useRef/RealExampleRef'
import Layout from './components/05-useLayoutEffect/Layout'
import CallbackHook from './components/06-memos/CallbackHook'
import MemoHook from './components/06-memos/MemoHook'
import Memorize from './components/06-memos/Memorize'
import { Padre } from './components/07-tarea-memo/Padre'

const HookApp = () => {
    return (
        <div>
            <h1 className='centrar'>HookApp</h1>
            <hr /> <hr /> <hr />

            {/* useState */}
            <h2 className='centrar'>useState</h2>

            <hr />
            <CounterApp />
            <hr />
            <CounterWithCustomHook />

            <br /><br /><br />
            <hr /><hr /><hr />
            
            {/* useEffect */}
            <h2 className='centrar'>useEffect</h2>
            <hr />
            <SimpleForm />
            <hr />
            <FormWithCustomHook />

            <br /><br /><br />
            <hr /><hr /><hr />

            {/* Hook Personalizado useFetch  */}
            <h2 className='centrar'>useFetch</h2>
            <h3>Custom Hook!!!!</h3>
            <MultipeCustomHook />
            
            <br /><br /><br />
            <hr /><hr /><hr />

            {/* useRef */}
            <h2 className='centrar'>useRef</h2>
            <FocusScreen />
            <hr />
            <RealExampleRef/>
            
            <br /><br /><br />
            <hr /><hr /><hr />

            {/* useLayoutEffect */}
            <h2 className='centrar'>useLayoutEffect</h2>
            <Layout />
            
            <br /><br /><br />
            <hr /><hr /><hr />

            {/* Memo */}
            <h2 className='centrar'> Memo </h2>
            <h3>Memorize</h3>
            <Memorize/>
            
            <br /><br /><br />
            <hr /><hr /><hr />

            {/* useMemo */}
            <h2 className='centrar'> useMemo </h2>
            <h3>Memorize with useMemo</h3>
            <MemoHook />
            <hr />
            <CallbackHook/>

            <br /><br /><br />
            <hr /><hr /><hr />

            <h2 className='centrar'> Tarea Memorize </h2>
            <Padre/>
            

        </div>
    )
}

export default HookApp
