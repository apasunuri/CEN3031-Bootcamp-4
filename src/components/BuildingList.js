import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate(event) {
		const id = event.currentTarget.dataset.key
		this.props.selectedUpdate(id)
	}
	render() {
		//console.log('This is my directory file', this.props.data);
		//const { data, filterText } = this.props;
		const data = this.props.data;
		const filterText = this.props.filterText;

		const buildingList = data
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td data-key={directory.id} onClick={this.selectedUpdate.bind(this)}>{directory.code}</td>
					<td data-key={directory.id} onClick={this.selectedUpdate.bind(this)}>{directory.name}</td>
				</tr>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
