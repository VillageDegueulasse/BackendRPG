import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class MonstersValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('name')
						.isString().withMessage('Le nom ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs nom ne doit pas être vide'),
						body('pointDeVie')
						.isNumeric().withMessage('le pointDeVie doit être un nombre !')
						.notEmpty().withMessage('Le pointDeVie ne doit pas être vide'),
						body('defense')
						.isNumeric().withMessage('la defense doit être un nombre !')
						.notEmpty().withMessage('La defense ne doit pas être vide'),
						body('attaque')
						.isNumeric().withMessage('l\'attaque doit être un nombre !')
						.notEmpty().withMessage('L\'attaque ne doit pas être vide'),
						body('image')
						.isString().withMessage('l\'image ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs image ne doit pas être vide'),
						body('loots')
						.isNumeric().withMessage('le loots doit être un nombre !')
						.notEmpty().withMessage('Le loots ne doit pas être vide'),
						body('partie')
						.isNumeric().withMessage('la partie doit être un nombre !')
						.notEmpty().withMessage('La partie ne doit pas être vide')
        ];
    }
}
export { MonstersValidator };