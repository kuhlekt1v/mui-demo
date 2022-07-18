import { CssBaseline, Grid } from '@mui/material';
import PartForm from './components/parts/PartForm';

import './App.css';

const App = () => {
	return (
		<div className='App'>
			<CssBaseline />
			<Grid container alignItems='center' justifyContent='center'>
				<Grid item>
					<PartForm />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
