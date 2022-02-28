import { Container } from '../Containers/Container';
import {
	PieChart,
	Pie,
	Sector,
	Cell,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

const data01 = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
];

export const Piechart = () => {
	return (
		<Container>
			<ResponsiveContainer width={'99%'} height={500}>
				<PieChart width='100%' height={400}>
					<Pie
						data={data01}
						dataKey='value'
						cx='50%'
						cy='50%'
						outerRadius={100}
						fill='#8884d8'
						label
					/>
				</PieChart>
			</ResponsiveContainer>
		</Container>
	);
};
