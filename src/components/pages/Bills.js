import React from 'react';
import '../../App.css';
import Invoice from './Invoice';

export default function Bills() {
    return (
        <div className='bills'>
            <h1 className='bills'>ΕΚΔΟΣΗ ΠΕΡΙΟΔΙΚΟΥ ΛΟΓΑΡΙΑΣΜΟΥ</h1>
          <Invoice/>
        </div>

    );
}