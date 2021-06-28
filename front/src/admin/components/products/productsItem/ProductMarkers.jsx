import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import useStyles from "./productsItemStyles"
import Icon from "../../common/icons/Icon"

export default function ProductMarkers({ title, productMarker }) {
    const classes = useStyles()

    return (
        <div className={classes.markers}>
            <div>
                <p>{title}</p>
                <p>
                    {productMarker ? (
                        <Icon icon={faCheckCircle} color='green' />
                    ) : (
                        <Icon icon={faTimesCircle} color='red' />
                    )}
                </p>
            </div>
        </div>
    )
}
