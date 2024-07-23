'use client';
import { useState } from "react";
import { DatagridFilters } from "./datagrid_filters";

export function Datagrid() {
    const [nameSurname, setNameSurname] = useState("");
    const [unvan, setUnvan] = useState("");
    const [gorev, setGorev] = useState("");
    const [birim, setBirim] = useState("");
    const [proje, setProje] = useState("");
    const [katki, setKatki] = useState("");
    const [takim, setTakim] = useState("");

    function handleSearch() {
        console.log("Searching with: ", nameSurname, unvan, gorev, birim, proje, katki, takim);
    }

    function fetchData(){
        
    }




    return (
        <div>
            <DatagridFilters 
                nameSurname={nameSurname} setNameSurname={setNameSurname}
                unvan={unvan} setUnvan={setUnvan}
                gorev={gorev} setGorev={setGorev}
                birim={birim} setBirim={setBirim}
                proje={proje} setProje={setProje}
                katki={katki} setKatki={setKatki}
                takim={takim} setTakim={setTakim}
                handleSearch={handleSearch}
            />
        </div>
    )
}