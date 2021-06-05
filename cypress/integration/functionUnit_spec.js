function getTotalPages(count) {
    return Math.ceil(count / 15)  
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


describe('Unit test for some functions', () => {
    context('math', () => {
        it('Takes a number divides it by 15 and returns an integer >= the result', () => {
            expect(getTotalPages(101)).to.eq(7)
        })
    })

    function stringCapitalization(initialString, output){
        expect(capitalizeFirstLetter(initialString)).to.eq(output)
    }

    it('returns string with the first characther capitalized', () => {
        stringCapitalization('CAPITAL', 'Capital')
    })
    it('returns string with the first characther capitalized', () => {
        stringCapitalization('small', 'Small')
    })
})