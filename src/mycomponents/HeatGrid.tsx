
type HeatGridProps = {
    columnTitles: Array<string>;
    cellHeatValues: Array<number>;
}

export const defaultHeatGridProps = {
    columnTitles: [
        "Monday",
        "Tuesday"
    ],
    cellHeatValues: [
        3,
        4,
        5,
        0,
        3,
        1,
    ]
    }

export const HeatGrid = (props: HeatGridProps) => {
    return(
        <div>
            {props.columnTitles[0]}
            <br />
            {props.columnTitles[1]}
        </div>
    )
}

