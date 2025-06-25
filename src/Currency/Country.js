import {useState} from "react";
const countryList=[{
	"eur": {
		   "AF": "afn", "AL": "all", "DZ": "dzd", "AS": "usd", "AD": "eur", "AO": "aoa", "AI": "xcd", "AQ": "usd", "AG": "xcd",
    "AR": "ars", "AM": "amd", "AW": "awg", "AU": "aud", "AT": "eur", "AZ": "azn", "BS": "bsd", "BH": "bhd", "BD": "bdt",
    "BB": "bbd", "BY": "byn", "BE": "eur", "BZ": "bzd", "BJ": "xof", "BM": "bmd", "BT": "btn", "BO": "bob", "BA": "bam",
    "BW": "bwp", "BR": "brl", "BN": "bnd", "BG": "bgn", "BF": "xof", "BI": "bif", "KH": "khr", "CM": "xaf", "CA": "cad",
    "CV": "cve", "KY": "kyd", "CF": "xaf", "TD": "xaf", "CL": "clp", "CN": "cny", "CO": "cop", "KM": "kmf", "CG": "xaf",
    "CD": "cdf", "CR": "crc", "HR": "hrk", "CU": "cup", "CY": "eur", "CZ": "czk", "DK": "dkk", "DJ": "djf", "DM": "xcd",
    "DO": "dop", "EC": "usd", "EG": "egp", "SV": "usd", "GQ": "xaf", "ER": "ern", "EE": "eur", "SZ": "szl", "ET": "etb",
    "FJ": "fjd", "FI": "eur", "FR": "eur", "GA": "xaf", "GM": "gmd", "GE": "gel", "DE": "eur", "GH": "ghs", "GR": "eur",
    "GD": "xcd", "GT": "gtq", "GN": "gnf", "GW": "xof", "GY": "gyd", "HT": "htg", "HN": "hnl", "HU": "huf", "IS": "isk",
    "IN": "inr", "ID": "idr", "IR": "irr", "IQ": "iqd", "IE": "eur", "IL": "ils", "IT": "eur", "JM": "jmd", "JP": "jpy",
    "JO": "jod", "KZ": "kzt", "KE": "kes", "KI": "aud", "KP": "kpw", "KR": "krw", "KW": "kwd", "KG": "kgs", "LA": "lak",
    "LV": "eur", "LB": "lbp", "LS": "lsl", "LR": "lrd", "LY": "lyd", "LI": "chf", "LT": "eur", "LU": "eur", "MG": "mur",
    "MW": "mwk", "MY": "myr", "MV": "mvr", "ML": "xof", "MT": "eur", "MH": "usd", "MR": "mru", "MU": "mur", "MX": "mxn",
    "FM": "usd", "MD": "mdl", "MC": "eur", "MN": "mnt", "ME": "eur", "MA": "mad", "MZ": "mzn", "MM": "mmk", "NA": "nad",
    "NR": "aud", "NP": "npr", "NL": "eur", "NZ": "nzd", "NI": "nio", "NE": "xof", "NG": "ngn", "NO": "nok", "OM": "omr",
    "PK": "pkr", "PW": "usd", "PA": "pab", "PG": "pgk", "PY": "pyg", "PE": "pen", "PH": "php", "PL": "pln", "PT": "eur",
    "QA": "qar", "RO": "ron", "RU": "rub", "RW": "rwf", "KN": "xcd", "LC": "xcd", "VC": "xcd", "WS": "wst", "SM": "eur",
    "ST": "std", "SA": "sar", "SN": "xof", "RS": "rsd", "SC": "scr", "SL": "sll", "SG": "sgd", "SK": "eur", "SI": "eur",
    "SB": "sbd", "SO": "sos", "ZA": "zar", "SS": "ssp", "ES": "eur", "LK": "lkr", "SD": "sdg", "SR": "srd", "SE": "sek",
    "CH": "chf", "SY": "syp", "TJ": "tjs", "TZ": "tzs", "TH": "thb", "TL": "usd", "TG": "xof", "TO": "top", "TT": "ttd",
    "TN": "tnd", "TR": "try", "TM": "tmt", "TV": "aud", "UG": "ugx", "UA": "uah", "AE": "aed", "GB": "gbp", "US": "usd",
    "UY": "uyu", "UZ": "uzs", "VU": "vuv", "VE": "ves", "VN": "vnd", "YE": "yer", "ZM": "zmw", "ZW": "zwl"
	}
	
}

]
function Country(props){

const objarr=Object.entries(countryList[0].eur)


	return(
		<>
		
<ul className="me-2 d-flex" aria-label="Disabled select example" >
	<li>
		<select onChange={(e) => props.onSelectKey(e.target.value.toUpperCase())}>
	{objarr.map(([key,value])=>{
		return(<option key={key} >
			{key}
		</option>

		)
	
})}
</select>
</li>
	</ul>



		</>	)
}

export default Country;
export const currencyData = countryList[0].eur;
