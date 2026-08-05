import {React} from 'react'
import { Search } from "lucide-react";
import "../styles/SearchBar.css";

export default function SearchBar({ search, setSearch }) {

    return (

        <div className="search-container">

            <div className="search-box">

                <Search className="search-icon"/>

                <input

                    type="text"

                    placeholder="Search Vehicle..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

            </div>

        </div>

    );

}