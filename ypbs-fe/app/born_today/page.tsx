'use client';
import useSWR from "swr";
import { getFetcher } from "../api_helper/fetchers";
import { useEffect, useState } from "react";
import axios from "axios";
import { BornTodayCard } from "./born_today_card";

export default function Page() {
  const [users, setUsers] = useState([]);

  const { data, error } = useSWR('/api/users/born-today', getFetcher);

  useEffect(() => {
    if(data){
      console.log(data)
      setUsers(data);
    }
  }, [data]);

  return (
    <div >
      {users.map((user) =>  (<BornTodayCard key={user.name + " " + user.surname} name={user.name} surname={user.surname} birthdate={user.birthDate} image={user.image}/>))}
    </div>
  );
}