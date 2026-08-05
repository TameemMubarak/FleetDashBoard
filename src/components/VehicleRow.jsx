
import "./../styles/VehicleRow.css";


import StatusBadge from "./StatusBadge";

export default function VehicleRow({ vehicle }) {

    return (

        <tr>

            <td>
                <StatusBadge speed={vehicle.speed} />
            </td>

            <td>{vehicle.vehicle_id}</td>


            <td
                style={{
                    color:
                        vehicle.speed > 50
                            ? "#ef4444"
                            : vehicle.speed < 5
                            ? "#9ca3af"
                            : "#22c55e",
                    fontWeight: "bold"
                }}
            >
                <span
className={`speed ${
vehicle.speed>50
?"danger"
:vehicle.speed<10
?"idle"
:"normal"
}`}
>
{vehicle.speed} km/h
</span>
                {vehicle.speed} km/h
            </td>

            <td>{vehicle.temperature.toFixed(1)}°C</td>

<td>{vehicle.odometer.toFixed(1)} km</td>


            <td>{vehicle.latitude.toFixed(4)}</td>
<td>{vehicle.longitude.toFixed(4)}</td>

            {/* <td>{vehicle.latitude}</td>

            <td>{vehicle.longitude}</td> */}

        </tr>

    );

}