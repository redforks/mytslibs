import { DeepPartial, toKeyedObject } from './index';

interface Foo {
  NumProp: number;
  SubItem: Foo;
  SubItemArray: Foo[];
}

type PartialFoo = DeepPartial<Foo>;

test('DeepPartial', () => {
  const foo: PartialFoo = {};
  foo.SubItem = {
    NumProp: 3,
  };

  foo.SubItemArray = [{
    SubItemArray: [],
  }];
});

it('toKeyedObject', () => {
  expect(toKeyedObject(1, [])).toStrictEqual({});
  expect(toKeyedObject({}, ['a', 'b'])).toStrictEqual({ a: {}, b: {} });
});
