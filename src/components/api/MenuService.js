import axios from "axios";

export const getMenus = async (userId) => {
   try{
       let data =  await axios.get(`http://127.0.0.1:4523/mock/1920381/getMenus/${userId}`);
       console.log('获取菜单: ', data);
       return Promise.resolve(data.data);
   } catch (e) {
       return Promise.reject(e);
   }
}
