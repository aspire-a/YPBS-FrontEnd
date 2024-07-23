import Image from 'next/image';
import { useEffect, useState } from 'react';

export function BornTodayCard({name, surname, birthdate, image}) {


    return (
        <div>
            <div> BUGÜN DOĞANLAR</div>
            <div>
                {image ? (
                        <Image
                            src={`data:image/png;base64, ${image}`}
                            width={100}
                            height={100}
                            alt="User Image"
                        />
                    ) : (
                        <div>No Image Available</div>
                )}
                <div> İyi ki doğdun! </div>
                <div> {name + " " + surname} </div>
                <div> Seninle daha güçlüyüz! </div>
                <div> {birthdate} </div>
            </div>
        </div>
    );
}