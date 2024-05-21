export default function CardViewExperience(props: any) {
    // make component with children
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">{ props.year }</div>
                            <div className="small fw-bolder">{ props.position }</div>
                            <div className="small text-muted">{ props.company }</div>
                            <div className="small text-muted">{ props.address }</div>
                        </div>
                    </div>
                    <div className="col-lg-8"><div>
                        <ul>
                            {
                                props.jobdesc.map((job:any) => {
                                    return <li key={job}>{ job }</li>
                                })
                            }
                        </ul>
                        </div></div>
                </div>
            </div>
        </div>
    )
}