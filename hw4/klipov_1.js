function VigenèreCipher(key, abc) {
    const mykey = key;
    this.encode = function (str) {
        key = adjustKey(mykey,str);
        let result = "";
        let i = 0;
        while(i < str.length) {
            if(abc.includes(str[i]) && str[i].toLowerCase() === str[i]){
                let code_index = (abc.indexOf(str[i]) + abc.indexOf(key[i])) % abc.length;
                if(code_index >= abc.length){
                    code_index = code_index - abc.length;
                }
                result+=abc[code_index];
                i++;
            }
            else {
                result+=str[i];
                i++
            }
        }

        return result;
        }

        this.decode = function (str) {
            key = adjustKey(mykey,str);
            let result = "";
            let i = 0;
            while(i < str.length) {
                if(abc.includes(str[i]) && str[i].toLowerCase() === str[i]){
                    let code_index = (abc.indexOf(str[i]) - abc.indexOf(key[i])) % abc.length;
                    // console.log(code_index)
                    if(code_index < 0){
                        code_index+= abc.length;
                    }
                    else if(code_index >= abc.length){
                        code_index = code_index - abc.length;
                    }
                    result+=abc[code_index];
                    i++;
                }
                else {
                    result+=str[i];
                    i++
                }
            }
            console.log(key)
            return result;
        };
        function adjustKey(key, str) {
            let extendedKey = key;
            while (extendedKey.length < str.length) {
                extendedKey += key;
            }
            return extendedKey.slice(0, str.length);
        }
    }

abc = "abcdefghijklmnopqrstuvwxyz";
key = "pizza"
c = new VigenèreCipher(key, abc);
// console.log(c.decode('javascript'))
console.log(c.encode('javascript'))

