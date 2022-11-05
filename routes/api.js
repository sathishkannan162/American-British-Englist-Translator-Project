'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if (req.body.hasOwnProperty('locale') && req.body.hasOwnProperty('text')) {
        if (req.body.text == '') {
          res.json({
            error: 'No text to translate'
          })
        }
        else {
          if (req.body.locale == 'american-to-british') {
            let translation = translator.translateToBritish(req.body.text);
            if (translation == req.body.text) {
              res.json({
                translation: 'Everything looks good to me!',
                text: req.body.text
              })
            }
            else {
              res.json({
                translation: translation,
                text: req.body.text
              })
            }
          }
          else if (req.body.locale == 'british-to-american') {
            let translation = translator.translateToAmerican(req.body.text);
            if (translation == req.body.text) {
              res.json({
                translation: 'Everything looks good to me!',
                text: req.body.text
              })
            }
            else {
              res.json({
                translation: translation,
                text: req.body.text
              })
            }
          }
          else {
            res.json({
              error: 'Invalid value for locale field'
            })
          }
        }
      }
      else {
        res.json({
          error: 'Required field(s) missing'
        })
      }
    });
};
