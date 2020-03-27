import React from 'react'
import EffectHook from './EffectHook'
import Form from './reactHook';
import Example from './stateHook';

export default function Hook() {
    return (
        <div>
            <h2 className="style" style={{background:'red', color:'yellow'}}> Sử dụng React -hook</h2>
              <EffectHook />
            <Form />
            <Example />
          
        </div>
    )
}
