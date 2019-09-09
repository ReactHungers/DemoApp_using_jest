import Demo from './Demo';

test('test sum of 3 and 5', ()=> {
    var obj = {
        firstVal: 3,
        secondVal: 5
    }
    expect(Demo(obj)).toEqual(8)
})