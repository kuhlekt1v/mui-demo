import {
	Select,
	FormControl,
	MenuItem,
	TextField,
	Button,
	Divider,
	Grid,
	InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const parts = ['part1', 'part2'];

const PartList = () => {
	const [part, setPart] = useState('');

	const handleChange = event => {
		setPart(event.target.value);
	};

	const addItem = event => {
		event.preventDefault();
	};

	return (
		<>
			<FormControl fullWidth>
				<InputLabel>Part Number</InputLabel>
				<Select
					labelId='part-select-label'
					id='part-select'
					value={part}
					label='Part Number'
					onChange={handleChange}
					style={{ width: '400px' }}
				>
					<MenuItem disabled value=''>
						Available Parts
					</MenuItem>
					{parts.map(part => (
						<MenuItem key={part} value={part}>
							{part}
						</MenuItem>
					))}
					<Divider style={{ margin: '10px 10px 0px 10px' }} />
					<Grid
						container
						justifyContent='center'
						style={{ margin: '15px 10px 10px 0px' }}
					>
						<TextField variant='outlined' label='Part Number' size='small' />
						<Button variant='text' style={{ marginLeft: '10px' }}>
							<AddIcon />
							Add New Part
						</Button>
					</Grid>
				</Select>
			</FormControl>
		</>
	);
};

export default PartList;
