import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi } from "./controller/get.js";
import { urlAPI2 } from "./config/url.js";
get(urlAPI2, isiTablePresensi);