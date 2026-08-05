import { useEffect, useMemo, useState } from "react";
import mqtt from "mqtt";
import './App.css'
import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import SearchBar from "./components/SearchBar";
import VehicleTable from "./components/VehicleTable";

// const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

export default function App() {

    const [vehicles, setVehicles] = useState({});

    const [search, setSearch] = useState("");

//     useEffect(() => {
//       client.on("connect", () => {

//     console.log("MQTT Connected");

//     client.subscribe("tameem_fleet/#", (err) => {

//         if (err) {
//             console.log("Subscribe Error:", err);
//         } else {
//             console.log("Subscribed Successfully");
//         }

//     });

// });

useEffect(() => {

    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");

    client.on("connect", () => {

        console.log("MQTT Connected");

        client.subscribe("tameem_fleet/#");

    });

    client.on("message", (topic, message) => {

        console.log("Received:", message.toString());

        const data = JSON.parse(message.toString());

        setVehicles(prev => ({
            ...prev,
            [data.vehicle_id]: data
        }));

    });

    return () => {
        client.end();
    };

}, []);

//         client.on("connect", () => {

//             console.log("MQTT Connected " );

//             client.subscribe("tameem_fleet/#");

//         });

//         client.on("message", (topic, message) => {
//             console.log("ho ");

//             const data = JSON.parse(message.toString());
//              console.log("Topic:", topic);

//     console.log("Message:", message.toString());

// //    const data = JSON.parse(message.toString());

//     console.log("Parsed:", data);

//             setVehicles(prev => ({

//                 ...prev,

//                 [data.vehicle_id]: data

//             }));

//         });

    //     return () => client.end();

    // }, []);

    const vehicleList = useMemo(
        () => Object.values(vehicles),
        [vehicles]
    );

    const totalVehicles = vehicleList.length;

    const onlineVehicles = vehicleList.length;

    const averageSpeed =
        vehicleList.length === 0
            ? 0
            : vehicleList.reduce((sum, v) => sum + v.speed, 0) /
              vehicleList.length;

    const totalOdometer =
        vehicleList.reduce((sum, v) => sum + v.odometer, 0);

    const filteredVehicles = vehicleList.filter(v =>
        v.vehicle_id.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="container">

            <Navbar/>

            <DashboardCards

                totalVehicles={totalVehicles}

                onlineVehicles={onlineVehicles}

                averageSpeed={averageSpeed}

                totalOdometer={totalOdometer}

            />

            <SearchBar

                search={search}

                setSearch={setSearch}

            />

            <VehicleTable

                vehicles={filteredVehicles}

            />

        </div>

    );

}