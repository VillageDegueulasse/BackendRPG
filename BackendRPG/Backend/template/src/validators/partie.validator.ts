import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class PartieValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('name')
						.isString().withMessage('Le nom ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs nom ne doit pas être vide'),
						body('pnj')
						.isNumeric().withMessage('le pnj doit être un nombre !')
						.notEmpty().withMessage('Le pnj ne doit pas être vide'),
						body('monsters')
						.isNumeric().withMessage('le monsters doit être un nombre !')
						.notEmpty().withMessage('Le monsters ne doit pas être vide'),
						body('user')
						.isNumeric().withMessage('la user doit être un nombre !')
						.notEmpty().withMessage('La user ne doit pas être vide'),
						body('heroes')
						.isNumeric().withMessage('la heroes doit être un nombre !')
						.notEmpty().withMessage('La heroes ne doit pas être vide')
        ];
    }
}
export { PartieValidator };