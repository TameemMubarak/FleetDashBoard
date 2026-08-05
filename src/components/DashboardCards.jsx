import "./../styles/DashboardCards.css";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SpeedIcon from "@mui/icons-material/Speed";
import RouteIcon from "@mui/icons-material/Route";
import WifiIcon from "@mui/icons-material/Wifi";

export default function DashboardCards({

    totalVehicles,
    onlineVehicles,
    averageSpeed,
    totalOdometer

}) {

    return (

        <div className="cards">

            <div className="card">

                <DirectionsCarIcon
                    className="icon"
                />

                <div>

                    <h2>{totalVehicles}</h2>

                    <p>Total Vehicles</p>

                </div>

            </div>

            <div className="card">

                <WifiIcon
                    className="icon green"
                />

                <div>

                    <h2>{onlineVehicles}</h2>

                    <p>Online Vehicles</p>

                </div>

            </div>

            <div className="card">

                <SpeedIcon
                    className="icon blue"
                />

                <div>

                    <h2>{averageSpeed.toFixed(1)} km/h</h2>

                    <p>Average Speed</p>

                </div>

            </div>

            <div className="card">

                <RouteIcon
                    className="icon orange"
                />

                <div>

                    <h2>{totalOdometer.toFixed(2)} km</h2>

                    <p>Total Odometer</p>

                </div>

            </div>

        </div>

    );

}