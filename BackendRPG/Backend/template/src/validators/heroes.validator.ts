import { body } from 'express-validator';
import { BaseValidator } from './base.validator';

class HeroesValidator extends BaseValidator {
    static getRules = () => {
        return [
            body('userPseudo')
						.isString().withMessage('Le userPseudo ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs userPseudo ne doit pas être vide'),
						body('pointDeVie')
						.isNumeric().withMessage('le pointDeVie doit être un nombre !')
						.notEmpty().withMessage('Le pointDeVie ne doit pas être vide'),
						body('defense')
						.isNumeric().withMessage('la defense doit être un nombre !')
						.notEmpty().withMessage('La defense ne doit pas être vide'),
						body('attaque')
						.isNumeric().withMessage('l\'attaque doit être un nombre !')
						.notEmpty().withMessage('L\'attaque ne doit pas être vide'),
						body('gold')
						.isNumeric().withMessage('le gold doit être un nombre !')
						.notEmpty().withMessage('Le gold ne doit pas être vide'),
						body('image')
						.isString().withMessage('l\'image ne doit pas être un nombre')
						.notEmpty().withMessage('Le champs image ne doit pas être vide'),
						body('arme')
						.isString().withMessage('l\'arme ne doit pas être un nombre')
						.notEmpty().withMessage('L\'arme ne doit pas être vide'),
						body('personnage')
						.isNumeric().withMessage('le personnage doit être un nombre !')
						.notEmpty().withMessage('Le personnage ne doit pas être vide'),
						body('inventaine')
						.isNumeric().withMessage('l\'inventaine doit être un nombre !')
						.notEmpty().withMessage('L\'inventaine ne doit pas être vide'),
						body('partie')
						.isNumeric().withMessage('la partie doit être un nombre !')
						.notEmpty().withMessage('La partie ne doit pas être vide'),
						body('user')
						.isNumeric().withMessage('le user doit être un nombre !')
						.notEmpty().withMessage('Le user ne doit pas être vide')
        ];
    }
}
export { HeroesValidator };