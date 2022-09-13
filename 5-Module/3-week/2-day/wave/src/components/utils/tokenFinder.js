export function findToken(hash){
	return hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1]
}
