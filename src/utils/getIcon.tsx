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

export const GetIcon = (category: string) => {
	const classes = useStyles();

	switch (category) {
		case categoryEnum.CALORIES:
			return <Calories className={classes.categoryIcon} />;
		case categoryEnum.FRUIT:
			return <Fruit className={classes.categoryIcon} />;
		case categoryEnum.HOUSEHOLD:
			return <Home className={classes.categoryIcon} />;
		case categoryEnum.MEAL_PREP:
			return <MealPrep className={classes.categoryIcon} />;
		case categoryEnum.PROTEIN:
			return <Protein className={classes.categoryIcon} />;
		case categoryEnum.STEPS:
			return <Steps className={classes.categoryIcon} />;
		case categoryEnum.SUPPLEMENTS:
			return <Supplement className={classes.categoryIcon} />;
		case categoryEnum.WEIGHT:
			return <Weight className={classes.categoryIcon} />;
		case categoryEnum.WORKOUT:
			return <Workout className={classes.categoryIcon} />;
		default:
			return <QuestionMark className={classes.categoryIcon} />;
	}
};
