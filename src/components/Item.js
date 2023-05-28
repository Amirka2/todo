import React, {useState} from 'react';

function Item(props) {
    const [checked, setChecked] = useState(false);
    return (
        <div className={'item-wrapper'}>
            <input className={'checkbox'} type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            <div className={'text'}>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Item;