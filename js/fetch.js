import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://alnovianti.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}