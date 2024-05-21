"use client"
import Image from "next/image";
import CardViewImage from "../components/cardview";
import { useEffect, useState } from "react";

export default function Home() {
    const [project, setProject] = useState([]);

    const getData = async () => {
        const res = await fetch('./data/project.json')
        const data = await res.json()
        return data
    }

    useEffect(() => {
        getData().then(data => {
            setProject(data.projects)
        })
    }, [])

    return (
        <div className="container px-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="row justify-content-center overflow-hidden">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    {
                        project.map((element:any) => {
                            return (
                                <CardViewImage image={element.image} title={element.title} description={element.description} badges={element.category} key={element.title}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
