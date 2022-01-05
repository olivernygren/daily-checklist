import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	container: {
		padding: '50px 16px 20px 16px',
	},
	title: {
		marginBottom: 20,
	},
	iconButton: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 10,
		padding: 16,
		width: 'fit-content',
		color: theme.palette.common.white,
		position: 'fixed',
		bottom: 20,
		right: 20,
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
	},
}));
