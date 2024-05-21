export default function CardViewTraining(props: any) {
    return (
        <div className="card shadow border-0 rounded-4 mb-2">
            <div className="card-body py-2 px-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-secondary fw-bolder mb-2">{props.year}</div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <ul>
                            {
                                props.data.map((element:any) => {
                                    return (
                                        <li key={element.title}>
                                            <div className="small fw-bolder">{element.title}</div>
                                            <div>{element.description}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}