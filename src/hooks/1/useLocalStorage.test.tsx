import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { act } from 'react-dom/test-utils';

import Component from './LocalStorageComponent'

test('Allows you to get your lucky number', () => {
    render(<Component />);
    const luckyNumberSpan = screen.getByTestId("luckyNumberSpan")
    const getLuckyNumberBtn = screen.getByTestId("getLuckyNumberBtn")
    
    screen.debug()
    
    expect(luckyNumberSpan).toHaveTextContent('0');

    act(()=>{
      userEvent.click(getLuckyNumberBtn);
    })
    
    expect(luckyNumberSpan).toHaveTextContent(/^([1-9])$/);
    
    screen.debug()
    
  })
