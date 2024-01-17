import axios from 'axios';

const url = 'http://localhost:3000/api/v1/database';

class BackEndService {
    //Get Posts
    /*static getLogins() {
        return new Promise(async (resolve, reject) => {
            try
            {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }
            catch(err)
            {
                reject(err);
            }
        })
    }*/
    //Create Post
  static addAccount(login_name, display_name, pass_word) {
    const urladd = url+"/account/add";
    alert(urladd);
        return axios.post(urladd, {
            login_name: login_name,
            display_name: display_name,
            pass_word: pass_word
        });
    }

    static async addCandidat(last_name, first_name, email) {
        const urladd = url+"/dc/addDC";
        alert(urladd);
            let result = await axios.post(urladd, {
                firstname: first_name,
                familyname: last_name,
                email: email
            });
            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                        //this.$router.push({name:'HelloWorld'})
        }
    }

    //Delete Post
   /*   static deleteLogin(id) {
        return axios.delete('${url}${id}'); 
    }*/

     //Authentification
     static authentificationLogin(login_name, pass_word) {
        //return axios.post('${url}${login_name}${pass_word}'); 
        const urladd = url+"/account";
        return axios.post(urladd, {
            login_name: login_name,
            pass_word: pass_word
        }); 
    }
}

export default BackEndService;