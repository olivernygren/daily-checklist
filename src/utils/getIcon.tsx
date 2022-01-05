import {
	Calories,
	categoryEnum,
	Fruit,
	Home,
	MealPrep,
	Protein,
	QuestionMark,
	Steps,
	Supplement,
	Weight,
	Workout,
} from '.';

import useStyles from '../components/TodoItem/styles';
// const classes = useStyles();

export function GetIcon(category: string) {
	switch (category) {
		case categoryEnum.CALORIES:
			return <Calories />;
		case categoryEnum.FRUIT:
			return <Fruit />;
		case categoryEnum.HOUSEHOLD:
			return <Home />;
		case categoryEnum.MEAL_PREP:
			return <MealPrep />;
		case categoryEnum.PROTEIN:
			return <Protein />;
		case categoryEnum.STEPS:
			return <Steps />;
		case categoryEnum.SUPPLEMENTS:
			return <Supplement />;
		case categoryEnum.WEIGHT:
			return <Weight />;
		case categoryEnum.WORKOUT:
			return <Workout />;
		default:
			return <QuestionMark />;
	}
}
