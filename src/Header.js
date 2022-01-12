import React, { useState, useEffect } from 'react';
import nonniMynd from './assets/img/nonni.png';

function Header() {
    const [texti, setTexti] = useState("");
    useEffect(() => {
        async function typeSentence(sentence, delay = 250) {
            const letters = sentence.split("");
            let i = 0;
            let appendedWords = '';
            while(i < letters.length) {
                await waitForMs(delay);
                appendedWords += letters[i];
                setTexti(appendedWords);
                i++;
            }
            return;
        }
        function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }
        typeSentence('Jón Ingimarsson');
    }, []);

    return(
        <div className='container mx-auto px-4'>
            <div className="grid grid-cols-1 lg:grid-cols-5 py-10">
                <div className='flex items-center justify-center col-span-4'>
                    <h1 className="font-mono text-5xl lg:text-7xl font-bold">{texti}</h1>
                    <span id="input-cursor" className="inline-block w-1 lg:w-2  h-10 lg:h-20 bg-black ml-3 lg:ml-4"></span>
                </div>
                <div className='flex items-center justify-center'>
                    <img className="object-contain rounded-full w-1/3 lg:w-full" src={nonniMynd} alt='header'/>
                </div>
            </div>
        </div>
    )
}

export default Header;