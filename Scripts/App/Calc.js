window.Calc = {
    sum: function (a,b) {
        if (typeof a === 'string') {
            return (parseInt(a, 10) + parseInt(b, 10)).toString();
        }
        return a+b;
    }
};