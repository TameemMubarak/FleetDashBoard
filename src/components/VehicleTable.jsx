import "./../styles/VehicleTable.css";


import VehicleRow from "./VehicleRow";

export default function VehicleTable({

    vehicles

}){

    return(

        <div className="table-container">
            <div className="table-scroll">
            <table>

               <thead>

    <tr>

        <th>Status</th>

        <th>Vehicle</th>

        <th>Speed</th>

        <th>Temperature</th>

        <th>Odometer</th>

        <th>Latitude</th>

        <th>Longitude</th>

    </tr>

</thead>    

                <tbody>

                    {

                        vehicles

                        .sort((a,b)=>

                            a.vehicle_id.localeCompare(b.vehicle_id)

                        )

                        .map(vehicle=>(

                            <VehicleRow

                                key={vehicle.vehicle_id}

                                vehicle={vehicle}

                            />

                        ))

                    }

                </tbody>

            </table>
            </div>

        </div>

    )

}