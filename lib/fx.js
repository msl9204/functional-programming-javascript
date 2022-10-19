const log = console.log

const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a)); // f라는 함수에게 위임해서 처리
    }
    return res;
}

const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) res.push(a)
    }
    return res;
}

const reduce = (f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc
};
