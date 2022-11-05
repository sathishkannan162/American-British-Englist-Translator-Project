const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    parserInput(sentence) {
        return sentence.split(' ');
    }

    translateToBritish(sentence) {
        let americanSpellKeys = Object.keys(americanToBritishSpelling);
        let americanSpellVals = Object.values(americanToBritishSpelling);
        let americanOnlyKeys = Object.keys(americanOnly);
        let americanOnlyVals = Object.values(americanOnly);
        let americanTitleKeys = Object.keys(americanToBritishTitles);
        let americanTitleVals = Object.values(americanToBritishTitles);
        let newSentence = sentence.concat('');

        for (let i=0; i<americanSpellKeys.length; i++) {
            let match = '(?<!-)'+americanSpellKeys[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            newSentence = newSentence.replace(regex,'<span class="highlight">'+americanSpellVals[i]+'</span>'+'$1');
            
        }
        for (let i=0; i<americanOnlyKeys.length; i++) {
            let match = '(?<!-)'+americanOnlyKeys[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            newSentence = newSentence.replace(regex,'<span class="highlight">'+americanOnlyVals[i]+'</span>'+'$1');
        }
        for (let i=0; i<americanTitleKeys.length; i++) {
            
            let match = americanTitleKeys[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            americanTitleVals[i] = americanTitleVals[i][0].toUpperCase() + americanTitleVals[i].slice(1);
            newSentence = newSentence.replace(regex,'<span class="highlight">'+americanTitleVals[i]+'</span>'+'$1');
        }
        newSentence = newSentence.replace(/(\d+)\:(\d+)/g,'<span class="highlight">$1.$2</span>')
        return newSentence;
    }
    translateToAmerican(sentence) {
        let americanSpellKeys = Object.keys(americanToBritishSpelling);
        let americanSpellVals = Object.values(americanToBritishSpelling);
        let britishOnlyKeys = Object.keys(britishOnly);
        let britishOnlyVals = Object.values(britishOnly);
        let americanTitleKeys = Object.keys(americanToBritishTitles);
        let americanTitleVals = Object.values(americanToBritishTitles);
        let newSentence = sentence.concat('');
        for (let i=0; i<americanSpellVals.length; i++) {
            let match = '(?<!-)'+americanSpellVals[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            newSentence = newSentence.replace(regex,'<span class="highlight">'+americanSpellKeys[i]+'</span>'+'$1');
            
        }
        for (let i=0; i<britishOnlyKeys.length; i++) {
            let match = '(?<!-)'+britishOnlyKeys[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            newSentence = newSentence.replace(regex,'<span class="highlight">'+britishOnlyVals[i]+'</span>'+'$1');
        }
        for (let i=0; i<americanTitleVals.length; i++) {
            
            let match = americanTitleVals[i]+'([\\W])';
            let regex = new RegExp(match,'gi');
            americanTitleKeys[i] = americanTitleKeys[i][0].toUpperCase() + americanTitleKeys[i].slice(1);
            newSentence = newSentence.replace(regex,'<span class="highlight">'+americanTitleKeys[i]+'</span>'+'$1');
        }
        newSentence = newSentence.replace(/(\d+)\.(\d+)/g,'<span class="highlight">$1:$2</span>')
        return newSentence;
    }
}

module.exports = Translator;
