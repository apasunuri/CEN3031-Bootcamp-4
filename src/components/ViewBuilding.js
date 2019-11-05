import React from 'react';

class ViewBuilding extends React.Component {
	removeBuilding(event) {
		const id = event.currentTarget.dataset.key;
		this.props.removeBuilding(id)
	}
	render() {
		//const {data, selectedBuilding} = this.props;
		const data = this.props.data;
		const selectedBuilding = this.props.selectedBuilding;
		const validBuilding = data
		.filter(directory => {
			return directory.id == selectedBuilding
		})
		let buildingInfo;
		if(validBuilding.length === 0) {
			buildingInfo = (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			)
		}
		else {
			buildingInfo = validBuilding.map(directory => {
				return (
					<div>
						<h3>{directory.name}</h3>
						<h3>{directory.code}</h3>
						<p>
							{' '}
							Address: {directory.address}
							<br />
							Latitude: {directory.coordinates.latitude}
							<br />
							Longitude: {directory.coordinates.longitude}
						</p>
						<button data-key={directory.id} onClick={this.removeBuilding.bind(this)}>Remove Listing</button>
					</div>
				);
			});
		}
		return <div>{buildingInfo}</div>;
	}
}
export default ViewBuilding;
