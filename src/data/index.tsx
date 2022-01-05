import { categoryEnum, GetIcon, MealPrep, Supplement } from '../utils';

export const todoData = [
	{
		title: 'Magnesium',
		category: {
			name: categoryEnum.SUPPLEMENTS,
			icon: GetIcon(categoryEnum.SUPPLEMENTS),
		},
	},
	{
		title: 'Vitamin D',
		category: {
			name: categoryEnum.SUPPLEMENTS,
			icon: GetIcon(categoryEnum.SUPPLEMENTS),
		},
	},
	{
		title: 'Meal Preppa Kyckling',
		category: {
			name: categoryEnum.MEAL_PREP,
			icon: GetIcon(categoryEnum.MEAL_PREP),
		},
	},
];
