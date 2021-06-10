import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class PersonnageValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('name')
						.isString().withMessage('Le nom ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs nom ne doit pas être vide'),
						body('image')
						.isString().withMessage('l\'image ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs image ne doit pas être vide'),
						body('heroes')
						.isNumeric().withMessage('le heroes doit être un nombre !')
						.notEmpty().withMessage('Le heroes ne doit pas être vide')
        ];
    }
}
export { PersonnageValidator };