import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: "cn",
    countries: {
      "86": "86(中国大陆)",
      "886": "886(台湾)",
      "852": "852(香港)",
      "853": "853(澳门)",
      "244": "244(Angola)",
      "93": "93(Afghanistan)",
      "355": "355(Albania)",
      "213": "213(Algeria)",
      "376": "376(Andorra)",
      "1264": "1264(Anguilla)",
      "1268": "1268(Antigua and Barbuda)",
      "54": "54(Argentina)",
      "374": "374(Armenia)",
      "61": "61(Australia)",
      "43": "43(Austria)",
      "994": "994(Azerbaijan)",
      "1242": "1242(Bahamas)",
      "973": "973(Bahrain)",
      "880": "880(Bangladesh)",
      "1246": "1246(Barbados)",
      "375": "375(Belarus)",
      "32": "32(Belgium)",
      "501": "501(Belize)",
      "229": "229(Benin)",
      "1441": "1441(Bermuda)",
      "591": "591(Bolivia)",
      "267": "267(Botswana)",
      "55": "55(Brazil)",
      "673": "673(Brunei)",
      "359": "359(Bulgaria)",
      "226": "226(Burkina Faso)",
      "95": "95(Myanmar)",
      "257": "257(Burundi)",
      "237": "237(Cameroon)",
      "1": "1(Canada)",
      "236": "236(Central African Republic)",
      "235": "235(Chad)",
      "56": "56(Chile)",
      "57": "57(Colombia)",
      "682": "682(Cook Islands)",
      "506": "506(Costa Rica)",
      "242": "242(Congo)",
      "53": "53(Cuba)(Congo)",
      "357": "357(Cyprus)",
      "420": "420(Czech Republic)",
      "45": "45(Denmark)",
      "253": "253(Djibouti)",
      "1890": "1890(Dominican Republic)",
      "593": "593(Ecuador)",
      "20": "20(Egypt)",
      "503": "503(El Salvador)",
      "372": "372(Estonia)",
      "251": "251(Ethiopia)",
      "679": "679(Fiji Islands)",
      "358": "358(Finland)",
      "33": "33(France)",
      "594": "594(French Guiana)",
      "241": "241(Gabon)",
      "220": "220(Gambia)",
      "995": "995(Georgia)",
      "49": "49(Germany)",
      "233": "233(Ghana)",
      "350": "350(Gibraltar)",
      "30": "30(Greece)",
      "1809": "1809(Grenada)",
      "1671": "1671(Guam)",
      "502": "502(Guatemala)",
      "224": "224(Guinea)",
      "592": "592(Guyana)",
      "509": "509(Haiti)",
      "504": "504(Honduras)",
      "36": "36(Hungary)",
      "354": "354(Iceland)",
      "91": "91(India)",
      "62": "62(Indonesia)",
      "98": "98(Iran)",
      "964": "964(Iraq)",
      "353": "353(Ireland)",
      "972": "972(Israel)",
      "39": "39(Italy)",
      "1876": "1876(Jamaica)",
      "81": "81(Japan)",
      "962": "962(Jordan)",
      "855": "855(Cambodia)",
      "327": "327(Kazakhstan)",
      "254": "254(Kenya)",
      "965": "965(Kuwait)",
      "331": "331(Kyrgyzstan)",
      "856": "856(Laos)",
      "371": "371(Latvia)",
      "266": "266(Lesotho)",
      "961": "961(Lebanon)",
      "231": "231(Liberia)",
      "218": "218(Libya)",
      "423": "423(Liechtenstein)",
      "370": "370(Lithuania)",
      "352": "352(Luxembourg)",
      "261": "261(Madagascar)",
      "265": "265(Malawi)",
      "60": "60(Malaysia)",
      "960": "960(Maldives)",
      "223": "223(Mali)",
      "356": "356(Malta)",
      "230": "230(Mauritius)",
      "52": "52(Mexico)",
      "373": "373(Moldova)",
      "377": "377(Monaco)",
      "976": "976(Mongolia)",
      "1664": "1664(Montserrat)",
      "212": "212(Morocco)",
      "258": "258(Mozambique)",
      "264": "264(Namibia)",
      "674": "674(Nauru)",
      "977": "977(Nepal)",
      "31": "31(Netherlands)",
      "64": "64(New Zealand)",
      "505": "505(Nicaragua)",
      "227": "227(Niger)",
      "234": "234(Nigeria)",
      "850": "850(South Korea)",
      "47": "47(Norway)",
      "968": "968(Oman)",
      "92": "92(Pakistan)",
      "507": "507(Panama)",
      "675": "675(Papua New Guinea)",
      "595": "595(Paraguay)",
      "51": "51(Peru)",
      "63": "63(Philippines)",
      "48": "48(Poland)",
      "689": "689(French Polynesia)",
      "351": "351(Portugal)",
      "1787": "1787(Puerto Rico)",
      "974": "974(Qatar)",
      "40": "40(Romania)",
      "7": "7(Russia)",
      "1758": "1758(St. Lucia)",
      "1784": "1784(St. Vincent and the Grenadines)",
      "378": "378(San Marino)",
      "239": "239(Sao Tome and Principe)",
      "966": "966(Saudi Arabia)",
      "221": "221(Senegal)",
      "248": "248(Seychelles)",
      "232": "232(Sierra Leone)",
      "65": "65(Singapore)",
      "421": "421(Slovakia)",
      "386": "386(Slovenia)",
      "677": "677(Solomon Islands)",
      "27": "27(South Africa)",
      "252": "252(Somalia)",
      "82": "82(South Korea)",
      "249": "249(Sultan)",
      "963": "963(Syria)",
      "34": "34(Spain)",
      "94": "94(Sri Lanka)",
      "597": "597(Suriname)",
      "268": "268(Swaziland)",
      "46": "46(Sweden)",
      "41": "41(Switzerland)",
      "992": "992(Tajikistan)",
      "255": "255(Tanzania)",
      "66": "66(Thailand)",
      "228": "228(Togo)",
      "676": "676(Tonga)",
      "1809": "1809(Trinidad and Tobago)",
      "216": "216(Tunisia)",
      "90": "90(Turkey)",
      "993": "993(Turkmenistan)",
      "256": "256(Uganda)",
      "380": "380(Ukraine)",
      "971": "971(United Arab Emirates)",
      "44": "44(United Kingdom)",
      "001": "001(United States)",
      "598": "598(Uruguay)",
      "233": "233(Uzbekistan)",
      "58": "58(Venezuela)",
      "84": "84(Viet Nam)",
      "967": "967(Yemen)",
      "381": "381(Serbia and Montenegro)",
      "263": "263(Zimbabwe)",
      "260": "260(Zambia)",
      "243": "243(Zaire)",
    },
    countriesShort: {
      "CN": "中国大陆",
      "TW": "台湾",
      "HK": "香港",
      "MO": "澳门",
      "CA": "Canada",
      "AF": "Afghanistan",
      "AL": "Albania",
      "DZ": "Algeria",
      "AS": "American Samoa",
      "AD": "Andorra",
      "AO": "Angola",
      "AI": "Anguilla",
      "AQ": "Antarctica",
      "AG": "Antigua and Barbuda",
      "AR": "Argentina",
      "AM": "Armenia",
      "AW": "Aruba",
      "AU": "Australia",
      "AT": "Austria",
      "AZ": "Azerbaijan",
      "BS": "Bahamas",
      "BH": "Bahrain",
      "BD": "Bangladesh",
      "BB": "Barbados",
      "BY": "Belarus",
      "BE": "Belgium",
      "BZ": "Belize",
      "BJ": "Benin",
      "BM": "Bermuda",
      "BT": "Bhutan",
      "BO": "Bolivia",
      "BA": "Bosnia and Herzegovina",
      "BW": "Botswana",
      "BV": "Bouvet Island",
      "BR": "Brazil",
      "IO": "British Indian Ocean Territory",
      "BN": "Brunei",
      "BG": "Bulgaria",
      "BF": "Burkina Faso",
      "BI": "Burundi",
      "KH": "Cambodia",
      "CM": "Cameroon",
      "CV": "Cape Verde",
      "KY": "Cayman Islands",
      "CF": "Central African Republic",
      "TD": "Chad",
      "CL": "Chile",
      "CX": "Christmas Island",
      "CC": "Cocos (Keeling) Islands",
      "CO": "Colombia",
      "KM": "Comoros",
      "CK": "Cook Islands",
      "CR": "Costa Rica",
      "HR": "Croatia (Hrvatska)",
      "CY": "Cyprus",
      "CZ": "Czech Republic",
      "DK": "Denmark",
      "DJ": "Djibouti",
      "DM": "Dominica",
      "DO": "Dominican Republic",
      "TP": "East Timor",
      "EC": "Ecuador",
      "EG": "Egypt",
      "SV": "El Salvador",
      "GQ": "Equatorial Guinea",
      "EE": "Estonia",
      "ET": "Ethiopia",
      "FK": "Falkland Islands (Islas Malvinas)",
      "FO": "Faroe Islands",
      "FJ": "Fiji Islands",
      "FI": "Finland",
      "FR": "France",
      "GF": "French Guiana",
      "PF": "French Polynesia",
      "TF": "French Southern and Antarctic Lands",
      "GA": "Gabon",
      "GM": "Gambia",
      "GE": "Georgia",
      "DE": "Germany",
      "GH": "Ghana",
      "GI": "Gibraltar",
      "GR": "Greece",
      "GL": "Greenland",
      "GD": "Grenada",
      "GP": "Guadeloupe",
      "GU": "Guam",
      "GT": "Guatemala",
      "GN": "Guinea",
      "GW": "Guinea-Bissau",
      "GY": "Guyana",
      "HT": "Haiti",
      "HN": "Honduras",
      "HU": "Hungary",
      "IS": "Iceland",
      "IN": "India",
      "ID": "Indonesia",
      "IE": "Ireland",
      "IL": "Israel",
      "IT": "Italy",
      "JM": "Jamaica",
      "JP": "Japan",
      "JO": "Jordan",
      "KZ": "Kazakhstan",
      "KE": "Kenya",
      "KI": "Kiribati",
      "KW": "Kuwait",
      "KG": "Kyrgyzstan",
      "LA": "Laos",
      "LV": "Latvia",
      "LS": "Lesotho",
      "LI": "Liechtenstein",
      "LT": "Lithuania",
      "LU": "Luxembourg",
      "MK": "Macedonia",
      "MG": "Madagascar",
      "MW": "Malawi",
      "MY": "Malaysia",
      "MV": "Maldives",
      "ML": "Mali",
      "MT": "Malta",
      "MH": "Marshall Islands",
      "MQ": "Martinique",
      "MR": "Mauritania",
      "MU": "Mauritius",
      "YT": "Mayotte",
      "MX": "Mexico",
      "FM": "Micronesia",
      "MD": "Moldova",
      "MC": "Monaco",
      "MN": "Mongolia",
      "MS": "Montserrat",
      "MA": "Morocco",
      "MZ": "Mozambique",
      "MM": "Myanmar",
      "NA": "Namibia",
      "NR": "Nauru",
      "NP": "Nepal",
      "NL": "Netherlands",
      "AN": "Netherlands Antilles",
      "NC": "New Caledonia",
      "NZ": "New Zealand",
      "NI": "Nicaragua",
      "NE": "Niger",
      "NG": "Nigeria",
      "NU": "Niue",
      "NF": "Norfolk Island",
      "MP": "Northern Mariana Islands",
      "NO": "Norway",
      "OM": "Oman",
      "PK": "Pakistan",
      "PW": "Palau",
      "PA": "Panama",
      "PG": "Papua New Guinea",
      "PY": "Paraguay",
      "PE": "Peru",
      "PH": "Philippines",
      "PN": "Pitcairn Islands",
      "PL": "Poland",
      "PT": "Portugal",
      "PR": "Puerto Rico",
      "QA": "Qatar",
      "RE": "Reunion",
      "RO": "Romania",
      "RU": "Russia",
      "RW": "Rwanda",
      "WS": "Samoa",
      "SM": "San Marino",
      "ST": "Sao Tome and Principe",
      "SA": "Saudi Arabia",
      "SN": "Senegal",
      "YU": "Serbia and Montenegro",
      "SC": "Seychelles",
      "SL": "Sierra Leone",
      "SG": "Singapore",
      "SK": "Slovakia",
      "SI": "Slovenia",
      "SB": "Solomon Islands",
      "ZA": "South Africa",
      "GS": "South Georgia and the South Sandwich Islands",
      "KP": "South Korea",
      "ES": "Spain",
      "LK": "Sri Lanka",
      "SH": "St. Helena",
      "KN": "St. Kitts and Nevis",
      "LC": "St. Lucia",
      "PM": "St. Pierre and Miquelon",
      "VC": "St. Vincent and the Grenadines",
      "SR": "Suriname",
      "SJ": "Svalbard and Jan Mayen",
      "SZ": "Swaziland",
      "SE": "Sweden",
      "CH": "Switzerland",
      "TJ": "Tajikistan",
      "TZ": "Tanzania",
      "TH": "Thailand",
      "TG": "Togo",
      "TK": "Tokelau",
      "TO": "Tonga",
      "TT": "Trinidad and Tobago",
      "TN": "Tunisia",
      "TR": "Turkey",
      "TM": "Turkmenistan",
      "TC": "Turks and Caicos Islands",
      "TV": "Tuvalu",
      "UG": "Uganda",
      "UA": "Ukraine",
      "AE": "United Arab Emirates",
      "GB": "United Kingdom",
      "UY": "Uruguay",
      "UZ": "Uzbekistan",
      "VU": "Vanuatu",
      "VA": "Vatican City",
      "VE": "Venezuela",
      "VN": "Viet Nam",
      "VI": "Virgin Islands",
      "VG": "Virgin Islands (British)",
      "WF": "Wallis and Futuna",
      "YE": "Yemen",
      "ZM": "Zambia",
      "ZW": "Zimbabwe",
    }
  },
  mutations: {
    storageLang(state,lang){
        state.language = lang;
    }
  },
  actions: {

  }
})
