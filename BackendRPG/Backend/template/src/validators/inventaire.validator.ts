import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class InventaireValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('nom')
						.isString().withMessage('Le nom ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs nom ne doit pas être vide'),
						body('poids')
						.isNumeric().withMessage('le poids doit être un nombre !')
						.notEmpty().withMessage('Le champs poids ne doit pas être vide'),
						body('stuff')
						.isNumeric().withMessage('le stuff doit être un nombre !')
						.notEmpty().withMessage('Le champs stuff ne doit pas être vide')
        ];
    }
}
export { InventaireValidator };