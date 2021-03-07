export default class Events {
    requestEvents(q, date_start, sort) {
        const API_ENDPOINT = "https://opendata.paris.fr/api/records/1.0/search/";

        const queryParams = {
            dataset: "que-faire-a-paris-",
            q,
            rows: 12,
            start: 0,
            sort
        }
        if (date_start === "") {
            queryParams["facet"] = 'date_start';
            queryParams["refine.date_start"] = date_start
        }
        const queryString = Object.entries(queryParams).map(([key, value]) => `${key}=${value}`).join('&');
        return fetch(`${API_ENDPOINT}?${queryString}`)
            .then(res => res.json())
            .then(({ records }) => records)
            .catch(console.error);
    }
}