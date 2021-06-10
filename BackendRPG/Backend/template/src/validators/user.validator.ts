import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class UserValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('name')
						.isString().withMessage('Le nom ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs nom ne doit pas être vide'),
						body('email')
						.isString().withMessage('l\'email ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs email ne doit pas être vide'),
						body('password')
						.isString().withMessage('le password ne doit pas être un nombre')
						.notEmpty().withMessage('Le password ne doit pas être vide'),
						body('heroes')
						.isNumeric().withMessage('le heroes doit être un nombre !')
						.notEmpty().withMessage('Le heroes ne doit pas être vide'),
						body('partie')
						.isNumeric().withMessage('la partie doit être un nombre !')
						.notEmpty().withMessage('La partie ne doit pas être vide')
        ];
    }
}
export { UserValidator };