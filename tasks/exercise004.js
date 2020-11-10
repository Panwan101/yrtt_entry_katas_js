// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    // You code here!
    //  assumptions :-punctation is at the end of each word
    //  assumptions :-text does not start with space
    var i;
    var first_ltr = "";
    var first_ltr_flag = 1; // set flag to true for first letter in string
    var rtn_str = "";
    var punctn_str ="";
    var punctn_arr = [",",".","?","!","-",":",";"];
    var cntr = 0;

    for (i of str) {
        cntr+=1;
        if (i != " ") {
            if (Boolean(first_ltr_flag)) {
               // first letter of word
                first_ltr = i;      // store first letter of word
                first_ltr_flag = 0; // set flag to not first letter of word
            } else {
                // not first letter
                switch (i)  {
                    case ".":
                    case ",":
                    case "!":
                    case "?":
                        punctn_str+=i;
                      break;
                    default:
                       rtn_str+=i;
                }
                if (cntr >= (str.length)) {
                   // end of string
                    if (punctn_str.length <= 1) {
                        rtn_str+=first_ltr + "ay" ;
                    } else {
                        rtn_str+=first_ltr + "ay" + punctn_str;
                    }    
                }
            }
        } else {
            // char is space so end of word
            first_ltr_flag = 1;     // so rest flag for next word
            if (punctn_str === "") {
                rtn_str+=first_ltr + "ay" + i;
            } else {
                rtn_str+=first_ltr + "ay" + punctn_str + i;
            }
            punctn_str = "" ;       // reset punctn_str
        }
        
      }
    return rtn_str
}

module.exports = {
    pigLatin
};
