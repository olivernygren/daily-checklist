import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core';
import { Supplement } from '../../utils';

import useStyles from './styles';
import { ITodoItem } from '../../types';
import { CloseRounded } from '@material-ui/icons';
import { todoData } from '../../data';

export const TodoItem = ({
	title,
	category: { name, icon },
	handleDelete,
}: ITodoItem) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.container}>
			<ListItemIcon className={classes.listItemIcon}>
				<Checkbox className={classes.checkbox} />
			</ListItemIcon>
			<ListItemText>
				<Typography variant="subtitle1" className={classes.todoTitle}>
					{title}
					{icon}
				</Typography>
				<Typography variant="body2">{name}</Typography>
			</ListItemText>
			{/* <Supplement className={classes.categoryIcon} /> */}
			{/* {icon} */}
			<IconButton onClick={handleDelete}>
				<CloseRounded className={classes.closeIcon} />
			</IconButton>
		</ListItem>
	);
};

export default TodoItem;
