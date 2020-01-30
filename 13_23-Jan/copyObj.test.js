import cloneObj from './copyObj';

describe('clone an Object', () => {
  test('clone the value for any object', () => {
    let object1 = {
      a: 1,
      b: {
        c: 2
      }
    };
    let object2 = cloneObj(object1);
    expect(object2).toEqual(object1);
  });

  test('cloned value after original value is updated', () => {
    let object1 = {
      a: 0,
      b: {
        c: 0,
        e: {
          f: 0
        }
      }
    };
    let object2 = cloneObj(object1);
    object1.b.c = 4;
    object1.b.e.f = 100;
    expect(object2).toEqual(object1);
  });

  test('cloned value after original value has new prototype object', () => {
    let object1 = {
      a: 1,
      b: {
        c: 2
      }
    };
    let object2 = cloneObj(object1);
    object1.__proto__.d = '2';
    expect(object2.d).toEqual('2');
  });
});
