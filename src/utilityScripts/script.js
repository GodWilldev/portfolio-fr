// module.exports = class Script{

//     static limit_char(text){ // function to limit the number of words of a text
//         var words = text.split(" ");
//         var limit = Math.min(30, words.length);
//         var new_text = '';
//         for(let i=0; i<limit; i++){
//             new_text += ' ' + words[i]; 
//         }
//         new_text +='...';
//         return new_text;
//     }

//     static kebabCase(str) {//convert string to kebab case string
//         return(str
//             .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//             .join('-')
//             .toLowerCase()
//         );
//     }
//     static camelCase(str) {
//         return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
//         {
//             return index === 0 ? word.toLowerCase() : word.toUpperCase();
//         }).replace(/\s+/g, '');
//     }
        
// };