function paloFinder(string) {

    // empty array to store palindromes
    paloArray = [];

    // for each character, we look across the whole string for a repetition; when found, we slice
    // that bit out of the string and further test if it is a palindrome
    for (x = 0; x < string.length; x++) {
        for (y = x + 1; y < string.length; y++) {
            if (string[x] === string[y]) {
                let paloString = string.slice(x, y + 1);
                // our paloString now is a string that starts and ends with the same character
                let stringReverse = paloString.split('').reverse().join('');
                // another variable with the reverse of our paloString
                if (paloString === stringReverse) {
                    paloArray.push(paloString);
                    // only if we have a palindrome we want to include it in our array
                }
            }
        }
    }
    // find the longest palindrome stored in the array
    let longest = paloArray.reduce(function (a, b) {
        return a.length > b.length ? a : b
    }, '');
    // console log the length in numbers
    longestinNr = longest.length;
    console.log(longest);
    console.log(longestinNr);
}

paloFinder('redder');
paloFinder('1redder2');
paloFinder('redderrotavatorabba');
paloFinder('liveontimeemitnoevilsexesredderrotavatorpullupifipullupabbadeleveledrelevelerdetartratedamanaplanacanalpanamasumsarenotsetasatestonerasmus');

