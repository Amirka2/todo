import React, {useState} from 'react';
import './Item.css';

function Item(props) {
    const [checked, setChecked] = useState(false);
    return (
        <div className={'item-wrapper'}>
            <input className={'checkbox'} type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
            <div className={'text'}>
                {props.text}
            </div>
        </div>
    );
}

export default Item;