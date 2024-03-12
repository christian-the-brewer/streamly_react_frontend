import SearchIndex from "./SearchIndex.jsx";
import {getMultiSearch} from "../api/shared.js";

export default function SearchResults() {
    return (
        <SearchIndex
        title="Search Results"
        apiCall={getMultiSearch}
        />
    )
};