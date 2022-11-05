const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    parserInput(sentence) {
        return sentence.split(' ');
    }

    translateToBritish(sentence) {
        let words = this.parserInput(sentence);
        for (let i = 0; i < words.length; i++) {
            let rem = '';
            if (!/^\w+$/.test(words[i])) {
                let newWord = words[i].slice(0, -1);
                rem = words[i].slice(-1);
                words[i] = newWord;
            }
            if (americanToBritishSpelling.hasOwnProperty(words[i])) {
                words[i] = americanToBritishSpelling[words[i]];
            } else if (americanOnly.hasOwnProperty(words[i])) {
                words[i] = americanOnly[words[i]];
            }
            words[i] += rem;
        }
        return words.join(' ');
    }
    translateToAmerican(sentence) {
        let words = this.parserInput(sentence);
        let britishWords = Object.values(americanToBritishSpelling);
        let americanWords = Object.keys(americanToBritishSpelling);
        let index;
        let rem;
        let newWord;
        for (let i = 0; i < words.length; i++) {
            rem = '';
            if (!/^\w+$/.test(words[i])) {
                newWord = words[i].slice(0, -1);
                rem = words[i].slice(-1);
                words[i] = newWord;
            }
            index = britishWords.indexOf(words[i]);
            if (  index !== -1) {
                words[i] = americanWords[index];
            } else if (britishOnly.hasOwnProperty(words[i])) {
                words[i] = britishOnly[words[i]];
            }
            words[i] += rem;
        }
        return words.join(' ');
    }
}

module.exports = Translator;
