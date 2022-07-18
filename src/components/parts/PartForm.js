import { Divider, Grid, Typography, Button } from '@mui/material';
import PartList from './PartList';

import './part.styles.css';

const PartForm = () => {
	return (
		<Grid
			container
			justifyContent='center'
			flexDirection='column'
			className='container'
		>
			<Grid
				container
				direction={'column'}
				className='form-wrapper'
				rowSpacing={3}
			>
				<Grid item>
					<Typography variant='h4' gutterBottom>
						Part Number
					</Typography>
					<Divider />
					<Typography variant='body1' mt={1}>
						Please select from available part numbers.
					</Typography>
				</Grid>
				<Grid item>
					<PartList />
				</Grid>
				<Grid item>
					<Button variant='contained' color='primary' size='large' mt={4}>
						Continue
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default PartForm;
