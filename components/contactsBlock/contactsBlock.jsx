import styles from "./contactsBlock.module.scss";
import {
    YMaps,
    Map,
    Placemark,
    GeolocationControl,
    Clusterer
} from "react-yandex-maps";
import React from 'react'

const mapState = {
    center: [43.2220, 76.8512],
    zoom: 3
};

const ContactsBlock = () => {

    const [cluster, setCluster] = React.useState(null);
    return <div className="App">
        <YMaps>
            <Map
                defaultState={mapState}
                instanceRef={ref => {
                    if (ref) {
                        ref.events.add("click", e => {
                            ref.balloon.close();
                        });
                    }
                }}
            >
                <GeolocationControl />
                <Clusterer
                    modules={["clusterer.addon.balloon"]}
                    options={{}}
                    instanceRef={ref => {
                        if (ref) {
                            setCluster(ref);
                        }
                    }}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        geometry={[55.684758, 37.738521]}
                        properties={{
                            balloonContentHeader: "Balloon1",
                            balloonContent: "Balloon1 <strong>Test</strong>"
                        }}
                    />
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        geometry={[55.8, 37.8]}
                        properties={{
                            balloonContentHeader: "Balloon2",
                            balloonContent: "Balloon2 <strong>Test</strong>"
                        }}
                    />
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        geometry={[55.5, 37.738521]}
                        properties={{
                            balloonContentHeader: "Balloon3",
                            balloonContent: "Balloon3 <strong>Test</strong>"
                        }}
                    />
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        geometry={[55.684758, 37]}
                        properties={{
                            balloonContentHeader: "Balloon4",
                            balloonContent: "Balloon4 <strong>Test</strong>"
                        }}
                    />
                </Clusterer>
            </Map>
        </YMaps>
    </div>
}

export default ContactsBlock;