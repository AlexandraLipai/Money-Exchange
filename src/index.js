// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        console.log(obj);
        return obj;
    }
    else if (currency <= 10000 && currency > 0) {
        obj = {
            H: 0,
            Q: 0,
            D: 0,
            N: 0,
            P: 0
        };
        obj.H = Math.floor(currency / 50);
        obj.Q = Math.floor((currency - obj.H * 50) / 25);
        obj.D = Math.floor((currency - obj.H * 50 - obj.Q * 25) / 10);
        obj.N = Math.floor((currency - obj.H * 50 - obj.Q * 25 - obj.D * 10) / 5);
        obj.P = (currency - obj.H * 50 - obj.Q * 25 - obj.D * 10 - obj.N * 5);

        if (obj.H == 0) {
            delete obj.H
        }
        if (obj.Q == 0) {
            delete obj.Q
        }
        if (obj.D == 0) {
            delete obj.D
        }
        if (obj.N == 0) {
            delete obj.N
        }
        if (obj.P == 0) {
            delete obj.P
        }

        return obj;
    }

    else {
        return obj;
    }
}
