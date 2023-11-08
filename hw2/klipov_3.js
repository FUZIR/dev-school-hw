function groupAnagrams(arr){
    const anagrams = {};
    arr.forEach((el)=>{
        const sortedword = el.split('').sort().join('');
        if(!anagrams[sortedword]){
            anagrams[sortedword] = [];
        }
        anagrams[sortedword].push(el);
    })
    return Object.values(anagrams)
}
console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));