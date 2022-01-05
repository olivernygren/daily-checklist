import {
	Checkbox,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import { Supplement } from '../../utils';

import useStyles from './styles';
import { ITodoItem } from '../../types';

export const TodoItem = ({ title, category: { name, icon } }: ITodoItem) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.container}>
			<ListItemIcon className={classes.listItemIcon}>
				<Checkbox className={classes.checkbox} />
			</ListItemIcon>
			<ListItemText>
				<Typography variant="subtitle1">{title}</Typography>
				<Typography variant="body2">{name}</Typography>
			</ListItemText>
			{/* <Supplement className={classes.categoryIcon} /> */}
			{icon}
		</ListItem>
	);
};

export default TodoItem;
