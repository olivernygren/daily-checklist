import calories from '../icons/calories.svg';
import fruit from '../icons/fruit.svg';
import home from '../icons/home.svg';
import meat from '../icons/meat.svg';
import pan from '../icons/pan.svg';
import pill from '../icons/pill.svg';
import qm from '../icons/qm.svg';
import scale from '../icons/scale.svg';
import steps from '../icons/steps.svg';
import textLogo from '../icons/text-logo.svg';
import workout from '../icons/workout.svg';

import { IIcon } from '../types';

export const Calories = ({ className }: IIcon) => {
	return <img src={calories} alt={'Kalorier'} className={className} />;
};
export const Fruit = ({ className }: IIcon) => {
	return <img src={fruit} alt={'Frukt'} className={className} />;
};
export const Home = ({ className }: IIcon) => {
	return <img src={home} alt={'Hem & Hushåll'} className={className} />;
};
export const Protein = ({ className }: IIcon) => {
	return <img src={meat} alt={'Protein'} className={className} />;
};
export const MealPrep = ({ className }: IIcon) => {
	return <img src={pan} alt={'Meal Prep'} className={className} />;
};
export const Supplement = ({ className }: IIcon) => {
	return <img src={pill} alt={'Kosttillskott'} className={className} />;
};
export const Weight = ({ className }: IIcon) => {
	return <img src={scale} alt={'Vikt'} className={className} />;
};
export const Steps = ({ className }: IIcon) => {
	return <img src={steps} alt={'Steg'} className={className} />;
};
export const TextLogo = ({ className }: IIcon) => {
	return <img src={textLogo} alt={'Logo'} className={className} />;
};
export const Workout = ({ className }: IIcon) => {
	return <img src={workout} alt={'Träning'} className={className} />;
};
export const QuestionMark = ({ className }: IIcon) => {
	return <img src={qm} alt={'Träning'} className={className} />;
};
