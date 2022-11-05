const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    this.timeout(5000);
    suite('POST /api/translate =>', function () {
        test('valid text and local field gives translated text', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite",
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'translation');
                    assert.property(res.body, 'submission');
                    assert.equal(res.body.submission, 'Mangoes are my favorite');
                    assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span>');
                });
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favourite",
                    locale: 'british-to-american'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'translation');
                    assert.property(res.body, 'submission');
                    assert.equal(res.body.submission, 'Mangoes are my favourite');
                    assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favorite</span>');
                    done();
                });

        });
        test('valid text and invalid local field', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite",
                    locale: 'merry'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Invalid value for locale field');
                    done();
                });

        });
        test('missing text field', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Required field(s) missing');
                    done();
                });
        });
        test('missing locale field', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favorite"
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'Required field(s) missing');
                    done();
                });
        });
        test('empty text field', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: '',
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'error');
                    assert.equal(res.body.error, 'No text to translate');
                    done();
                });

        });
        test('valid text with no need for translation', function (done) {
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Mangoes are my favourite",
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(err);
                    }
                    assert.equal(res.status, 200);
                    assert.isObject(res.body);
                    assert.property(res.body, 'translation');
                    assert.property(res.body, 'submission');
                    assert.equal(res.body.submission, 'Mangoes are my favorite');
                    assert.equal(res.body.translation, 'Everything looks good to me!');
                    done();
                });

        });
    });


});
