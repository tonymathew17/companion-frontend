import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './Map.css';
import { constants } from '../common/constants';

function Map({ location, zoomLevel }) {
    return (
        <div className="map">
            <h2 className="map-h2">Come Visit Our Clinic At</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: constants.GOOGLE_API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.name}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

function LocationPin({ text }) {
    return (
        <div className="pin">
            <Icon icon={locationIcon} className="pin-icon"></Icon>
            <p className="pin-text">{text}</p>
        </div>
    );
}

export default Map;