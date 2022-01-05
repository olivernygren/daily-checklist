import {
	Checkbox,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import { Supplement } from '../../utils';

import useStyles from './styles';

export const TodoItem = () => {
	const classes = useStyles();

	return (
		<ListItem className={classes.container}>
			<ListItemIcon className={classes.listItemIcon}>
				<Checkbox className={classes.checkbox} />
			</ListItemIcon>
			<ListItemText>
				<Typography variant="subtitle1">Magnesium</Typography>
				<Typography variant="body2">Kosttillskott</Typography>
			</ListItemText>
			<Supplement className={classes.categoryIcon} />
		</ListItem>
	);
};

export default TodoItem;
