import React from "react"
import './Weather.css'

const Weather = (props) => {
	return (
		<div className="weather">
			<p><span>Location: </span>{props.location}</p>
			<p><span>Temparature: </span>{props.temparature}</p>
		</div>
	)
}

export default Weather