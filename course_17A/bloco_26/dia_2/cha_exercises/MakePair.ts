import Pair from "./interfaces/InterfaceMakePair";

type PairType <A, B> = {
  first: A;
  second: B;
}

function makePair<F, S>() {
  let pair: PairType<F, S>;
  function getPair() {
    return pair;
  };

  function setPair(x: F, y: S) {
    pair = {
      first: x,
      second: y
    }
  }
  return { getPair, setPair }
};

const { getPair, setPair } = makePair<number, string | number>();

setPair(1, 'foo');
console.log(getPair());

setPair(3, 4);
console.log(getPair());