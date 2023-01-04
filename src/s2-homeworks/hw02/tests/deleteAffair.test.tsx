import React from 'react'
import { AffairType, deleteAffair } from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        { _id: 1, name: 'React', priority: 'high' },
        { _id: 2, name: 'Anime', priority: 'low' },
        { _id: 3, name: 'Games', priority: 'low' },
        { _id: 4, name: 'Work', priority: 'high' },
        { _id: 5, name: 'HTML & CSS', priority: 'middle' },
    ]
})

test('delete 0', () => {
    const newState = deleteAffair(initialState, 0)
    expect(newState.length).toBe(5)
})
test('delete 1', () => {
    const newState = deleteAffair(initialState, 1)
    expect(newState.length).toBe(4)
})
test('delete 3', () => {
    const newState = deleteAffair(initialState, 3)
    expect(newState.length).toBe(4)
})
test('delete 5', () => {
    const newState = deleteAffair(initialState, 5)
    expect(newState.length).toBe(4)
})
test('delete 6', () => {
    const newState = deleteAffair(initialState, 6)
    expect(newState.length).toBe(5)
})
