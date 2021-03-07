import "./Search.css";
import { useState, useEffect } from "react";
import Events from "../Classes/Events";
export default function Search() {
    const [inputSearch, setInputSearch] = useState(""),
        [dateSelect, setDateSelect] = useState(""),
        [orderSelect, setOrderSelect] = useState(""),
        [options] = useState([""]),
        [events, setEvents] = useState([]);

    useEffect(() => {
        // effect
        const year = new Date().getFullYear();
        for (let years = year; years >= year - 4; years--) {
            options.push(`${years}`);
        }
    })


    const search = (e) => {
        e.preventDefault();
        const event = new Events();
        console.log(inputSearch.trim(), dateSelect, orderSelect)
        event.requestEvents(inputSearch.trim(), dateSelect, orderSelect)
            .then((res) => {
                setEvents(res.map(({ fields: { title, date_start, cover_url, cover_alt } }) => {
                    return [cover_url, cover_alt, title, new Date(date_start).toLocaleDateString()]
                }))
            })
    }

    return (
        <div id="search" className="w-screen h-full overflow-auto flex flex-col justify-around items-center">
            <form className="w-full h-1/6 flex flex-wrap flex-row" onSubmit={search}>
                <div className="flex-1 flex flex-col justify-around items-center">
                    <label htmlFor="inputSearch">Terme de recherche</label>
                    <input type="text" onChange={(e) => setInputSearch(e.target.value)} id="inputSearch" />
                </div>
                <div className="flex-1 flex flex-col justify-around items-center">
                    <label htmlFor="date_start">Année</label>
                    <select id="date_start" onChange={(e) => setDateSelect(e.target.value)}>
                        {options.map((option) => {
                            return "" === option ? <option value={option}>-- Choisir --</option> : <option value={option}>{option}</option>;
                        })}
                    </select>
                </div>
                <div className="flex-1 flex flex-col justify-around items-center">
                    <label htmlFor="sort">Ordre des résultats</label>
                    <select id="sort" onChange={(e) => setOrderSelect(e.target.value)}>
                        <option value="date_start">Date décroissante</option>
                        <option value="-date_start">Date croissante</option>
                        <option value="title">Titre (de A à Z)</option>
                    </select>
                </div>
                <div className="flex-1 flex flex-col justify-around items-center">
                    <button type="submit" className="text-2xl bg-pink-500 border-2 border-black w-40 rounded-md focus:ring-2 
                focus:ring-black hover:bg-gray-600 active:bg-gray-200">Rechercher</button>
                </div>
            </form>
            <div className="w-3/4 h-5/6 flex flex-wrap flex-row justify-around items-center">
                {events.map(([url, alt, title, date]) => {
                    return (
                        <div className="w-1/3 h-1/3">
                            <div className="w-full h-2/4">
                                <img src={url} alt={alt} className="w-full" />
                            </div>
                            <div className="w-full h-1/3 text-black">
                                <h6 className="font-black imgtext">{title}</h6>
                                <p className="font-bold imgtext">{date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}