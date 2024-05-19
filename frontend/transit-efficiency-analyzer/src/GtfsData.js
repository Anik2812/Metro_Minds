import React, { useEffect } from 'react';
import axios from 'axios';

function GtfsData({ onDataFetched }) {
    useEffect(() => {
        axios.get('http://localhost:5000/gtfs_data')
            .then(response => {
                console.log('Fetched GTFS data:', response.data);
                onDataFetched(response.data);
            })
            .catch(error => {
                console.error('Error fetching GTFS data:', error);
            });
    }, [onDataFetched]);

    return null;
}

export default GtfsData;
