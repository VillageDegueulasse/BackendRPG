import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class LootsValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('types')
						.isString().withMessage('Le types ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs types ne doit pas être vide'),
						body('poids')
						.isNumeric().withMessage('le poids doit être un nombre !')
						.notEmpty().withMessage('Le poids ne doit pas être vide'),
						body('gold')
						.isNumeric().withMessage('la gold doit être un nombre !')
						.notEmpty().withMessage('La gold ne doit pas être vide'),
						body('monsters')
						.isNumeric().withMessage('le monsters doit être un nombre !')
						.notEmpty().withMessage('Le monsters ne doit pas être vide'),
						body('inventaire')
						.isNumeric().withMessage('l\'inventaire doit être un nombre !')
						.notEmpty().withMessage('l\'inventaire ne doit pas être vide')
        ];
    }
}
export { LootsValidator };