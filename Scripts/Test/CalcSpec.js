describe('[Calc]', function () {
   it('should be able to sum 2 variables', function () {
       expect(Calc.sum(4,9)).toBe(13);
   });
   it('should be operate on numbers', function () {
       expect(Calc.sum('4','9')).toBe('13');
   });
});