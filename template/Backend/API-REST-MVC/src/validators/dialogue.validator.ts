// import { body } from 'express-validator';
// import { BaseValidator } from './base.validator';

// class DialogueValidator extends BaseValidator {
//     static getRules = () => {
//         return [
//             body('text')
// 						.isString().withMessage('Le texte ne doit pas être un nombre')
// 						.notEmpty().withMessage('Le champs texte ne doit pas être vide'),
// 						body('pnj')
// 						.isNumeric().withMessage('le pnj doit être un nombre !')
// 						.notEmpty().withMessage('Le champs pnj ne doit pas être vide')
//         ];
//     }
// }
// export { DialogueValidator };