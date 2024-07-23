

export function DatagridFilters({nameSurname, unvan, gorev, birim, proje, katki, takim, setNameSurname, setUnvan, setGorev, setBirim, setProje, setKatki, setTakim, handleSearch}) {

    return (
        <div>
            <input 
                type="text" 
                placeholder="İsim Soyisim" 
                value={nameSurname}
                onChange={(e) => setNameSurname(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Unvan"
                value={unvan}
                onChange={(e) => setUnvan(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Görev"
                value={gorev}
                onChange={(e) => setGorev(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Birim"
                value={birim}
                onChange={(e) => setBirim(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Proje"
                value={proje}
                onChange={(e) => setProje(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Katkı"
                value={katki}
                onChange={(e) => setKatki(e.target.value)}
            />
            <input
                type="dropdown"
                placeholder="Takım"
                value={takim}
                onChange={(e) => setTakim(e.target.value)}
            />
            <button onClick={handleSearch}> 
                Sorgula 
            </button>

        </div>
    )
}