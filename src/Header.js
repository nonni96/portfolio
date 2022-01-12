import React, { useState, useEffect } from 'react';
import nonniMynd from './assets/img/nonni.png';

function Header() {
    const [fullname, setFullname] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [higherCursor, setHigherCursor] = useState(true);
    const [lowerCursor, setLowerCursor] = useState(false);
    useEffect(() => {
        async function typeSentence(sentence, type, delay = 250) {
            const letters = sentence.split("");
            let i = 0;
            let appendedWords = '';
            while(i < letters.length) {
                await waitForMs(delay);
                appendedWords += letters[i];
                if(type === 'higher') {
                    setFullname(appendedWords);
                }
                else if (type === 'lower') {
                    setJobTitle(appendedWords);
                }
                i++;
            }
            return;
        }
        function waitForMs(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function callFunctions() {
            await typeSentence('Jón Ingimarsson', 'higher');
            await waitForMs(200);
            setHigherCursor(false);
            setLowerCursor(true);
            await typeSentence('Veb Developer', 'lower');
        }
        callFunctions();
    }, []);

    return(
        <div className='container mx-auto px-4'>
            <div className="grid grid-cols-1 lg:grid-cols-5 py-10">
                <div className='flex flex-col items-start justify-center col-span-4'>
                    <div className='flex pb-2'>
                        <h1 className="font-mono text-5xl lg:text-7xl font-bold">{fullname}</h1>
                        {higherCursor ? <span id="input-cursor" className="inline-block w-1.5 lg:w-2  h-12 lg:h-20 bg-black ml-3 lg:ml-4"></span> : ''}
                    </div>
                    <div className='flex'>
                        <h3 className="font-mono text-3xl lg:text-5xl font-bold">{jobTitle}</h3>
                        {lowerCursor ? <span id="input-cursor" className="inline-block w-1 lg:w-1.5  h-8 lg:h-12 bg-black ml-1 lg:ml-3"></span> : ''}
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img className="object-contain rounded-full w-1/3 lg:w-full" src={nonniMynd} alt='header'/>
                </div>
            </div>
        </div>
    )
}

export default Header;