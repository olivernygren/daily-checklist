import { Grid, List, Typography } from '@material-ui/core';
import { TodoItem } from '../../components';
import { todoData } from '../../data';

import useStyles from './styles';

const HomePage = () => {
	const classes = useStyles();
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
							key={todo.title}
						/>
					);
				})}
				{/* <TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem /> */}
			</List>
		</Grid>
	);
};

export default HomePage;
