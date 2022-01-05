import { Grid, List, Typography } from '@material-ui/core';
import { TodoItem } from '../../components';

import useStyles from './styles';

const HomePage = () => {
	const classes = useStyles();
	return (
		<Grid container item direction="column" className={classes.container}>
			<Typography variant="h2" className={classes.title}>
				Checklista
			</Typography>
			<List>
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</List>
		</Grid>
	);
};

export default HomePage;
