"use client"
import { useEffect, useState } from "react"
import CardViewAward from "../components/cardviewaward"

export default function HomeAchievement() {
    const [data, setData] = useState([])
    // get data from json
    const getData = async () => {
        const res = await fetch('./data/achievement.json')
        const data = await res.json()
        return data
    }

    useEffect(() => {
        getData().then(data => {
            setData(data.achievements)
        })
    }, [])

    return (
        <div className="container px-5 mb-5" id="page-award">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Achievement and Award</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    <section className="mb-4">
                        {
                            data.map((element:any) => {  
                                return (
                                    <>
                                    <div className="d-flex align-items-center justify-content-between mb-4" key={element.id}>
                                        <h2 className="text-primary fw-bolder mb-0">{element.year}</h2>
                                    </div>
                                    {
                                        element.award?.map((el:any) => {
                                            return <CardViewAward title={el.title} description={el.description} place={el.place} key={el.id} />
                                        })
                                    }
                                    </>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        </div>
    );
}