import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon({ icon, color }) {
    return (
        <FontAwesomeIcon
            icon={icon}
            style={{
                color: `${color}`,
            }}
        />
    )
}
