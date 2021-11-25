import React, { useEffect, useState } from 'react';

const Filters = () => {
    const [selectorTag, setSelectorTag] = useState("All")

    let elems = ["All", "Men", "Women", 'Kids']
    const [inputVal, setInputVal] = useState('')
    
    useEffect(() => {
        console.log('I called in every changes in doucment');
    })
    useEffect(() => {
        console.log('document is ready');
    }, [])
    useEffect(() => {
        console.log('Tag changed');
    }, [selectorTag])
    useEffect(() => {
        console.log('Inp value changed');
    }, [inputVal])

    return (
        <div className="container mt-3 mb-3 d-flex justify-content-between">
            <div>
                {
                    elems.map((elem, index) => (
                    <span 
                    onClick={() => setSelectorTag(elem)}
                    className={selectorTag == elem ? "btn btn-dark" : "btn btn-light"} key={index}>
                        {elem}
                    </span>))
                }
            </div>
            <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="Search..."></input>
        </div>
    );
};

export default Filters;