import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PupProvider } from './context/PupContext';

ReactDOM.render(
    <React.StrictMode>
        <PupProvider>
            <App />
        </PupProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

//  <Outer >
//     <Inner1 >
//         <Inner2>
//             <Inner3 >
//                 <Inner4 >
//                     <Inner5 theme={theme}></Inner5>
//                 </Inner4>
//             </Inner3>
//         </Inner2>
//     </Inner1>
// </Outer>;
