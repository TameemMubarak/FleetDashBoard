export default function StatusBadge({ speed }) {

    let color = "#16a34a";
    let text = "MOVING";

    if (speed < 5) {
        color = "#111827";
        text = "IDLE";
    }
    else if (speed > 50) {
        color = "#dc2626";
        text = "OVERSPEED";
    }

    return (

        <span
            style={{
                background: color,
                color: "white",
                padding: "7px 14px",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "12px"
            }}
        >
            {text}
        </span>

    );

}