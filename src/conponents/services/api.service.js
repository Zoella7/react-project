class ApiService{

    baseUrl ='https://jsonplaceholder.typicode.com/';

    getComments(){

        return fetch(this.baseUrl + 'comments')
            .then(value => value.json())
    }

    getComment(id) {
        return fetch(this.baseUrl  + 'comments/'+ id)
            .then(value => value.json())
    }


    getPosts(){

        return fetch(this.baseUrl +'posts')
            .then(value => value.json())
    }

    getPost(id){

        return fetch(this.baseUrl +'posts/' + id )
            .then(value => value.json())
    }

}
export default ApiService
