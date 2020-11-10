// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    // Your code here!

    var obj = {};
    var duplicates = [];
    var noDup = [];
    var sumUniques = 0;

    for(var i = 0; i < arr.length; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
            noDup.push(arr[i]);  //add to NoDuplicates array
            sumUniques+=arr[i]
        } else {
            duplicates.push(arr[i]);  //add to Duplicates array
        }
    }

    var unique = noDup.filter(function(item, index){
        if(!duplicates.includes(noDup[index])){
            return noDup[index];
        }
    });
    var sum_noDup = noDup.reduce((a, b) => {
        return a + b;
        });
        sum_duplicates = duplicates.reduce((a, b) => {
        return a + b;
        });
    var sum = sum_noDup - sum_duplicates;

    return sum
}

module.exports = {
    singles
};
