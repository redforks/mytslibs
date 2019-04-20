import { getConfig, setConfig } from './config';

declare module './config' {
  export interface TestConfig {
    foo: {
      bar: string;
      misc: string;
    };

    Counts: number;
  }

  export interface Config {
    test?: TestConfig;
  }
}

it('ui.title', () => {
  setConfig({
    app: {
      title: 'foo',
    },
    test: {
      foo: { bar: 'foobar', misc: 'origin' },
      Counts: 3,
    },
  });
  expect(getConfig().app.title).toEqual('foo');
  // tslint:disable-next-line:no-non-null-assertion
  expect(getConfig().test!.foo).toEqual({ bar: 'foobar', misc: 'origin' });

  setConfig({
    test: {
      foo: { bar: 'blah' },
    },
  });
  expect(getConfig().app.title).toEqual('foo');
  // tslint:disable-next-line:no-non-null-assertion
  expect(getConfig().test!.foo).toEqual({ bar: 'blah', misc: 'origin' });
});
