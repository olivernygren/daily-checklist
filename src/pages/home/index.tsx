import { Grid, IconButton, List, Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { TodoItem } from '../../components';
import { todoData } from '../../data';

import useStyles from './styles';

const HomePage = () => {
	const classes = useStyles();

	const handleDelete = (title: string) => {
		console.log('todoData before: ' + todoData.length);
		// for (let i = 0; i < todoData.length; i++) {
		// 	if (todoData[i].title === title) {
		// 		todoData.splice(i, 1);
		// 	}
		// }
		todoData.forEach((todo, i) => {
			if (todoData[i].title === title) {
				todoData.splice(i, 1);
			}
		});
		console.log('todoData after: ' + todoData.length);
		console.log('spliced ' + title);
	};

	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="h2" className={classes.title}>
				Checklista
			</Typography>
			<List>
				{todoData.map((todo) => {
					return (
						<TodoItem
							title={todo.title}
							category={{ name: todo.category.name, icon: todo.category.icon }}
							handleDelete={() => handleDelete(todo.title)}
							key={todo.title}
						/>
					);
				})}
			</List>
			<IconButton className={classes.iconButton}>
				<AddRounded />
			</IconButton>
		</Grid>
	);
};

export default HomePage;
