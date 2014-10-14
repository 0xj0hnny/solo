//return geoetry, place_id for places
var getPlaces = function(place){
	var places = allPlaces.data;
  var allData = [];
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var data = [];
    data.push(place.name); 
    data.push(place.geometry.latitude);
    data.push(place.geometry.longitude); 
    allData.push(data);
  }
  return allData;
}

var allPlaces = {
[{"name":"First Crush",
	"reference":"CnRtAAAAEsqhBE0re22TWLVwbmgdFYruiUK9zGxzOoGutHzG10txGScfR13H1WuZnsstfw_P-pGPKqV5-N008KCvS-ecfcy0OGn5gWvrm2UBPYKUyfjuPKIL8dyW1zW6hd3Tj9nJOIqTq4Y5hYJfb6-K-4LtVxIQvWfgQuD2InpauREye0MHuRoUvjqolhcyD4U4rZfR0zo0ixZH5UQ",
	"vicinity":"101 Cyril Magnin St, San Francisco"},
	{"name":"Bourbon Steak San Francisco",
	"reference":"CoQBfgAAAOs8DeLMw1-hQQO29wDPcopYZbNHlz9kaFV6uHMglStQqb_fyA6ykRyLOAmqvVBQ4JUWYFEa_G_VB-WB2toYdOwq3dldJP4-B5LApE0yjOWlnh2ptdrKUHs8oNNqo-BziQ_rux23w_ipr8Rn-CCig8B9fZZqQGL-ULnmGTHw0QsbEhCDIsjpj0pHzOA8xC--u2kHGhQBbmcPDG2P-tMMnvWUtL0-zJnsVw",
	"vicinity":"335 Powell St, San Francisco"},
	{"name":"Hana Zen",
	"reference":"CnRqAAAAgWgMaq82jPHAFSWbjrVI7o45hxBl23E_z2HpZbSUhUNmF9N9WSF__G9Gx_nV536GcMXaeg5OPTjldKSSUKrtDCugGy0Stg_Hl68sGKgTMCGAtn45ro1ieCYrFrpJZHQl_wEmMIe7-US-9NpM8vDx5BIQprhoM4PhmCc0AyAnRg31MhoURKUfytbI8hR7Y68TUCso7gzoO1M",
	"vicinity":"115 Cyril Magnin St, San Francisco"},
	{"name":"Scala's Bistro",
	"reference":"CoQBcQAAAAPrvFxLGBENxwwYJ9Xr0t1A1jH-m0g1B21wCwE8DdlbQdzMdW5NwfR1N_T_2G1h4MwsQBPuyF-9yABC-QJ815KsiiBEGLJQnIdyJs8pPRB89zk28sTBXq81YIelkW51AvX_Me8Lw_Qq9NJFaj8Q6HrxOQvTrONMIlqjXQsqvTvpEhBfuETNpFD1bXFciaiynN7cGhQY5BDRAktkWElHIehexUOjeLKGKA",
	"vicinity":"432 Powell St, San Francisco"},
	{"name":"Absinthe Brasserie & Bar",
	"reference":"CoQBegAAAByFwCh8NPlDJpkjPp8TWA3Gjs5CV6DgKUzIT0ezB1nczq9eLOcN4SbfiQnhBALPVl8fEzMI0yiPPBzyTRGIb0CW8--JI9r0loyw3Y656GF5qcv3mYwavS8KLxgDwp96oaij816Mbn8pP-mls1Ps-cuTCzdGk4VZzodxjk6l2rFUEhBeQPDTrTLGjkjSId_eT1S1GhQQ8-hFbWK7o-PlUWqw_qL5eDfs7w","vicinity":"398 Hayes St, San Francisco"},
	{"name":"Ebisu Restaurant","reference":"CoQBcgAAAItqlDdfqyn_06WthblZYnjF7A4ziTX601i21N00tNsnEMiWvtjIrB9mkCN9MpOYinOq0-qthnY2yFOh6e0BHRJtwfERuCEd4oEzF3S4GyfKGwzR573DWvisZNwbvOwNnSgwi_7_I6dkqWuWeTgTTuyYwlKzyuMIBdUO8du3d1-tEhDqRpLXWR3hTmOb0ycR0L-3GhSSjSUtWXRRHzP9Fad2vwlk3Oh2ig",
	"vicinity":"1283 9th Ave, San Francisco"}
]}