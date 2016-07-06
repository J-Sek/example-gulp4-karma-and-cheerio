window.CalcExt = {
    init: function () {
        var oldSum = Calc.sum;
        Calc.sum = function (a,b) {
            if (typeof a === 'string') {
                return (parseInt(a, 10) + parseInt(b, 10)).toString();
            }
            if (a === 0) {
                return b;
            }
            if (b === 0) {
                return a;
            }
            return oldSum(a,b);
        }
    }    
}

CalcExt.init();