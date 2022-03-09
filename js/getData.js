const getData = async(url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};

const getRegion = async (region) => {
    const data = await fetch(`https://restcountries.com/v2/all`);
    const json = await data.json();
    const europe = json.filter(e => e.region === region);
    return europe
}

