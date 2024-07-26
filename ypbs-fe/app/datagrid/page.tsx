"use client";
import { useEffect, useState } from "react";
import { Datagrid } from "./datagrid";
import DataGridDemo from "./datagrid_demo";
import { getFetcher } from "../api_helper/fetchers";
import { GET_USERS_WITH_FILTERS_PATH } from "../api_helper/URLs";

export default function Page() {
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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        
    }, [clicked]); 
    return (
        <>
        <DataGridDemo users={users}></DataGridDemo>
        </>
    )
}