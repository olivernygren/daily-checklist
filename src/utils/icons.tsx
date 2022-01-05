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

export const Calories = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={calories}
			alt={'Kalorier'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Fruit = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={fruit}
			alt={'Frukt'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Home = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={home}
			alt={'Hem & Hushåll'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Protein = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={meat}
			alt={'Protein'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const MealPrep = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={pan}
			alt={'Meal Prep'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Supplement = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={pill}
			alt={'Kosttillskott'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Weight = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={scale}
			alt={'Vikt'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Steps = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={steps}
			alt={'Steg'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const TextLogo = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={textLogo}
			alt={'Logo'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const Workout = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={workout}
			alt={'Träning'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
export const QuestionMark = ({ className, mt }: IIcon) => {
	let margin: number = 0;
	if (mt) margin = 7;
	return (
		<img
			src={qm}
			alt={'Träning'}
			className={className}
			style={{ paddingTop: margin, marginLeft: 11 }}
		/>
	);
};
