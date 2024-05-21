import Image from "next/image";

export default function CardViewImage(props: any) {
    // looping badge
    let badges = ""
    // split badges to array
    let badgesArray = props.badges?.split(",")
    if (props.badges) {
        badges = badgesArray.map((badge: string) => <div className="badge bg-primary text-white mx-1" key={badge}><div className="text-uppercase">{badge.trim()}</div></div>);
    }
    return (
        <div className="card shadow rounded-4 border-0 mb-3">
            <div className="card-body p-0">
                <div className="d-flex align-items-center">
                    <div className="p-5">
                        <h2 className="fw-bolder">{props.title}</h2>
                        {badges}
                        <p>{props.description}</p>
                    </div>
                    <Image className="img-fluid d-sm-none d-md-block" src={props.image} style={{ height: '200px', marginRight: '-150px'}} alt="..." />
                </div>
            </div>
        </div>
    );
}