const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("./stringUtils");

describe("take a string and number and repeat string same number of times separeated by spaces", () => {
    
    it("handle an empty sting", ()=> {
        expect(repeatNTimesWithSpace("", 0)).toBe("");
        expect(repeatNTimesWithSpace("", 5)).toBe("");
    });

    it("handles a string with 1 or more character", () => {
        expect(repeatNTimesWithSpace("a",1)).toBe("a");
        expect(repeatNTimesWithSpace("a",5)).toBe("a a a a a");
        expect(repeatNTimesWithSpace("abc",5)).toBe("abc abc abc abc abc");
    });
});

describe("take a string and capitalize the first letter and make the left of it lowercase", () => {
    it("handle an empty sting", ()=> {
        expect(capitalizeFirstLetter("")).toBe("");
    });
    
    it("handles a string with 1 or more character", () => {
        expect(capitalizeFirstLetter("a")).toBe("A");
        expect(capitalizeFirstLetter("hello")).toBe("Hello");
        expect(capitalizeFirstLetter("nAmE")).toBe("Name");
    })
})