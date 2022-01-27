import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { act } from 'react-dom/test-utils';

import LocalStorageComponent from './LocalStorageComponent'

describe('Local Storage component', () => {
  test('Validates that the lucky number rendered after the value has changed in the Local Storage', () => {
    render(<LocalStorageComponent />);
    const luckyNumberSpan = screen.getByTestId("luckyNumberSpan")
    const getLuckyNumberBtn = screen.getByTestId("getLuckyNumberBtn")
    
    const validateLuckyNumberFormat = () => {
      expect(luckyNumberSpan).toHaveTextContent(/^([1-9])$/);
    }
    
    expect(luckyNumberSpan).toHaveTextContent('0');
  
    act(()=>{
      userEvent.click(getLuckyNumberBtn);
    })

    validateLuckyNumberFormat();

    act(()=>{
      userEvent.click(getLuckyNumberBtn);
    })

    validateLuckyNumberFormat();  
  });


test('Validates the lucky number rendered does not change when other values change in the local storage', () => {
  render(<LocalStorageComponent />);
  const luckyNumberSpan = screen.getByTestId("luckyNumberSpan")
  const getLuckyNumberBtn = screen.getByTestId("getLuckyNumberBtn")
  const getRandomAgeBtn = screen.getByTestId("getRandomAgeBtn")

  const validateLuckyNumber = () => {
    expect(luckyNumberSpan).toHaveTextContent(/^([1-9])$/);
  }
  
  act(()=>{
    userEvent.click(getLuckyNumberBtn);
  })

  validateLuckyNumber();

  const currentLuckyNumber = luckyNumberSpan.textContent || "";

  act(()=>{
    userEvent.click(getRandomAgeBtn);
  })
  
  // Validate that it keeps the original lucky number despite changes in other keys in the local storage
  expect(luckyNumberSpan).toHaveTextContent(currentLuckyNumber);

  act(()=>{
    userEvent.click(getRandomAgeBtn);
  })

  // Validate that it keeps the original lucky number despite changes in other keys in the local storage
  expect(luckyNumberSpan).toHaveTextContent(currentLuckyNumber);
  

  act(()=>{
    userEvent.click(getRandomAgeBtn);
  })

  validateLuckyNumber();    
})


});
