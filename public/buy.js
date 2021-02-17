function purchase(){
    fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: $("#fnavn").val(),
            lastname: $("#lnavn").val(),
            address: $("#gate").val(),
            city: $("#city").val(),
            mobile_number: $("#tlf").val(),
            post: $("#post").val(),
            Country: $("#myInput").val(),
        }
    })
});
}
