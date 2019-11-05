import React from 'react';

class AddBuilding extends React.Component {
    addBuilding(event) {
        event.preventDefault()
        const id = this.myID.value
        const name = this.myName.value
        const code = this.myCode.value
        const address = this.myAddress.value
        const latitude = this.myLatitude.value
        const longitude = this.myLongitude.value
        const newBuilding = {
            id: id,
            code: code,
            name: name,
            coordinates: {
                latitude: latitude,
                longitude: longitude
            },
            address: address
        }
        this.props.addBuilding(newBuilding)
        this.myForm.reset()
    }
	render() {
		return (
            <div>
                <h3>Add Building</h3>
                <form ref={(form) => {this.myForm = form}}> 
                    <label>
                        ID:
                        <input type="number" ref={(id) => {this.myID = id}} />
                        <br />
                        <br />
                        Name:
                        <input type="text" ref={(name) => {this.myName = name}} />
                        Code:
                        <input type="text" ref={(code) => {this.myCode = code}} />
                        Address:
                        <input type="text" ref={(address) => {this.myAddress = address}} />
                        Latitude:
                        <input type="number" ref={(latitude) => {this.myLatitude = latitude}} />
                        <br />
                        <br />
                        Longitude:
                        <input type="number" ref={(longitude) => {this.myLongitude = longitude}} />
                        <br />
                    </label>
                    <label>
                        <button onClick={this.addBuilding.bind(this)}>Add Building</button>
                    </label>
                </form>
            </div>
        );
	}
}
export default AddBuilding;