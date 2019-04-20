export type Action0 = () => void;
export type Action1<V1> = (a: V1) => void;
export type Action2<V1, V2> = (a: V1, b: V2) => void;
export type Action3<V1, V2, V3> = (a: V1, b: V2, c: V3) => void;
export type Action4<V1, V2, V3, V4> = (a: V1, b: V2, c: V3, d: V4) => void;

export type Func0<TReturn> = () => TReturn;
export type Func1<V1, TReturn> = (a: V1) => TReturn;
export type Func2<V1, V2, TReturn> = (a: V1, b: V2) => TReturn;
export type Func3<V1, V2, V3, TReturn> = (a: V1, b: V2, c: V3) => TReturn;
export type Func4<V1, V2, V3, V4, TReturn> = (a: V1, b: V2, c: V3, d: V4) => TReturn;
