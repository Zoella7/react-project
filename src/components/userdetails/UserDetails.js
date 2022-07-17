const UserDetails = ({user}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>
                {JSON.stringify(user)}
            </div>

                 </div>
    );
};


export {UserDetails};