import "./../styles/Navbar.css";

import DirectionsCarIcon
from "@mui/icons-material/DirectionsCar";

import WifiIcon
from "@mui/icons-material/Wifi";

export default function Navbar(){

    return(

        <div className="navbar">

            <div className="left">

                <DirectionsCarIcon
                fontSize="large"/>

                <div>

                    <h1>

                        Fleet Operations Dashboard

                    </h1>

                    <p>

                        Live Vehicle Telemetry

                    </p>

                </div>

            </div>

            <div className="right">

                <WifiIcon/>

                LIVE

            </div>

        </div>

    )

}