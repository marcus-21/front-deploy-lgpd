// const BASE_URL = "http://localhost:3000"
const BASE_URL = "https://server-test-deploy5.onrender.com"
// const BASE_URL = "http://192.168.200.226"
// TESTE const BASE_URL = "http://52.67.124.155"

const request = async (method, endpoint, params, token=null) => {
    method = method.toUpperCase();

    let headers = {'Content-Type': 'application/json'};
    let fullUrl = `${BASE_URL}${endpoint}`;
    let body = null;

    body = JSON.stringify(params);

    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    let req = await fetch(fullUrl, {method, headers, body}).catch(console.error);

    let json = await req.json();

    return json;
}

export default () => {
    return {
        // endpoints usuário
        gettoken: () => {
            return sessionStorage.getItem('token');
        },
        login: async (email, pass) => {
            let json = await request('post', '/login', { email, pass });
            return json;
        },
        logout: () => {
            sessionStorage.clear();
        },
        userSavePass: async ( email ) => {
            let json = await request('get',
              `/user/${ email }`,undefined);
            return json;
        },
        userUpdate: async ( email ) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('patch', `/user/${ user.id }`, { email } , token);
            return json;
        },
        userUpdatePass: async ( raw ) => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('patch', `/user/update-pass/${user.id}`, raw , token);
            return json;
        },
        // endpoints dpo
        postDPO: async ( raw ) => {
            const token =  sessionStorage.getItem( 'token' );
            const user = JSON.parse(sessionStorage.getItem( 'user' ));
            let json = await request ('post', `/dpo`, { ...raw , userId: user.id }, token)
            return json;
        },
        dpoFindAll: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('get', `/dpo/all/${ user.id }`, undefined , token);
            return json;
        },
        actualDpo: async () => {
          const token = sessionStorage.getItem('token');
          const user = JSON.parse(sessionStorage.getItem('user'));
          let json =  await request('get', `/dpo/actual/${user.id}`, undefined, token)
          return json;
        },
        dpoFindOne: async (id) => {
            const token = sessionStorage.getItem('token');
            let json = await request('get', `/dpo/${ id }`, undefined , token);
            return json;
        },
        dpoUpdateEmail: async ( id , raw ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('patch', `/dpo/${ id }`, raw , token);
            return json;
        },
        dpoRemove: async ( id ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('delete', `/dpo/${ id }`, undefined , token);
            return json;
        },

        // endpoints inventário
        postMapping: async ( raw ) => {
            const token =  sessionStorage.getItem( 'token' );
            const user = JSON.parse(sessionStorage.getItem( 'user' ));
            let json = await request ('post', `/mapping`, {userId: user.id, ...raw ,  }, token)
            return json;
        },
        mappingFindAll: async () => {
            const token = sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request('get', `/mapping/all/${ user.id }`, undefined , token);
            return json;
        },
        mappingFindOne: async ( id ) => {
            const token = sessionStorage.getItem('token');
            let json = await request ('get', `/mapping/${ id }`, undefined , token);
            return json;
        },
        mappingUpdate: async ( id , raw ) => {
            const token = sessionStorage.getItem('token');
            let json = await request('patch', `/mapping/${ id }`, raw , token);
            return json;
        },
        mappingDelete: async ( id ) => {
            const token = sessionStorage.getItem( 'token' );
            let json = await request('delete', `/mapping/${ id }`, undefined , token);
            return json
        },

        // endpoints setor
        postSector: async ( tagName ) => {
            const token =  sessionStorage.getItem( 'token' );
            const user = JSON.parse(sessionStorage.getItem( 'user' ));
            let json = await request ('post', `/sector`, { tagName , userId: user.id } , token)
            return json;
        },
        sectorFindAll: async () => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('get', `/sector/all/${ user.id }`, undefined , token)
            return json;
        },
        sectorFindOne: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('get', `/sector/${ id }`, undefined , token)
            return json;
        },
        sectorUpdate: async ( id, tagName) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('put', `/sector/${ id }`, { tagName }, token)
            return json;
        },
        sectorDelete:  async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('delete', `/sector/${ id }`, undefined , token)
            return json;
        },

        // endpoints quiz
        quizFindAll: async () => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('get', `/quiz/all/${ user.id }`, undefined , token )
            return json;
        },
        quizFindOne: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('get', `/quiz/${id}`, undefined , token )
            return json;
        },
        quizDelete: async (id) => {
            const token =  sessionStorage.getItem('token');
            let json = await request ('delete', `/quiz/${id}`, undefined , token )
            return json;
        },
        postQuiz: async (raw) => {
            const token =  sessionStorage.getItem('token');
            const user = JSON.parse(sessionStorage.getItem('user'));
            let json = await request ('post', '/quiz', {...raw, userId: user.id } , token )
            return json;
        }
    }
}
