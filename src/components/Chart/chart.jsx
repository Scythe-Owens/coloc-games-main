import PropTypes from "prop-types";

function Chart({ headers, body }) {
    return (
        <table className="chart">
            <thead className="chart-header">
                <tr className="chart-header-column">
                    { headers.map((header, index) => {
                        return(
                            <th className="chart-header-column-title" key={ "chart-header-" + index }>{ header }</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody className="chart-content">
                { body }
            </tbody>
        </table>
    )
}

Chart.Prototypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    body: PropTypes.object.isRequired,
}

export default Chart;
