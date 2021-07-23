const {
  CircleES5,
  ColoredCircleES5,
  CircleES6,
  ColoredCircleES6,
  Person,
  Student
} = require('./01_classes')

describe('01 - Clases with Javascript', () => {
  const circleES5 = new CircleES5(0,0,5)
  const circleES6 = new CircleES6(0,0,5)

  it('Both have a constructor',()=>{
    expect(circleES5.constructor).toBe(CircleES5)
    expect(circleES6.constructor).toBe(CircleES6)
  })
  
  it('Both are instances of Circle ', () => {
    expect(circleES5 instanceof CircleES5).toBe(true)
    expect(circleES6 instanceof CircleES6).toBe(true)
  })
})

describe('02 - Inheritance with Javascript', () => {

  it('Access the parent constructor with call method in ES5', () => {
    const coloredCircleES5 = new ColoredCircleES5(0,0,5,'Orange')
    expect(coloredCircleES5 instanceof ColoredCircleES5).toBe(true)
    expect(coloredCircleES5.constructor).toBe(CircleES5)
  })
  
  it('Access the parent constructor with super method', () => {
    const coloredCircleES6 = new ColoredCircleES6(0,0,5,'Orange')
    expect(coloredCircleES6 instanceof CircleES6).toBe(true)
    expect(coloredCircleES6.constructor).toBe(ColoredCircleES6)
  })
} )

describe('03 - Person', () => {
  const buster = new Person('Buster')
  it('Every person has a name', () => {
    expect(buster.name).toEqual('Buster')
  })
  it('Every person has a greet() method', () => {
   expect(buster.greet()).toEqual(`Hello I'm ${buster.name}!`) 
  })
  it('Every person is an instance of Person', () => {
    expect(buster.constructor).toEqual(Person)
    expect( buster instanceof Person).toBe(true)
  })
})

describe('04 - Student', () => {
  const student = new Student('Nemo', '5th grade')
  it('Every student has a name', () => {
    expect(student.name).toEqual('Nemo')
  })
  it('Every student has a greet() method', () => {
   expect(student.greet()).toEqual(`Hello I'm ${student.name}! from 5th grade`) 
  })
  it('Every person is an instance of Person', () => {
    expect(student.constructor).toEqual(Student)
    expect(student instanceof Student).toBe(true)
    expect( student instanceof Person).toBe(true)
  })
})
