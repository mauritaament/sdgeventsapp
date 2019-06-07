import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
     state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={13}
                style={mapStyles}
                initialCenter={{
                    lat: 37.773972,
                    lng: -122.431297
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'SDG Event #1'}
                    position={{lat:37.7836, lng:-122.3899}}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>

                <Marker
                    onClick={this.onMarkerClick}
                    name={'SDG Event #2'}
                    position={{lat:37.8061, lng:-122.4103}}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>


                <Marker
                    onClick={this.onMarkerClick}
                    name={'SDG Event #3'}
                    position={{lat:37.7930, lng:-122.4161}} //mission district
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>



            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBH3OB0tguXHU3QB4YLgv789UK-6O-jEc8'
})(MapContainer);



