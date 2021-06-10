// import { body } from 'express-validator';
// import { BaseValidator } from './base.validator';

// class StuffValidator extends BaseValidator {
//     static getRules = () => {
//         return [
//             body('type')
// 						.isString().withMessage('Le type ne doit pas être un nombre')
// 						.notEmpty().withMessage('Le champs type ne doit pas être vide'),
// 						body('poids')
// 						.isNumeric().withMessage('le poids doit être un nombre !')
// 						.notEmpty().withMessage('Le champs poids ne doit pas être vide'),
// 						body('gold')
// 						.isNumeric().withMessage('le gold doit être un nombre !')
// 						.notEmpty().withMessage('Le champs gold ne doit pas être vide'),
// 						body('attaque')
// 						.isNumeric().withMessage('le attaque doit être un nombre !')
// 						.notEmpty().withMessage('Le champs attaque ne doit pas être vide'),
// 						body('defense')
// 						.isNumeric().withMessage('le defense doit être un nombre !')
// 						.notEmpty().withMessage('Le champs defense ne doit pas être vide'),
// 						body('buff')
// 						.isNumeric().withMessage('le buff doit être un nombre !')
// 						.notEmpty().withMessage('Le champs buff ne doit pas être vide'),
// 						body('pnj')
// 						.isNumeric().withMessage('le pnj doit être un nombre !')
// 						.notEmpty().withMessage('Le champs pnj ne doit pas être vide')
//         ];
//     }
// }
// export { StuffValidator };