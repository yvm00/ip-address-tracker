export async  function getAdress(ip) {
    const response = await fetch(`
    https://ipgeolocation.abstractapi.com/v1/?api_key=7bb4a2d1c2014e48839b508bb0fd6d0c&ip_address=${ip}`);
    return await response.json();
}

