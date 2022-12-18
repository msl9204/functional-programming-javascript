const log = console.log

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a)); // f라는 함수에게 위임해서 처리
    }
    return res;
})

const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) res.push(a)
    }
    return res;
})

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc
});

const go = (...args) => reduce((a, f) => f(a), args);