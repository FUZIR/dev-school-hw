function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let result = [];

        for(let i = 0; i < str.length; i++){
             let code_index = (abc.indexOf(str[i]) + abc.indexOf(key[i]) % abc.length);
             console.log(code_index);

       }
    };
    this.decode = function (str) {
        //...
    };
}

abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);
console.log(c.encode("codewarsasd"))
