import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.common.white,
		borderRadius: 10,
		padding: '12px 12px 12px 8px',
		marginBottom: 14,
		alignItems: 'start',
	},
	listItemIcon: {
		'&.MuiListItemIcon-root': {
			minWidth: 'unset',
		},
		paddingRight: 8,
	},
	checkbox: {
		'&.MuiCheckbox-colorSecondary.Mui-checked': {
			color: theme.palette.primary.main,
		},
	},
	categoryIcon: {
		paddingTop: 7,
		paddingRight: 4,
	},
}));
