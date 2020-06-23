describe("whatCanIDrink", function() {
    describe("whatCanIDrink function", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(0)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(7)).toBe("Drink Toddy");
        });

        it("should return Drink Coke", function() {
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });

        it("should return Drink Beer", function() {
            expect(whatCanIDrink(19)).toBe("Drink Beer");
        });

        it("should return Drink Whisky", function() {
            expect(whatCanIDrink(55)).toBe("Drink Whisky");
        });
    });
});