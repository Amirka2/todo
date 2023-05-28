import React, {useState} from 'react';
import './ItemAdder.css'
function ItemAdder(props) {
    const addItem = function () {
        let itemText = text;
        setText('');

        props.add(itemText);
    }
    const [text, setText] = useState('');
    return (
        <div className={'item-wrapper'}>
            <input className={'text-input'}
                type={'text'}
                name={'input'}
                value={text}
                onChange={(event => setText(event.target.value))}
            />
            <input id={'add-btn'}
                type={'submit'}
                value={'Add'}
                onClick={addItem}
            />
        </div>
    );
}

export default ItemAdder;