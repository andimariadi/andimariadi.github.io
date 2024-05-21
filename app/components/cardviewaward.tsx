export default function CardViewAward(props: any) {
    // make component with children
    return (
        <div className="card shadow border-0 rounded-4 mb-2">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        {
                            props.place?.map((element: any) => {
                                return (
                                    <div className="bg-light p-4 rounded-4 mb-2" key={element.number+element.name}>
                                        <div className="text-primary fw-bolder mb-2">{element.number}<sup>{element.symbol}</sup> {element.name}</div>
                                        <div className="text-primary small mb-2">{element.type}</div>
                                        <div className="small text-muted">{element.company}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-8"><div>
                        <div className="text-primary fw-bolder mb-2">{props.title}</div>
                        <div className="text-muted" dangerouslySetInnerHTML={{__html: props.description}}></div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}