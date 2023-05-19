
axios.get('http://localhost:3005/data')
.then((result) => {
    console.log(result);
    console.log(result.data);
    document.querySelector('.fam').innerHTML = result.data.familiya
    document.querySelector('.ism').innerHTML = result.data.imya
    document.getElementsByClassName('ism1').innerText = result.data.imya



}).catch((err) => {
    console.log(err);
});

