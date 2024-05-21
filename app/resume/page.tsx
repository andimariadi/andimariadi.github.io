"use client"
import { useEffect, useState } from "react";
import CardViewExperience from "../components/cardviewexperience";
import CardViewTraining from "../components/cardviewtraining";

export default function HomeResume() {
    const [experience, setExperience] =  useState([])
    const [training, setTraining] =  useState([])
    const [softSkill, setSSkills] =  useState([])
    const [hardSkill, setHSkills] =  useState([])
    // get data from json
    const getData = async () => {
        const res = await fetch('./data/experience.json')
        const data = await res.json()
        return data
    }
    const getTraining = async () => {
        const res = await fetch('./data/training.json')
        const data = await res.json()
        return data
    }
    const getSKills = async () => {
        const res = await fetch('./data/skills.json')
        const data = await res.json()
        return data
    }

    useEffect(() => {
        getData().then(data => {
            setExperience(data.experience)
        })
        getTraining().then(data => {
            setTraining(data.training)
        })
        getSKills().then(data => {
            setSSkills(data.softSkills)
            setHSkills(data.hardSkills)
        })
    }, [])

    return (
        <div className="container px-5 mb-5" id="page-resume">
        <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
                <section>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                    </div>
                    {
                        experience.map((element: any) => {
                            return (
                                <CardViewExperience year={element.year}
                                position={element.position}
                                company={element.company}
                                address={element.address}
                                jobdesc={element.jobdesc} key={element.year}/>
                            )
                        })
                    }
                </section>
                <section>
                    <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                    <div className="card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="bg-light p-4 rounded-4">
                                        <div className="text-secondary fw-bolder mb-2">2012 – 2016</div>
                                        <div className="mb-2">
                                            <div className="small fw-bolder">GPA [3,51 of 4,00]</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8"><div>
                                    
                                    <div className="small fw-bolder">Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari (MAAB)</div>
                                    <div className="small text-muted">Bachelor of Computer Science</div>
                                    <div className="small text-muted">Informatics Engineering - Information Technology</div>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className="text-secondary fw-bolder mb-4">Training and Certificate</h2>
                    {
                        training.map((element:any) => {
                            return (
                                <CardViewTraining year={element.year} data={element.data} key={element.year} />
                            )
                        })
                    }
                </section>
                <div className="pb-5"></div>
                <section>
                    <div className="card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                </div>
                                <div className="d-flex  flex-wrap justify-content-center">
                                    {
                                        softSkill.map((element:any) => {
                                            return (
                                                <div className="col-4 px-2 mb-4" key={element}><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{element}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="mb-0">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                </div>
                                
                                <div className="d-flex  flex-wrap justify-content-center">
                                    {
                                        hardSkill.map((element:any) => {
                                            return (
                                                <div className="col-4 px-2 mb-4" key={element}><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">{element}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    );
}