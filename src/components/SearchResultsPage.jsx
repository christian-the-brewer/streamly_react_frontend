import SearchCardIndex from "./indices/SearchCardIndex.jsx";
import {getMultiSearch} from "../api/shared.js";

export default function SearchResultsPage() {
    return (
        <SearchCardIndex
        title="Search Results"
        apiCall={getMultiSearch}
        />
    )
};