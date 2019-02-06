// Test away!
import Display from './Dashboard';
import Controls from './Dashboard';
import { render } from 'react-testing-library';
import React from 'react';
import Dashboard from './Dashboard';

describe('The Dashboard component', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    })
    it('renders the Display component', () => {
        render(<Display />)
    })
    it('renders the Controls component', () => {
        render(<Controls />)
    })
})