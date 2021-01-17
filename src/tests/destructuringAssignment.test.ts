import React from 'react';


type ManType ={
    name: string
    age: number
    lessons: Array<{title:string}>
    address: {
        street: {
            title: string
        }
    }
}

let props:ManType;
beforeEach(() => {
        props = {
            name: 'Tom',
            age: 22,
            lessons: [{title: '1'}, {title: '2'}],
            address: {
                street: {
                    title: 'Odesskaya'

                }
            }
        }
    }
)
test('destrucuring', () => {

    //const {age:a, lessons:l} = props
    //const {title} = props.address.street
    const {age, lessons, address:{street:{title}}}=props


    expect(age).toBe(22)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Odesskaya')
})

