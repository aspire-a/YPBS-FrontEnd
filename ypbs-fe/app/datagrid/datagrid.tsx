'use client';
import { useEffect, useState } from "react";
import { DatagridFilters } from "./datagrid_filters";
import { GET_USERS_WITH_FILTERS_PATH } from "../api_helper/URLs";
import { getFetcher } from "../api_helper/fetchers";
import { DataItems } from "./data_items";
import { DataItemHeadings } from "./data_item_headings";


/**
 * Şu anda sadece tek modda çalışıyor. Rehber ve anasayfa için iki ayrı mod yapılmalı.
 * Katkı ve takım alanları eklenmeli (backend de eksik).
 * Paging eklenmeli. Tek seferde tek page çekmeli.
 * 
 */

export function Datagrid() {
    const [nameSurname, setNameSurname] = useState("");
    const [unvan, setUnvan] = useState("");
    const [gorev, setGorev] = useState("");
    const [birim, setBirim] = useState("");
    const [proje, setProje] = useState("");
    const [katki, setKatki] = useState("");
    const [takim, setTakim] = useState("");
    const [users, setUsers] = useState([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFetcher(
                    GET_USERS_WITH_FILTERS_PATH(nameSurname, unvan, gorev, birim, proje)
                );
                setUsers(data); 
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        
    }, [clicked]); 

    function handleSearch() {
        setClicked(!clicked);
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
            <br/>
            <DataItemHeadings/>
            {users.map((user, index) => (<DataItems key={index} 
                                                    nameSurname={user.nameSurname} 
                                                    unvan={user.unvan}
                                                    birim={user.birim}
                                                    email={user.email}
                                                    gorev={user.gorev}
                                                    proje={user.proje}
                                                    telefon={user.telefon}/>))}
        </div>
    )
}