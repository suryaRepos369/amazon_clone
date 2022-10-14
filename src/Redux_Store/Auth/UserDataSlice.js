import { axios } from 'axios';


async function getFirebaseData(){

try {
    let res = await axios.get('https://auth-develeopement-default-rtdb.firebaseio.com/posts.json')
    console.log('res:', res)
    
} catch (error) {
    console.log('error:', error)

    
}    
}

getFirebaseData();