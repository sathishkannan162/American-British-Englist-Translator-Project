const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('Translate to British English', function () {
        test('Translate Mangoes are my favorite fruit.', function () {
            assert.equal(translator.translateToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.');
        });
        test('Translate I ate yogurt for breakfast.', function () {
            assert.equal(translator.translateToBritish('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.');
        });
        test('Translate We had a party at my friend\'s condo.', function () {
            assert.equal(translator.translateToBritish('We had a party at my friend\'s condo.'), 'We had a party at my friend\'s flat.');
        });
        test('Translate Can you toss this in the trashcan for me?', function () {
            assert.equal(translator.translateToBritish('Can you toss this in the trashcan for me?'), 'Can you toss this in the bin for me?');
        });
        test('Translate The parking lot was full.', function () {
            assert.equal(translator.translateToBritish('The parking lot was full.'), 'The car park was full.');
        });
        test('Translate Like a high tech Rube Goldberg machine.', function () {
            assert.equal(translator.translateToBritish('Like a high tech Rube Goldberg machine.'), 'Like a high tech Heath Robinson device.');
        });
        test('Translate To play hooky means to skip class or work.', function () {
            assert.equal(translator.translateToBritish('To play hooky means to skip class or work.'), 'To bunk off means to skip class or work.');
        });
        test('Translate No Mr. Bond, I expect you to die.', function () {
            assert.equal(translator.translateToBritish('No Mr. Bond, I expect you to die.'), 'No Mr Bond, I expect you to die.');
        });
        test('Translate Dr. Grosh will see you now.', function () {
            assert.equal(translator.translateToBritish('Dr. Grosh will see you now.'), 'Dr Grosh will see you now.');
        });
        test('Translate Lunch is at 12:15 today.h', function () {
            assert.equal(translator.translateToBritish('Lunch is at 12:15 today.h'), 'Lunch is at 12.15 today.');
        });

    });
    suite('Translate to American English', function () {
        test('Translate We watched the footie match for a while.', function() {
            assert.equal(translator.translateToAmerican('We watched the footie match for a while.'),'We watched the soccer match for a while.');
        });
        test('Translate Paracetamol takes up to an hour to work.', function() {
            assert.equal(translator.translateToAmerican('Paracetamol takes up to an hour to work.'),'Tylenol takes up to an hour to work.');
        });
        test('Translate First, caramelise the onions.', function() {
            assert.equal(translator.translateToAmerican('First, caramelise the onions.'),'First, caramelize the onions.');
        });
        test('Translate I spent the bank holiday at the funfair.', function() {
            assert.equal(translator.translateToAmerican('I spent the bank holiday at the funfair.'),'I spent the public holiday at the carnival.');
        });
        test('Translate I had a bicky then went to the chippy.', function() {
            assert.equal(translator.translateToAmerican('I had a bicky then went to the chippy.'),'I had a cookie then went to the fish-and-chip shop.');
        });
        test('Translate I\'ve just got bits and bobs in my bum bag.', function() {
            assert.equal(translator.translateToAmerican('I\'ve just got bits and bobs in my bum bag.'),'I\'ve just got odds and ends in my fanny pack.');
        });
        test('Translate The car boot sale at Boxted Airfield was called off.', function() {
            assert.equal(translator.translateToAmerican('The car boot sale at Boxted Airfield was called off.'),'The swap meet at Boxted Airfield was called off.');
        });
        test('Translate Have you met Mrs Kalyani?', function() {
            assert.equal(translator.translateToAmerican('Have you met Mrs Kalyani?'),'Have you met Mrs. Kalyani?');
        });
        test('Translate Prof Joyner of King\'s College, London.', function() {
            assert.equal(translator.translateToAmerican('Prof Joyner of King\'s College, London.'),'Prof. Joyner of King\'s College, London.');
        });
        test('Translate Tea time is usually around 4 or 4.30.', function() {
            assert.equal(translator.translateToAmerican('Tea time is usually around 4 or 4.30.'),'Tea time is usually around 4 or 4:30.');
        });
    });
    suite('Highlight translation', function () {

    })
});
