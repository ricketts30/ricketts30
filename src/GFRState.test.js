import React from 'react';
import ReactDOM from 'react-dom';

import GFRState from './GFRState';

it(
    'GFRState constructor <GFRState /> without crashing', 
    () => {
        var obj = <GFRState />;
    }
);

it(
    'GFRState constructor new GFRState() without crashing', 
    () => {
        var obj = new GFRState();
        expect(obj.getIsValid()).toBe(false);
    }
);

it(
    'GFRState setToStart isValid() is true',
    () => {
        var obj = new GFRState();
        obj.setToStart( () => {
            expect(obj.getIsValid()).toBe(true); 
        });
    }
)

it(
    'GFRState setToStart getFenNotation() is F2F3RF2,0,F',
    () => {
        var obj = new GFRState();
        obj.setToStart( () => { 
            expect(obj.getFenNotation()).toBe('F2F3RF2,0,F'); 
        });
    }
)

it(
    'GFRState setFenNotation(1F1F3RF2,0,R) is valid',
    () => {
        var obj = new GFRState();
        obj.setFenNotation('1F1F3RF2,0,R' , () => {
            expect(obj.getIsValid()).toBe(true);
        });
    }
)
